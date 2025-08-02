import { GraduationCap, Search, BookOpen, Users, Briefcase } from "lucide-react"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { navigationLinks } from "@/lib/navigation"
import { SectionTitle } from "@/components/ui/section-title"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { programs, getAllCategories, getSchoolsForProgram } from "@/data/programs"

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

export default function Programs() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const location = useLocation()

  const categories = ["all", ...getAllCategories()]

  // Fonction de recherche intelligente avec synonymes
  const smartSearch = (text: string, searchTerm: string): boolean => {
    if (!searchTerm.trim()) return true;
    
    const normalizeText = (str: string) => 
      str.toLowerCase()
        .replace(/[àáâãäå]/g, 'a')
        .replace(/[èéêë]/g, 'e')
        .replace(/[ìíîï]/g, 'i')
        .replace(/[òóôõö]/g, 'o')
        .replace(/[ùúûü]/g, 'u')
        .replace(/[ç]/g, 'c')
        .replace(/[^a-z0-9\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    
    const normalizedText = normalizeText(text);
    const normalizedSearch = normalizeText(searchTerm);
    
    // Recherche directe
    if (normalizedText.includes(normalizedSearch)) return true;
    
    // Synonymes et termes équivalents
    const synonyms: Record<string, string[]> = {
      'informatique': ['info', 'computer', 'ordinateur', 'programmation', 'logiciel', 'software'],
      'genie': ['ingenierie', 'engineering', 'technique'],
      'medecine': ['sante', 'health', 'medical', 'docteur'],
      'economie': ['eco', 'finance', 'argent', 'banque', 'commerce'],
      'agriculture': ['agri', 'farming', 'cultivateur', 'production'],
      'droit': ['law', 'juridique', 'avocat', 'justice'],
      'mathematiques': ['maths', 'math', 'calcul', 'nombres'],
      'physique': ['sciences', 'science'],
      'marketing': ['communication', 'pub', 'publicite'],
      'gestion': ['management', 'administration', 'direction'],
      'education': ['enseignement', 'pedagogie', 'professeur', 'teaching'],
      'langues': ['language', 'linguistique', 'traduction'],
      'arts': ['art', 'artistique', 'creation', 'culture'],
      'sport': ['sportif', 'athletique', 'eps', 'activite physique']
    };
    
    // Vérifier les synonymes dans les deux sens
    for (const [key, values] of Object.entries(synonyms)) {
      if (normalizedSearch.includes(key) && values.some(v => normalizedText.includes(v))) return true;
      if (normalizedText.includes(key) && values.some(v => normalizedSearch.includes(v))) return true;
      if (values.some(v => normalizedSearch.includes(v)) && values.some(v => normalizedText.includes(v))) return true;
    }
    
    // Recherche par mots-clés partiels
    const searchWords = normalizedSearch.split(' ').filter(w => w.length > 2);
    const textWords = normalizedText.split(' ');
    
    return searchWords.some(searchWord => 
      textWords.some(textWord => 
        textWord.includes(searchWord) || searchWord.includes(textWord)
      )
    );
  };

  const filteredPrograms = programs.filter((program) => {
    const matchesSearch = smartSearch(program.name, searchTerm) ||
      (program.description && smartSearch(program.description, searchTerm)) ||
      (program.category && smartSearch(program.category, searchTerm)) ||
      program.careers.some(career => smartSearch(career, searchTerm));
    
    const matchesCategory = 
      categoryFilter === "all" || 
      program.category === categoryFilter;

    return matchesSearch && matchesCategory;
  })

  // Scroll automatique vers une filière spécifique si présente dans l'URL
  useEffect(() => {
    const hash = location.hash.replace('#', '')
    
    if (hash) {
      // Attendre que le DOM soit rendu
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center',
            inline: 'nearest'
          })
          // Ajouter un effet visuel temporaire
          element.classList.add('ring-4', 'ring-primary', 'ring-opacity-75', 'shadow-2xl')
          setTimeout(() => {
            element.classList.remove('ring-4', 'ring-primary', 'ring-opacity-75', 'shadow-2xl')
          }, 3000)
        }
      }, 300)
    }
  }, [location])

  // Améliorer le scroll tactile horizontal
  useEffect(() => {
    document.querySelectorAll('[data-scroll]').forEach(el => {
      el.addEventListener('touchstart', () => {}, { passive: true });
    });
  }, [])

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Navigation links={navigationLinks} />

      <main className="flex-1 pt-24 pb-12 w-full">
        <div className="container mx-auto px-4 max-w-full">
          <SectionTitle
            title="Filières & Débouchés"
            description="Explorez les différentes filières disponibles et leurs débouchés professionnels."
          />

          <div className="mb-8 flex flex-col gap-4 sm:flex-row w-full">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Rechercher une filière..."
                className="pl-10 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div 
              className="flex gap-2 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory scrollbar-hide"
              data-scroll
              style={{ touchAction: 'pan-x' }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setCategoryFilter(category)}
                  className={`px-4 py-2 rounded-md text-sm whitespace-nowrap flex-shrink-0 snap-start ${
                    categoryFilter === category
                      ? "bg-primary text-white"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {category === "all" ? "Toutes" : category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
            {filteredPrograms.map((program) => {
              const schoolsCount = getSchoolsForProgram(program.slug).length;
              
              return (
                <div
                  key={program.id}
                  id={program.slug}
                  className="group rounded-lg border bg-background overflow-hidden hover:border-primary/50 transition-all duration-300 animate-scale-in w-full hover-lift max-w-full"
                >
                  {/* Image de la filière */}
                  <div className="aspect-video w-full overflow-hidden bg-muted">
                    <img
                      src={program.image || "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400"}
                      alt={program.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-3 sm:p-6 w-full">
                    <div className="mb-4 flex items-center justify-between w-full">
                      {getIcon(program.icon)}
                      <span className="text-xs px-3 py-1 rounded-full bg-accent text-primary-foreground flex-shrink-0">
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
            })}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Aucune filière trouvée pour votre recherche.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setCategoryFilter("all");
                }}
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}