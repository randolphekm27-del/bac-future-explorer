import { MapPin, Phone, Mail, Globe, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import type { School, University } from "@/data/universities";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";
import { createProgramSlug } from "@/data/programs";

interface SchoolCardProps {
  school: School;
  university: University;
  expandable?: boolean;
}

export function SchoolCard({ school, university, expandable = true }: SchoolCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group rounded-lg border bg-background p-6 hover:border-primary/50 transition-colors animate-scale-in w-full max-w-full">
      <div className="flex items-start justify-between mb-4 w-full">
        <div className="flex-1">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors break-words">
            {school.name}
          </h3>
          <div className="mt-1 flex items-center text-sm text-muted-foreground flex-wrap">
            <MapPin className="mr-1 h-4 w-4" />
            <span className="break-words">{school.location}, {school.country}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1 break-words">
            {university.name}
          </p>
        </div>
        {expandable && (
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        )}
      </div>

      <p className="text-sm text-muted-foreground mb-4 break-words">
        {school.description}
      </p>

      {/* Filières proposées */}
      <div className="mb-4 w-full">
        <h4 className="text-sm font-medium mb-2">Filières proposées:</h4>
        <div className="flex flex-wrap gap-2 w-full">
          {school.programs.map((program, i) => (
            <Link
              key={i}
              to={`/programs?program=${createProgramSlug(program)}`}
              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors break-words flex-shrink-0"
            >
              {program}
            </Link>
          ))}
        </div>
      </div>

      {/* Conditions d'admission - toujours visibles */}
      <div className="mb-4">
        <h4 className="text-sm font-medium mb-2">Conditions d'admission:</h4>
        <ul className="text-sm text-muted-foreground space-y-1 w-full">
          {school.admissionRequirements.slice(0, isOpen ? undefined : 2).map((requirement, i) => (
            <li key={i} className="flex items-start w-full">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
              <span className="break-words flex-1">{requirement}</span>
            </li>
          ))}
          {!isOpen && school.admissionRequirements.length > 2 && (
            <li className="text-xs text-primary cursor-pointer" onClick={() => setIsOpen(true)}>
              ... et {school.admissionRequirements.length - 2} autres conditions
            </li>
          )}
        </ul>
      </div>

      {/* Contact - affiché selon l'état */}
      {isOpen && (
        <div className="pt-4 border-t w-full animate-fade-in">
          <h4 className="text-sm font-medium mb-2">Contact:</h4>
          <div className="space-y-2 text-sm text-muted-foreground w-full">
            <div className="flex items-center flex-wrap">
              <Mail className="mr-2 h-4 w-4 text-primary" />
              <a href={`mailto:${school.contact.email}`} className="hover:text-primary break-all">
                {school.contact.email}
              </a>
            </div>
            <div className="flex items-center flex-wrap">
              <Phone className="mr-2 h-4 w-4 text-primary" />
              <a href={`tel:${school.contact.phone}`} className="hover:text-primary break-all">
                {school.contact.phone}
              </a>
            </div>
            <div className="flex items-center flex-wrap">
              <Globe className="mr-2 h-4 w-4 text-primary" />
              <a 
                href={`https://${school.contact.website}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary break-all"
              >
                {school.contact.website}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}