import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import type { University } from "@/data/universities";

interface UniversityCardProps {
  university: University;
}

export function UniversityCard({ university }: UniversityCardProps) {
  return (
    <Link to={`/universities/${university.slug}`} className="block w-full">
      <div className="group rounded-lg border bg-background overflow-hidden hover:border-primary/50 transition-all duration-300 animate-scale-in w-full hover-lift max-w-full">
        <div className="aspect-video w-full overflow-hidden bg-muted">
          <img
            src={university.image}
            alt={university.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-3 sm:p-6 w-full">
          <div className="flex items-center justify-between mb-2 w-full gap-2">
            <span
              className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ${
                university.type === "Public"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-emerald-100 text-emerald-800"
              }`}
            >
              {university.type}
            </span>
            <span className="flex items-center text-xs text-muted-foreground flex-shrink-0 min-w-0">
              <MapPin className="mr-1 h-3 w-3" />
              <span className="truncate">{university.location}</span>
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-semibold group-hover:text-primary transition-colors break-words mb-2 leading-tight">
            {university.name}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground break-words leading-relaxed line-clamp-3">
            {university.description}
          </p>
          
          <div className="mt-4 flex items-center justify-between gap-2">
            <div className="text-xs text-muted-foreground">
              {university.schools.length} école{university.schools.length > 1 ? 's' : ''}
            </div>
            <span className="text-xs sm:text-sm font-medium text-primary group-hover:underline flex-shrink-0">
              Voir les détails →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}