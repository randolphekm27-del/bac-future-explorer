import { MapPin, Images, Phone, Mail, Globe, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import type { University } from "@/data/universities";

interface UniversityCardProps {
  university: University;
}

export function UniversityCard({ university }: UniversityCardProps) {
  const handleGalleryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = `/universities/${university.slug}/gallery`;
  };

  const handleContactClick = (e: React.MouseEvent, contact: any, type: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (type === 'phone') {
      window.open(`tel:${contact}`, '_blank');
    } else if (type === 'email') {
      window.open(`mailto:${contact}`, '_blank');
    } else if (type === 'website') {
      window.open(contact.startsWith('http') ? contact : `https://${contact}`, '_blank');
    } else if (type === 'whatsapp') {
      window.open(`https://wa.me/${contact.replace(/[^0-9]/g, '')}`, '_blank');
    }
  };

  return (
    <div className="premium-card group w-full max-w-full overflow-hidden scroll-animate stagger-animate font-responsive">
      <div className="aspect-video w-full overflow-hidden bg-muted relative rounded-xl">
        <img
          src={university.image}
          alt={university.name}
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {university.gallery && university.gallery.images && university.gallery.images.length > 0 && (
          <Button
            variant="secondary"
            size="sm"
            className="premium-button-secondary absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
            onClick={handleGalleryClick}
            data-testid="button-gallery"
          >
            <Images className="h-4 w-4 mr-1" />
            Galerie
          </Button>
        )}
      </div>

      <div className="px-responsive py-responsive w-full">
        <div className="flex items-center justify-between mb-4 w-full gap-3">
          <span
            className={`inline-flex items-center justify-center text-sm px-3 py-1.5 rounded-full border border-solid font-medium transition-all duration-300 ${
              university.type === "Public"
                ? "border-blue-200 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 group-hover:from-blue-200 group-hover:to-blue-100 group-hover:border-blue-300"
                : "border-emerald-200 bg-gradient-to-r from-emerald-100 to-emerald-50 text-emerald-800 group-hover:from-emerald-200 group-hover:to-emerald-100 group-hover:border-emerald-300"
            }`}
          >
            {university.type}
          </span>
          <span className="flex items-center text-sm text-muted-foreground flex-shrink-0 min-w-0 transition-colors duration-300 group-hover:text-foreground">
            <MapPin className="mr-1 h-4 w-4" />
            <span className="truncate">{university.location}</span>
          </span>
        </div>

        <Link to={`/universities/${university.slug}`} className="block w-full premium-focus">
          <h3 className="text-responsive-lg font-bold premium-text-gradient break-words mb-3 leading-tight transition-all duration-300 group-hover:scale-105 transform origin-left">
            {university.name}
          </h3>
        </Link>

        <p className="text-responsive-sm text-muted-foreground break-words leading-relaxed line-clamp-3 mb-4">
          {university.description}
        </p>
        
        {/* Contact Information - Better organized */}
        <div className="mb-4 space-y-2">
          <div className="flex flex-wrap gap-2">
            {university.schools?.[0]?.contact?.phone && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-3 text-xs hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 flex items-center gap-2"
                onClick={(e) => handleContactClick(e, university.schools[0].contact.phone, 'phone')}
                data-testid="button-phone"
              >
                <Phone className="h-3 w-3 flex-shrink-0" />
                <span className="font-bold">Appeler</span>
              </Button>
            )}
            
            {university.schools?.[0]?.contact?.email && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-3 text-xs hover:bg-green-50 hover:text-green-700 transition-all duration-200 flex items-center gap-2"
                onClick={(e) => handleContactClick(e, university.schools[0].contact.email, 'email')}
                data-testid="button-email"
              >
                <Mail className="h-3 w-3 flex-shrink-0" />
                <span className="font-bold">Email</span>
              </Button>
            )}
            
            {university.schools?.[0]?.contact?.website && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-3 text-xs hover:bg-purple-50 hover:text-purple-700 transition-all duration-200 flex items-center gap-2"
                onClick={(e) => handleContactClick(e, university.schools[0].contact.website, 'website')}
                data-testid="button-website"
              >
                <Globe className="h-3 w-3 flex-shrink-0" />
                <span className="font-bold">Site web</span>
              </Button>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between gap-3">
          <div className="text-sm text-muted-foreground font-medium transition-colors duration-300 group-hover:text-foreground">
            {university.schools.length} école{university.schools.length > 1 ? 's' : ''}
          </div>
          <Link 
            to={`/universities/${university.slug}`} 
            className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent flex-shrink-0 hover:from-blue-700 hover:to-orange-600 transition-all duration-300"
            data-testid="link-discover"
          >
            Découvrir →
          </Link>
        </div>
      </div>
    </div>
  );
}