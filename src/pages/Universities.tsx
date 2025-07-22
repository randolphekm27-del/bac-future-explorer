import { Search, MapPin } from "lucide-react"
import { useState } from "react"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { navigationLinks } from "@/lib/navigation"
import { SectionTitle } from "@/components/ui/section-title"
import { Input } from "@/components/ui/input"
import { UniversityCard } from "@/components/ui/university-card"
import { universities } from "@/data/universities"

export default function Universities() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filter, setFilter] = useState("all") // "all", "public", "private"

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
    <div className="flex min-h-screen flex-col">
      <Navigation links={navigationLinks} />

      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Universités"
            description="Découvrez les universités du Bénin, leurs spécialités et conditions d'admission."
          />

          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Rechercher une université..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-md text-sm ${
                  filter === "all"
                    ? "bg-primary text-white"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                Tous
              </button>
              <button
                onClick={() => setFilter("public")}
                className={`px-4 py-2 rounded-md text-sm ${
                  filter === "public"
                    ? "bg-primary text-white"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                Public
              </button>
              <button
                onClick={() => setFilter("private")}
                className={`px-4 py-2 rounded-md text-sm ${
                  filter === "private"
                    ? "bg-primary text-white"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                Privé
              </button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredUniversities.map((university) => (
              <UniversityCard key={university.id} university={university} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}