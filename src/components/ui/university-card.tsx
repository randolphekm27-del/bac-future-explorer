import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import type { University } from "@/data/universities";

interface UniversityCardProps {
  university: University;
}

export function UniversityCard({ university }: UniversityCardProps) {
  return (
    <Link to={`/universities/${university.slug}`}>
      <div className="group rounded-lg border bg-background overflow-hidden hover:border-primary/50 transition-colors animate-scale-in">
        <div className="aspect-video w-full overflow-hidden bg-muted">
          <img
            src={university.image}
            alt={university.name}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                university.type === "Public"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-emerald-100 text-emerald-800"
              }`}
            >
              {university.type}
            </span>
            <span className="flex items-center text-xs text-muted-foreground">
              <MapPin className="mr-1 h-3 w-3" />
              {university.location}
            </span>
          </div>
          <h3 className="font-semibold group-hover:text-primary transition-colors">
            {university.name}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {university.description}
          </p>
          <button className="mt-4 text-sm font-medium text-primary hover:underline">
            Voir les détails
          </button>
        </div>
      </div>
    </Link>
  );
}