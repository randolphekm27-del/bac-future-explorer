import { Search } from "lucide-react"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { navigationLinks } from "@/lib/navigation"
import { SectionTitle } from "@/components/ui/section-title"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { programs, getAllCategories } from "@/data/programs"
import { ProgramCard } from "@/components/ui/program-card"


export default function Programs() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [highlightedProgram, setHighlightedProgram] = useState<string | null>(null)
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
      setHighlightedProgram(hash)
      // Attendre que le DOM soit rendu
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center',
            inline: 'nearest'
          })
        }
      }, 300)
      
      // Retirer l'effet après 3 secondes
      setTimeout(() => {
        setHighlightedProgram(null)
      }, 3000)
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
            {filteredPrograms.map((program) => (
              <ProgramCard 
                key={program.id} 
                program={program} 
                isHighlighted={highlightedProgram === program.slug}
              />
            ))}
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