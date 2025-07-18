import { useState, useEffect } from 'react';
import { X, Mail, Gift } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';
import { cn } from '@/lib/utils';

export function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsVisible(false);
        localStorage.setItem('newsletter-dismissed', 'true');
      }, 2000);
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
              Recevez gratuitement notre guide d'orientation et restez informé des meilleures opportunités.
            </p>
            
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
                />
              </div>
              
              <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                Recevoir le guide gratuit
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground mt-4">
              Pas de spam, désinscription facile à tout moment.
            </p>
          </div>
        ) : (
          <div className="text-center animate-fade-in">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Merci ! 🎉</h3>
            <p className="text-muted-foreground">
              Votre guide d'orientation vous attend dans votre boîte mail !
            </p>
          </div>
        )}
      </div>
    </div>
  );
}