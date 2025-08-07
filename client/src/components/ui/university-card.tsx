import { MapPin, Images } from "lucide-react";
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
          >
            <Images className="h-4 w-4 mr-1" />
            Galerie
          </Button>
        )}
      </div>
      <Link to={`/universities/${university.slug}`} className="block w-full premium-focus">
        <div className="px-responsive py-responsive w-full">
          <div className="flex items-center justify-between mb-4 w-full gap-3">
            <span
              className={`text-xs px-3 py-1.5 rounded-full flex-shrink-0 font-medium transition-all duration-300 ${
                university.type === "Public"
                  ? "bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 group-hover:from-blue-200 group-hover:to-blue-100"
                  : "bg-gradient-to-r from-emerald-100 to-emerald-50 text-emerald-800 group-hover:from-emerald-200 group-hover:to-emerald-100"
              }`}
            >
              {university.type}
            </span>
            <span className="flex items-center text-xs text-muted-foreground flex-shrink-0 min-w-0 transition-colors duration-300 group-hover:text-foreground">
              <MapPin className="mr-1 h-3 w-3" />
              <span className="truncate">{university.location}</span>
            </span>
          </div>
          <h3 className="text-responsive-lg font-bold premium-text-gradient break-words mb-3 leading-tight transition-all duration-300 group-hover:scale-105 transform origin-left">
            {university.name}
          </h3>
          <p className="text-responsive-sm text-muted-foreground break-words leading-relaxed line-clamp-3 transition-colors duration-300 group-hover:text-foreground/80">
            {university.description}
          </p>
          
          <div className="mt-6 flex items-center justify-between gap-3">
            <div className="text-sm text-muted-foreground font-medium transition-colors duration-300 group-hover:text-foreground">
              {university.schools.length} école{university.schools.length > 1 ? 's' : ''}
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent flex-shrink-0 group-hover:from-blue-700 group-hover:to-orange-600 transition-all duration-300">
              Découvrir →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}