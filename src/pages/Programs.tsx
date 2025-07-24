import { GraduationCap, Search, BookOpen, Users, Briefcase } from "lucide-react"
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
  };
  return icons[iconName as keyof typeof icons] || <BookOpen className="h-8 w-8 text-primary" />;
};

export default function Programs() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const location = useLocation()

  const categories = ["all", ...new Set(programs.map((program) => program.category))]

  const filteredPrograms = programs.filter((program) => {
    const matchesSearch = program.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    
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

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Navigation links={navigationLinks} />

      <main className="flex-1 pt-24 pb-12 w-full">
        <div className="container mx-auto px-4 max-w-full">
          <SectionTitle
            title="Filières & Débouchés"
            description="Explorez les différentes filières disponibles et leurs débouchés professionnels."
          />

          <div className="mb-8 space-y-4 w-full">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Rechercher une filière..."
                className="pl-10 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full relative">
              <div 
                className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide pr-8" 
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none', 
                  WebkitOverflowScrolling: 'touch',
                  scrollBehavior: 'smooth'
                }}
              >
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={categoryFilter === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCategoryFilter(category)}
                    className="whitespace-nowrap flex-shrink-0 min-w-fit px-4 py-2"
                  >
                    {category === "all" ? "Toutes" : category}
                  </Button>
                ))}
              </div>
              {/* Gradient fade indicator pour montrer qu'on peut scroller */}
              <div className="absolute right-0 top-0 bottom-3 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
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