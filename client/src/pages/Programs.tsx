import { useState, useEffect, useMemo } from "react"
import { useLocation } from "react-router-dom"
import { Search } from "lucide-react"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { navigationLinks } from "@/lib/navigation"
import { SectionTitle } from "@/components/ui/section-title"
import { Input } from "@/components/ui/input"
import { programs } from "@/data/programs"
import { ProgramCard } from "@/components/ui/program-card"


export default function Programs() {
  const [highlightedProgram, setHighlightedProgram] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const location = useLocation()

  // Fonction de recherche intelligente insensible à la casse et tolérante aux fautes
  const filteredPrograms = useMemo(() => {
    if (!searchTerm.trim()) return programs

    const normalizeText = (text: string) => {
      return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Supprime les accents
        .replace(/[^\w\s]/g, " ") // Remplace la ponctuation par des espaces
        .replace(/\s+/g, " ") // Normalise les espaces multiples
        .trim()
    }

    const searchNormalized = normalizeText(searchTerm)
    const searchWords = searchNormalized.split(" ").filter(word => word.length > 1)

    return programs.filter(program => {
      const programName = normalizeText(program.name)
      const programCategory = normalizeText(program.category)
      const programDescription = normalizeText(program.description || "")
      const programCareers = program.careers?.map(career => normalizeText(career)).join(" ") || ""

      // Recherche par correspondance partielle dans le nom
      if (programName.includes(searchNormalized)) return true

      // Recherche par mots-clés dans tous les champs
      const allText = `${programName} ${programCategory} ${programDescription} ${programCareers}`
      
      return searchWords.some(word => {
        // Correspondance exacte
        if (allText.includes(word)) return true
        
        // Correspondance floue (tolérance aux fautes de frappe)
        const words = allText.split(" ")
        return words.some(textWord => {
          if (textWord.length < 3 || word.length < 3) return false
          
          // Calcul de distance de Levenshtein simplifiée
          const maxDistance = Math.floor(Math.max(word.length, textWord.length) * 0.3)
          let distance = 0
          const minLength = Math.min(word.length, textWord.length)
          
          for (let i = 0; i < minLength; i++) {
            if (word[i] !== textWord[i]) distance++
          }
          distance += Math.abs(word.length - textWord.length)
          
          return distance <= maxDistance
        })
      })
    })
  }, [searchTerm])

  // Affichage des programmes filtrés
  const displayedPrograms = filteredPrograms

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

          {/* Barre de recherche intelligente */}
          <div className="mb-8 flex justify-center w-full">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Rechercher une filière (ex: informatique, médecine...)..."
                className="pl-10 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
            {displayedPrograms.map((program) => (
              <ProgramCard 
                key={program.id} 
                program={program} 
                isHighlighted={highlightedProgram === program.slug}
              />
            ))}
          </div>

          {displayedPrograms.length === 0 && (
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