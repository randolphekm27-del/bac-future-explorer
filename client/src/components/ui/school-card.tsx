import { MapPin, Phone, Mail, Globe, ChevronDown, ChevronUp, Info } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import type { School, University } from "@/data/universities";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";
import { createProgramSlug, getProgramBySlug } from "@/data/programs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

interface SchoolCardProps {
  school: School;
  university: University;
  expandable?: boolean;
}

export function SchoolCard({ school, university, expandable = true }: SchoolCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group rounded-lg border bg-background p-3 sm:p-6 hover:border-primary/50 transition-colors animate-scale-in w-full max-w-full overflow-hidden">
      <div className="flex items-start justify-between mb-4 w-full">
        <div className="flex-1 min-w-0">
          <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-primary transition-colors break-words leading-tight">
            {school.name}
          </h3>
          <div className="mt-1 flex items-center text-sm sm:text-base text-muted-foreground flex-wrap gap-1">
            <MapPin className="mr-1 h-4 w-4" />
            <span className="break-words text-sm sm:text-base">{school.location}, {school.country}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1 break-words leading-tight">
            {university.name}
          </p>
        </div>
        {expandable && (
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="flex-shrink-0 h-8 w-8"
          >
            {isOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        )}
      </div>
      <p className="text-sm sm:text-base text-muted-foreground mb-4 break-words leading-relaxed">
        {school.description}
      </p>
      {/* Filières proposées */}
      <div className="mb-4 w-full">
        <h4 className="text-sm sm:text-base font-medium mb-2">Filières proposées:</h4>
        <div className="flex flex-wrap gap-2 w-full">
          <TooltipProvider>
            {school.programs.map((program, i) => {
              const slug = createProgramSlug(program);
              const matchingProgram = getProgramBySlug(slug);
              
              const LinkElement = matchingProgram ? (
                <Link
                  key={i}
                  to={`/programs#${matchingProgram.slug}`}
                  className="inline-flex items-center justify-center text-sm px-3 py-1.5 rounded-full border border-solid border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary/30 transition-all duration-200 font-medium break-words min-w-0 max-w-full"
                >
                  <span className="truncate">{program}</span>
                </Link>
              ) : (
                <span
                  key={i}
                  className="inline-flex items-center justify-center text-sm px-3 py-1.5 rounded-full border border-solid border-gray-200 bg-muted/50 text-muted-foreground font-medium break-words min-w-0 max-w-full cursor-not-allowed"
                  title="Filière non référencée sur la page des filières"
                >
                  <span className="truncate">{program}</span>
                </span>
              );

              return LinkElement;
            })}
          </TooltipProvider>
        </div>
      </div>
      {/* Conditions d'admission - toujours visibles */}
      <div className="mb-4">
        <h4 className="text-xs sm:text-sm font-medium mb-2">Conditions d'admission:</h4>
        <ul className="text-xs sm:text-sm text-muted-foreground space-y-1 w-full">
          {school.admissionRequirements.slice(0, isOpen ? undefined : 2).map((requirement, i) => (
            <li key={i} className="flex items-start w-full gap-2">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
              <span className="break-words flex-1 leading-relaxed">{requirement}</span>
            </li>
          ))}
          {!isOpen && school.admissionRequirements.length > 2 && (
            <li className="text-xs text-primary cursor-pointer" onClick={() => setIsOpen(true)}>
              ... et {school.admissionRequirements.length - 2} autres conditions
            </li>
          )}
        </ul>
      </div>
      {/* À savoir - section ajoutée */}
      <div className="mb-4">
        <h4 className="text-xs sm:text-sm font-medium mb-2 flex items-center gap-1">
          <Info className="h-4 w-4 text-primary" />
          À savoir:
        </h4>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed break-words">
          {school.goodToKnow}
        </p>
      </div>
      {/* Contact - affiché selon l'état */}
      {isOpen && (
        <div className="pt-4 border-t w-full animate-fade-in">
          <h4 className="text-xs sm:text-sm font-medium mb-2">Contact:</h4>
          <div className="space-y-3 text-xs sm:text-sm w-full">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary flex-shrink-0" />
              <a 
                href={`mailto:${school.contact.email}`} 
                className="font-bold text-gray-700 dark:text-gray-200 hover:text-primary transition-colors duration-200 break-all text-xs sm:text-sm"
              >
                {school.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary flex-shrink-0" />
              <a 
                href={`tel:${school.contact.phone}`} 
                className="font-bold text-gray-700 dark:text-gray-200 hover:text-primary transition-colors duration-200 break-all text-xs sm:text-sm"
              >
                {school.contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="h-4 w-4 text-primary flex-shrink-0" />
              <a 
                href={`https://${school.contact.website}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold text-gray-700 dark:text-gray-200 hover:text-primary transition-colors duration-200 break-all text-xs sm:text-sm"
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