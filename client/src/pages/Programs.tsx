import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { navigationLinks } from "@/lib/navigation"
import { SectionTitle } from "@/components/ui/section-title"
import { programs } from "@/data/programs"
import { ProgramCard } from "@/components/ui/program-card"


export default function Programs() {
  const [highlightedProgram, setHighlightedProgram] = useState<string | null>(null)
  const location = useLocation()

  // Fonction de recherche supprimée car la barre de recherche a été retirée

  // Affichage de tous les programmes sans filtrage
  const filteredPrograms = programs

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

  // Code de gestion du scroll tactile supprimé car les boutons de catégorie ont été retirés

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Navigation links={navigationLinks} />

      <main className="flex-1 pt-24 pb-12 w-full">
        <div className="container mx-auto px-4 max-w-full">
          <SectionTitle
            title="Filières & Débouchés"
            description="Explorez les différentes filières disponibles et leurs débouchés professionnels."
          />

          {/* Barre de recherche et boutons de catégorie supprimés comme demandé */}

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
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}