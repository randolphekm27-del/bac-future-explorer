import { Search, MapPin } from "lucide-react"
import { useState } from "react"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { navigationLinks } from "@/lib/navigation"
import { SectionTitle } from "@/components/ui/section-title"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { UniversityCard } from "@/components/ui/university-card"
import { universities } from "@/data/universities"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function Universities() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filter, setFilter] = useState("all") // "all", "public", "private"
  
  useScrollAnimation();

  const filteredUniversities = universities.filter((university) => {
    const matchesSearch = university.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) || 
      university.location.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = 
      filter === "all" || 
      university.type.toLowerCase() === filter.toLowerCase()

    return matchesSearch && matchesFilter
  })

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Navigation links={navigationLinks} />

      <main className="flex-1 pt-24 pb-12 w-full">
        <div className="container mx-auto px-4 max-w-full">
          <SectionTitle
            title="Universités"
            description="Découvrez les universités du Bénin, leurs spécialités et conditions d'admission."
          />

          <div className="mb-8 flex flex-col gap-4 sm:flex-row w-full">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Rechercher une université..."
                className="pl-10 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              <button
                onClick={() => setFilter("all")}
                className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-sm whitespace-nowrap border border-solid font-medium transition-all duration-200 ${
                  filter === "all"
                    ? "bg-primary text-white border-primary"
                    : "bg-secondary text-secondary-foreground border-gray-200 hover:border-primary/20"
                }`}
              >
                Tous
              </button>
              <button
                onClick={() => setFilter("public")}
                className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-sm whitespace-nowrap border border-solid font-medium transition-all duration-200 ${
                  filter === "public"
                    ? "bg-primary text-white border-primary"
                    : "bg-secondary text-secondary-foreground border-gray-200 hover:border-primary/20"
                }`}
              >
                Public
              </button>
              <button
                onClick={() => setFilter("private")}
                className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-sm whitespace-nowrap border border-solid font-medium transition-all duration-200 ${
                  filter === "private"
                    ? "bg-primary text-white border-primary"
                    : "bg-secondary text-secondary-foreground border-gray-200 hover:border-primary/20"
                }`}
              >
                Privé
              </button>
            </div>
          </div>

          <div className="premium-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
            {filteredUniversities.map((university, index) => (
              <div
                key={university.id}
                style={{ '--stagger-delay': index } as React.CSSProperties}
                className="w-full max-w-full"
              >
                <UniversityCard university={university} />
              </div>
            ))}
          </div>

          {filteredUniversities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Aucune université trouvée pour votre recherche.
              </p>
              <Button
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setFilter("all");
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