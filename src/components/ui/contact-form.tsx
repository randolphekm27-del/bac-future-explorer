import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Label } from "./label";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  type: "company" | "trainer";
  title: string;
  description: string;
}

export function ContactForm({ isOpen, onClose, type, title, description }: ContactFormProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    sector: "",
    email: "",
    phone: "",
    message: "",
    contactPerson: "",
    experience: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-email`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: type,
          email: formData.email,
          data: {
            ...formData,
            formType: type,
            submissionDate: new Date().toISOString()
          }
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erreur lors de l\'envoi');
      }
      
      toast.success("Demande envoyée avec succès ! Notre équipe vous contactera dans les plus brefs délais. 📧");
      
      setFormData({
        companyName: "",
        sector: "",
        email: "",
        phone: "",
        message: "",
        contactPerson: "",
        experience: "",
      });
      onClose();
    } catch (error) {
      console.error('Erreur formulaire:', error);
      toast.error("Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text">{title}</DialogTitle>
          <DialogDescription className="text-base">{description}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="companyName" className="text-sm font-medium">
                {type === "company" ? "Nom de l'entreprise" : "Nom de l'organisation"} *
              </Label>
              <Input
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
                placeholder={type === "company" ? "Ex: TechCorp SARL" : "Ex: Formation Pro"}
              />
            </div>

            <div>
              <Label htmlFor="sector" className="text-sm font-medium">
                {type === "company" ? "Secteur d'activité" : "Domaine de formation"} *
              </Label>
              <Input
                id="sector"
                name="sector"
                value={formData.sector}
                onChange={handleInputChange}
                required
                placeholder={type === "company" ? "Ex: Technologies, Santé..." : "Ex: Informatique, Marketing..."}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="contactPerson" className="text-sm font-medium">Nom du contact *</Label>
              <Input
                id="contactPerson"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleInputChange}
                required
                placeholder="Nom et prénom"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium">Email professionnel *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="contact@entreprise.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone" className="text-sm font-medium">Téléphone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+229 XX XX XX XX"
              />
            </div>

            {type === "trainer" && (
              <div>
                <Label htmlFor="experience" className="text-sm font-medium">Années d'expérience</Label>
                <Input
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="Ex: 5 ans"
                />
              </div>
            )}
          </div>

          <div>
            <Label htmlFor="message" className="text-sm font-medium">
              {type === "company" 
                ? "Décrivez votre entreprise et vos besoins" 
                : "Décrivez votre expertise et les formations que vous proposez"
              } *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              required
              placeholder={
                type === "company" 
                  ? "Présentez votre entreprise, vos offres de stage/emploi, et comment nous pouvons collaborer pour accompagner nos étudiants..."
                  : "Décrivez votre expertise, les formations que vous souhaitez proposer, votre public cible, vos méthodes pédagogiques..."
              }
              className="resize-none"
            />
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <p className="text-sm text-primary font-medium mb-2">
              📧 Après validation de votre demande :
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Notre équipe vous contactera sous 48h</li>
              <li>• Nous étudierons ensemble les modalités de partenariat</li>
              <li>• Nous mettrons en avant votre {type === "company" ? "entreprise" : "formation"} sur la plateforme</li>
            </ul>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Annuler
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 gradient-primary"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Envoi en cours...
                </div>
              ) : (
                'Envoyer la demande'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}