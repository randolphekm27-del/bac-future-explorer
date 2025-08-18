import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog";
import { Label } from "./label";
import { MessageCircle, Phone, Send } from "lucide-react";

interface WhatsAppContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  type: "formation" | "entreprise";
}

export function WhatsAppContactForm({ 
  isOpen, 
  onClose, 
  title, 
  description, 
  type 
}: WhatsAppContactFormProps) {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    entreprise: "",
    secteur: "",
    message: "",
    formation: "",
    duree: "",
    prix: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let whatsappMessage = `*${title}*\n\n`;
    whatsappMessage += `📧 *Email:* ${formData.email}\n`;
    whatsappMessage += `👤 *Nom:* ${formData.nom}\n`;
    whatsappMessage += `📞 *Téléphone:* ${formData.telephone}\n`;
    
    if (type === "formation") {
      whatsappMessage += `📚 *Formation:* ${formData.formation}\n`;
      whatsappMessage += `⏱️ *Durée:* ${formData.duree}\n`;
      whatsappMessage += `💰 *Prix:* ${formData.prix}\n`;
    } else {
      whatsappMessage += `🏢 *Entreprise:* ${formData.entreprise}\n`;
      whatsappMessage += `🎯 *Secteur:* ${formData.secteur}\n`;
    }
    
    whatsappMessage += `\n💬 *Message:*\n${formData.message}`;
    
    const phoneNumber = "22957703972";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-green-600" />
            {title}
          </DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="nom">Nom complet *</Label>
              <Input
                id="nom"
                value={formData.nom}
                onChange={(e) => handleInputChange("nom", e.target.value)}
                required
                placeholder="Votre nom"
                data-testid="input-nom"
              />
            </div>
            
            <div>
              <Label htmlFor="telephone">Téléphone *</Label>
              <Input
                id="telephone"
                value={formData.telephone}
                onChange={(e) => handleInputChange("telephone", e.target.value)}
                required
                placeholder="+229..."
                data-testid="input-telephone"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
              placeholder="votre.email@exemple.com"
              data-testid="input-email"
            />
          </div>

          {type === "formation" ? (
            <>
              <div>
                <Label htmlFor="formation">Nom de la formation *</Label>
                <Input
                  id="formation"
                  value={formData.formation}
                  onChange={(e) => handleInputChange("formation", e.target.value)}
                  required
                  placeholder="Nom de votre formation"
                  data-testid="input-formation"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="duree">Durée</Label>
                  <Input
                    id="duree"
                    value={formData.duree}
                    onChange={(e) => handleInputChange("duree", e.target.value)}
                    placeholder="Ex: 3 mois, 1 an"
                    data-testid="input-duree"
                  />
                </div>
                
                <div>
                  <Label htmlFor="prix">Prix estimé</Label>
                  <Input
                    id="prix"
                    value={formData.prix}
                    onChange={(e) => handleInputChange("prix", e.target.value)}
                    placeholder="Ex: 50,000 FCFA"
                    data-testid="input-prix"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <Label htmlFor="entreprise">Nom de l'entreprise *</Label>
                <Input
                  id="entreprise"
                  value={formData.entreprise}
                  onChange={(e) => handleInputChange("entreprise", e.target.value)}
                  required
                  placeholder="Nom de votre entreprise"
                  data-testid="input-entreprise"
                />
              </div>
              
              <div>
                <Label htmlFor="secteur">Secteur d'activité *</Label>
                <Input
                  id="secteur"
                  value={formData.secteur}
                  onChange={(e) => handleInputChange("secteur", e.target.value)}
                  required
                  placeholder="Ex: Technologie, Commerce, Agriculture..."
                  data-testid="input-secteur"
                />
              </div>
            </>
          )}
          
          <div>
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              required
              placeholder={type === "formation" 
                ? "Décrivez votre formation, son contenu, les compétences acquises..." 
                : "Décrivez votre entreprise, les postes disponibles, les conditions..."
              }
              rows={4}
              data-testid="textarea-message"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Annuler
            </Button>
            <Button 
              type="submit" 
              className="flex-1 bg-green-600 hover:bg-green-700 text-white"
              data-testid="button-send-whatsapp"
            >
              <Phone className="mr-2 h-4 w-4" />
              Envoyer sur WhatsApp
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}