import { useState, useEffect } from 'react';
import { X, Mail, Gift, CheckCircle } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

export function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem('newsletter-dismissed')) {
        setIsVisible(true);
      }
    }, 10000); // Show after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('newsletter-dismissed', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation côté client
    if (!email.trim()) {
      toast.error("Veuillez saisir votre adresse email");
      return;
    }
    
    // Validation format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      toast.error("Veuillez saisir un email valide");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-email`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'newsletter',
          email: email,
          data: {
            source: 'newsletter-popup',
            timestamp: new Date().toISOString()
          }
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erreur lors de l\'envoi');
      }

      setIsSubmitted(true);
      toast.success('Guide envoyé ! Vérifiez votre boîte mail 📧');
      
      setTimeout(() => {
        setIsVisible(false);
        localStorage.setItem('newsletter-dismissed', 'true');
      }, 3000);

    } catch (error) {
      console.error('Erreur newsletter:', error);
      toast.error('Erreur lors de l\'envoi. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/50 animate-fade-in"
        onClick={handleClose}
      />
      
      <div className={cn(
        "relative bg-background border shadow-2xl rounded-2xl p-8 max-w-md w-full mx-4",
        "animate-scale-in transform-gpu"
      )}>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4"
          onClick={handleClose}
        >
          <X className="w-5 h-5" />
        </Button>

        {!isSubmitted ? (
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Gift className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold mb-2">Offre spéciale ! 🎓</h3>
            <p className="text-muted-foreground mb-6">
              Recevez <strong>gratuitement</strong> notre guide d'orientation complet avec toutes les universités du Bénin, les filières et leurs débouchés !
            </p>
            
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
              <p className="text-sm text-primary font-medium">📚 Le guide contient :</p>
              <ul className="text-xs text-left mt-2 space-y-1">
                <li>✅ Toutes les universités du Bénin</li>
                <li>✅ Fiches détaillées des filières</li>
                <li>✅ Conseils pour les candidatures</li>
                <li>✅ Stages et opportunités</li>
              </ul>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Votre adresse email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Envoi en cours...
                  </div>
                ) : (
                  'Recevoir le guide gratuit 🚀'
                )}
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground mt-4">
              Pas de spam, désinscription facile à tout moment.
            </p>
          </div>
        ) : (
          <div className="text-center animate-fade-in">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Parfait ! 🎉</h3>
            <p className="text-muted-foreground mb-4">
              Votre guide d'orientation personnalisé vous attend dans votre boîte mail !
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-sm text-green-700">
                📧 Envoyé à <strong>{email}</strong>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}