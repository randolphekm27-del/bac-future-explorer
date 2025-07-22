import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Label } from "./label";
import { useToast } from "@/hooks/use-toast";
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
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulation d'envoi - En production, connecter à une API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Demande envoyée avec succès !",
        description: "Notre équipe vous contactera dans les plus brefs délais.",
      });
      
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
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive",
      });
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
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="companyName">
                {type === "company" ? "Nom de l'entreprise" : "Nom de l'organisation"} *
              </Label>
              <Input
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="sector">
                {type === "company" ? "Secteur d'activité" : "Domaine de formation"} *
              </Label>
              <Input
                id="sector"
                name="sector"
                value={formData.sector}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="contactPerson">Nom du contact *</Label>
              <Input
                id="contactPerson"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email professionnel *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Téléphone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            {type === "trainer" && (
              <div>
                <Label htmlFor="experience">Années d'expérience</Label>
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
            <Label htmlFor="message">
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
              rows={4}
              required
              placeholder={
                type === "company" 
                  ? "Parlez-nous de votre entreprise, vos offres de stage/emploi, et comment nous pouvons collaborer..."
                  : "Décrivez votre expertise, les formations que vous souhaitez proposer, votre public cible..."
              }
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Annuler
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}