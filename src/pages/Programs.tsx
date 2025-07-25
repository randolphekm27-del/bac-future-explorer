import { GraduationCap, Search, BookOpen, Users, Briefcase, Heart, Baby, Code, Zap, Settings, Building, Droplets, Leaf, Map, CreditCard, TrendingUp, Truck, BarChart, Palette, Music, Video, Languages, Newspaper, Globe, Clock, Brain, FileText, Calculator, Atom, Sprout, PawPrint } from "lucide-react"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { navigationLinks } from "@/lib/navigation"
import { SectionTitle } from "@/components/ui/section-title"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { programs } from "@/data/programs"

// Images pour les filières
const programImages: Record<string, string> = {
  "informatique": "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400",
  "gestion": "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400",
  "medecine": "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=400",
  "droit": "https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=400",
  "agronomie": "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400",
  "communication": "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400",
  "genie-civil": "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=400",
  "mathematiques": "https://images.pexels.com/photos/6256/mathematics-computation-mathe-algebra.jpg?auto=compress&cs=tinysrgb&w=400",
  "finance": "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400",
  "marketing": "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400"
};

const getIcon = (iconName: string) => {
  const icons = {
    BookOpen: <BookOpen className="h-8 w-8 text-primary" />,
    Briefcase: <Briefcase className="h-8 w-8 text-primary" />,
    Users: <Users className="h-8 w-8 text-primary" />,
    Heart: <Heart className="h-8 w-8 text-primary" />,
    Baby: <Baby className="h-8 w-8 text-primary" />,
    Code: <Code className="h-8 w-8 text-primary" />,
    Zap: <Zap className="h-8 w-8 text-primary" />,
    Settings: <Settings className="h-8 w-8 text-primary" />,
    Building: <Building className="h-8 w-8 text-primary" />,
    Droplets: <Droplets className="h-8 w-8 text-primary" />,
    Leaf: <Leaf className="h-8 w-8 text-primary" />,
    Map: <Map className="h-8 w-8 text-primary" />,
    CreditCard: <CreditCard className="h-8 w-8 text-primary" />,
    TrendingUp: <TrendingUp className="h-8 w-8 text-primary" />,
    Truck: <Truck className="h-8 w-8 text-primary" />,
    BarChart: <BarChart className="h-8 w-8 text-primary" />,
    Palette: <Palette className="h-8 w-8 text-primary" />,
    Music: <Music className="h-8 w-8 text-primary" />,
    Video: <Video className="h-8 w-8 text-primary" />,
    Languages: <Languages className="h-8 w-8 text-primary" />,
    Newspaper: <Newspaper className="h-8 w-8 text-primary" />,
    Globe: <Globe className="h-8 w-8 text-primary" />,
    Clock: <Clock className="h-8 w-8 text-primary" />,
    Brain: <Brain className="h-8 w-8 text-primary" />,
    FileText: <FileText className="h-8 w-8 text-primary" />,
    Calculator: <Calculator className="h-8 w-8 text-primary" />,
    Atom: <Atom className="h-8 w-8 text-primary" />,
    Sprout: <Sprout className="h-8 w-8 text-primary" />,
    PawPrint: <PawPrint className="h-8 w-8 text-primary" />,
    GraduationCap: <GraduationCap className="h-8 w-8 text-primary" />
  };
  return icons[iconName as keyof typeof icons] || <BookOpen className="h-8 w-8 text-primary" />;
};

// Synonymes pour améliorer la recherche
const synonymes: Record<string, string[]> = {
  "informatique": ["info", "coding", "programmation", "développement", "dev", "logiciel", "software", "tech", "technologie", "ordinateur", "computer", "numérique", "digital"],
  "médecine": ["santé", "docteur", "médecin", "hôpital", "soin", "thérapie", "clinique", "patient"],
  "gestion": ["management", "admin", "administration", "business", "entreprise", "direction", "manage"],
  "agriculture": ["agro", "agronomie", "farming", "cultivation", "production", "végétal", "animal", "élevage"],
  "génie": ["ingénierie", "engineering", "technique", "technologie", "construction"],
  "finance": ["argent", "banque", "économie", "comptabilité", "budget", "investment"],
  "communication": ["com", "média", "journalisme", "presse", "relations", "marketing", "pub", "publicité"],
  "art": ["créatif", "design", "artistique", "culture", "créativité", "esthétique"],
  "droit": ["justice", "loi", "juridique", "avocat", "tribunal", "légal"],
  "environnement": ["écologie", "nature", "vert", "durable", "climat", "pollution", "biodiversité"],
  "mathématiques": ["maths", "calcul", "statistiques", "stats", "nombres", "équations"],
  "physique": ["sciences", "laboratoire", "recherche", "expérimentation"],
  "chimie": ["laboratoire", "molécules", "réactions", "analyse"],
  "langues": ["linguistique", "traduction", "international", "étranger"],
  "éducation": ["enseignement", "pédagogie", "formation", "école", "professeur"],
  "transport": ["logistique", "circulation", "mobilité", "véhicule"],
  "énergie": ["électrique", "renouvelable", "power", "électricité"]
};

const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Enlever les accents
    .replace(/[^\w\s]/g, " ") // Remplacer la ponctuation par des espaces
    .replace(/\s+/g, " ") // Normaliser les espaces
    .trim();
};

const searchInText = (searchTerm: string, targetText: string): boolean => {
  const normalizedSearch = normalizeText(searchTerm);
  const normalizedTarget = normalizeText(targetText);
  
  // Recherche directe
  if (normalizedTarget.includes(normalizedSearch)) {
    return true;
  }
  
  // Recherche par synonymes
  for (const [keyword, synonyms] of Object.entries(synonymes)) {
    if (normalizedSearch.includes(keyword) || synonyms.some(syn => normalizedSearch.includes(syn))) {
      if (normalizedTarget.includes(keyword) || synonyms.some(syn => normalizedTarget.includes(syn))) {
        return true;
      }
    }
  }
  
  // Recherche par mots-clés individuels
  const searchWords = normalizedSearch.split(" ").filter(word => word.length > 2);
  return searchWords.some(word => normalizedTarget.includes(word));
};

export default function Programs() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const location = useLocation()

  const categories = ["all", ...new Set(programs.map((program) => program.category))]

  const filteredPrograms = programs.filter((program) => {
    const matchesSearch = searchTerm.trim() === "" || 
      searchInText(searchTerm, program.name) ||
      searchInText(searchTerm, program.description) ||
      searchInText(searchTerm, program.category) ||
      program.careers.some(career => searchInText(searchTerm, career))
    
    const matchesCategory = 
      categoryFilter === "all" || 
      program.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  // Scroll automatique vers une filière spécifique si présente dans l'URL
  useEffect(() => {
    const hash = location.hash.replace('#', '')
    const searchParams = new URLSearchParams(location.search)
    const targetSlug = searchParams.get('program') || hash
    
    if (targetSlug) {
      // Attendre que le DOM soit rendu
      setTimeout(() => {
        const element = document.getElementById(targetSlug)
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          })
          // Ajouter un effet visuel temporaire
          element.classList.add('ring-2', 'ring-primary', 'ring-opacity-50')
          setTimeout(() => {
            element.classList.remove('ring-2', 'ring-primary', 'ring-opacity-50')
          }, 2000)
        }
      }, 100)
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

          <div className="mb-8 space-y-6">
            {/* Barre de recherche améliorée */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Rechercher une filière... (ex: informatique, médecine, gestion)"
                className="pl-12 pr-4 py-3 text-base rounded-full border-2 focus:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 rounded-full"
                  onClick={() => setSearchTerm("")}
                >
                  ✕
                </Button>
              )}
            </div>
            
            {/* Filtres par catégorie */}
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm text-muted-foreground">Filtrer par catégorie</p>
              <div 
                className="flex gap-2 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory scrollbar-hide justify-center flex-wrap max-w-4xl"
                data-scroll
                style={{ touchAction: 'pan-x' }}
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setCategoryFilter(category)}
                    className={`px-4 py-2 rounded-full text-sm whitespace-nowrap flex-shrink-0 snap-start transition-all duration-300 border-2 ${
                      categoryFilter === category
                        ? "bg-primary text-white border-primary shadow-lg scale-105"
                        : "bg-background text-foreground border-border hover:border-primary/50 hover:shadow-md"
                    }`}
                  >
                    {category === "all" ? "Toutes les filières" : category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
            {filteredPrograms.map((program) => (
              <div
                key={program.id}
                id={program.slug}
                className="group rounded-lg border bg-background overflow-hidden hover:border-primary/50 transition-all duration-300 animate-scale-in w-full hover-lift max-w-full"
              >
                {/* Image de la filière */}
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img
                    src={programImages[program.slug] || "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400"}
                    alt={program.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-3 sm:p-6 w-full">
                  <div className="mb-4 flex items-center justify-between w-full">
                    {getIcon(program.icon)}
                    <span className="text-xs px-3 py-1 rounded-full bg-accent text-primary-foreground flex-shrink-0">
                      {program.duration}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors break-words mb-2 leading-tight">
                    {program.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground break-words leading-tight">
                    {program.category}
                  </p>
                  <p className="mt-4 text-xs sm:text-sm text-muted-foreground break-words leading-relaxed line-clamp-3">
                    {program.description}
                  </p>
                  <div className="mt-6">
                    <h4 className="text-xs sm:text-sm font-medium mb-2">Débouchés:</h4>
                    <ul className="text-xs sm:text-sm text-muted-foreground space-y-1 w-full">
                      {program.careers.map((career, i) => (
                        <li key={i} className="flex items-start w-full gap-2">
                          <GraduationCap className="mr-2 h-3 w-3 text-primary" />
                          <span className="break-words flex-1 leading-relaxed">{career}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to={`/programs/${program.slug}/schools`}>
                    <Button variant="outline" className="mt-6 w-full text-sm">
                      Où suivre cette filière ?
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <Search className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Aucune filière trouvée</h3>
                <p className="text-muted-foreground mb-6">
                  Essayez avec d'autres mots-clés ou synonymes.
                  <br />
                  <span className="text-sm">Ex: "info" pour informatique, "santé" pour médecine</span>
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
            </div>
          )}

          {/* Statistiques des résultats */}
          {filteredPrograms.length > 0 && (
            <div className="text-center mt-8 py-4 border-t">
              <p className="text-sm text-muted-foreground">
                {filteredPrograms.length} filière{filteredPrograms.length > 1 ? 's' : ''} trouvée{filteredPrograms.length > 1 ? 's' : ''}
                {searchTerm && ` pour "${searchTerm}"`}
                {categoryFilter !== "all" && ` dans "${categoryFilter}"`}
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}