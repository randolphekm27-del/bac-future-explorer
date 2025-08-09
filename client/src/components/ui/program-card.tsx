import { GraduationCap, BookOpen, Users, Briefcase } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "./button"
import { LazyImage } from "./lazy-image"
import type { Program } from "@/data/programs"
import { getSchoolsForProgram } from "@/data/programs"

// Fonction pour obtenir l'icône appropriée
const getIcon = (iconName: string) => {
  const icons = {
    Code: <BookOpen className="h-8 w-8 text-primary" />,
    Zap: <BookOpen className="h-8 w-8 text-primary" />,
    Radio: <BookOpen className="h-8 w-8 text-primary" />,
    Heart: <BookOpen className="h-8 w-8 text-primary" />,
    Pill: <BookOpen className="h-8 w-8 text-primary" />,
    TrendingUp: <Briefcase className="h-8 w-8 text-primary" />,
    Calculator: <BookOpen className="h-8 w-8 text-primary" />,
    Building: <BookOpen className="h-8 w-8 text-primary" />,
    Droplets: <BookOpen className="h-8 w-8 text-primary" />,
    Sprout: <BookOpen className="h-8 w-8 text-primary" />,
    Leaf: <BookOpen className="h-8 w-8 text-primary" />,
    Scale: <BookOpen className="h-8 w-8 text-primary" />,
    Building2: <BookOpen className="h-8 w-8 text-primary" />,
    BookOpen: <BookOpen className="h-8 w-8 text-primary" />,
    Languages: <BookOpen className="h-8 w-8 text-primary" />,
    Palette: <BookOpen className="h-8 w-8 text-primary" />,
    Music: <BookOpen className="h-8 w-8 text-primary" />,
    Atom: <BookOpen className="h-8 w-8 text-primary" />,
  };
  return icons[iconName as keyof typeof icons] || <BookOpen className="h-8 w-8 text-primary" />;
};

interface ProgramCardProps {
  program: Program;
  isHighlighted?: boolean;
}

export function ProgramCard({ program, isHighlighted = false }: ProgramCardProps) {
  const schoolsCount = getSchoolsForProgram(program.slug).length;

  return (
    <div
      id={program.slug}
      className={`group rounded-lg border bg-background overflow-hidden hover:border-primary/50 transition-all duration-300 animate-scale-in w-full hover-lift max-w-full ${
        isHighlighted ? 'ring-4 ring-primary ring-opacity-75 shadow-2xl border-primary' : ''
      }`}
    >
      {/* Image de la filière */}
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <LazyImage
          src={program.image || "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400"}
          alt={program.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-3 sm:p-6 w-full">
        <div className="mb-4 flex items-center justify-between w-full">
          {getIcon(program.icon)}
          <span className="inline-flex items-center justify-center text-xs px-3 py-1.5 rounded-full border border-solid border-accent/20 bg-accent text-primary-foreground font-medium">
            {program.duration || "3-5 ans"}
          </span>
        </div>
        
        <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors break-words mb-2 leading-tight">
          {program.name}
        </h3>
        
        <p className="mt-1 text-xs text-muted-foreground break-words leading-tight">
          {program.category}
        </p>
        
        {program.description && (
          <p className="mt-4 text-xs sm:text-sm text-muted-foreground break-words leading-relaxed line-clamp-3">
            {program.description}
          </p>
        )}
        
        {program.explanation && (
          <div className="mt-4 p-3 bg-muted/30 rounded-lg border-l-4 border-primary/20">
            <h4 className="text-xs sm:text-sm font-medium mb-2 text-primary">À quoi ça mène ?</h4>
            <p className="text-xs sm:text-sm text-muted-foreground break-words leading-relaxed">
              {program.explanation}
            </p>
          </div>
        )}
        
        <div className="mt-6">
          <h4 className="text-xs sm:text-sm font-medium mb-2">Débouchés:</h4>
          <ul className="text-xs sm:text-sm text-muted-foreground space-y-1 w-full">
            {program.careers.slice(0, 3).map((career, i) => (
              <li key={i} className="flex items-start w-full gap-2">
                <GraduationCap className="mr-2 h-3 w-3 text-primary" />
                <span className="break-words flex-1 leading-relaxed">{career}</span>
              </li>
            ))}
            {program.careers.length > 3 && (
              <li className="text-xs text-primary">
                ... et {program.careers.length - 3} autres débouchés
              </li>
            )}
          </ul>
        </div>
        
        <div className="mt-6 flex items-center justify-between">
          <div className="text-xs text-muted-foreground">
            {schoolsCount} école{schoolsCount > 1 ? 's' : ''}
          </div>
        </div>
        
        <Link to={`/programs/${program.slug}/schools`}>
          <Button variant="outline" className="mt-4 w-full text-sm">
            Où suivre cette filière ?
          </Button>
        </Link>
      </div>
    </div>
  );
}