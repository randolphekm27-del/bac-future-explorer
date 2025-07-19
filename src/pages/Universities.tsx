import { Building2, Search, MapPin, Clock } from "lucide-react"
import { useState } from "react"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { navigationLinks } from "@/lib/navigation"
import { SectionTitle } from "@/components/ui/section-title"
import { Input } from "@/components/ui/input"

const universities = [
  {
    id: 1,
    name: "Université d'Abomey-Calavi (UAC)",
    location: "Abomey-Calavi",
    type: "Public",
    image: "https://via.placeholder.com/200",
    description:
      "L'UAC est la plus grande université du Bénin, offrant une large gamme de programmes dans diverses disciplines.",
  },
  {
    id: 2,
    name: "Université de Parakou (UP)",
    location: "Parakou",
    type: "Public",
    image: "https://via.placeholder.com/200",
    description:
      "L'UP est une université publique située dans le nord du Bénin, spécialisée dans l'agriculture et les sciences de la santé.",
  },
  {
    id: 3,
    name: "Université Nationale des Sciences, Technologies, Ingénierie et Mathématiques (UNSTIM)",
    location: "Abomey",
    type: "Public",
    image: "https://via.placeholder.com/200",
    description:
      "L'UNSTIM est spécialisée dans les sciences, technologies, ingénierie et mathématiques.",
  },
  {
    id: 4,
    name: "Université Nationale d'Agriculture (UNA)",
    location: "Porto-Novo",
    type: "Public",
    image: "https://via.placeholder.com/200",
    description:
      "L'UNA est dédiée à l'enseignement et à la recherche dans le domaine de l'agriculture.",
  },
  {
    id: 5,
    name: "Institut de Mathématiques et de Sciences Physiques (IMSP)",
    location: "Dangbo",
    type: "Public",
    image: "https://via.placeholder.com/200",
    description:
      "L'IMSP est un institut de recherche et d'enseignement en mathématiques et sciences physiques.",
  },
  {
    id: 6,
    name: "Université Africaine de Technologie et de Management (UATM)",
    location: "Cotonou",
    type: "Privé",
    image: "https://via.placeholder.com/200",
    description:
      "L'UATM est une université privée offrant des formations en gestion et technologie.",
  },
]

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
              <div
                key={university.id}
                className="group rounded-lg border bg-background overflow-hidden hover:border-primary/50 transition-colors animate-scale-in"
              >
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img
                    src={university.image}
                    alt={university.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        university.type === "Public"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-emerald-100 text-emerald-800"
                      }`}
                    >
                      {university.type}
                    </span>
                    <span className="flex items-center text-xs text-muted-foreground">
                      <MapPin className="mr-1 h-3 w-3" />
                      {university.location}
                    </span>
                  </div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {university.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {university.description}
                  </p>
                  <button 
                    className="mt-4 text-sm font-medium text-primary hover:underline transition-all duration-200 hover:translate-x-1"
                    onClick={() => {
                      // Navigation vers la page des écoles de cette université
                      window.location.href = `/universities/${university.id}/schools`
                    }}
                  >
                    Voir les écoles →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}