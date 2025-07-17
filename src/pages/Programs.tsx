import { GraduationCap, Search, BookOpen, Users, Briefcase } from "lucide-react"
import { useState } from "react"
import { Navigation } from "@/components/ui/navigation"
import { navigationLinks } from "@/lib/navigation"
import { SectionTitle } from "@/components/ui/section-title"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const programs = [
  {
    id: 1,
    name: "Informatique",
    category: "Sciences et Technologie",
    duration: "3-5 ans",
    description: "Formation en programmation, bases de données, réseaux et intelligence artificielle.",
    careers: ["Développeur logiciel", "Administrateur système", "Data Scientist", "Expert en cybersécurité"],
    icon: <BookOpen className="h-8 w-8 text-primary" />,
  },
  {
    id: 2,
    name: "Gestion",
    category: "Sciences Économiques",
    duration: "3-5 ans",
    description: "Formation en comptabilité, marketing, ressources humaines et management.",
    careers: ["Comptable", "Manager", "Responsable marketing", "Consultant en entreprise"],
    icon: <Briefcase className="h-8 w-8 text-primary" />,
  },
  {
    id: 3,
    name: "Médecine",
    category: "Sciences de la Santé",
    duration: "7-8 ans",
    description: "Formation en anatomie, physiologie, pathologie et pratique clinique.",
    careers: ["Médecin généraliste", "Chirurgien", "Pédiatre", "Cardiologue"],
    icon: <Users className="h-8 w-8 text-primary" />,
  },
  {
    id: 4,
    name: "Droit",
    category: "Sciences Juridiques",
    duration: "3-5 ans",
    description: "Formation en droit civil, pénal, administratif et international.",
    careers: ["Avocat", "Magistrat", "Juriste d'entreprise", "Notaire"],
    icon: <BookOpen className="h-8 w-8 text-primary" />,
  },
  {
    id: 5,
    name: "Agronomie",
    category: "Sciences Agricoles",
    duration: "3-5 ans",
    description: "Formation en production végétale, élevage, gestion des ressources naturelles.",
    careers: ["Ingénieur agronome", "Conseiller agricole", "Chercheur en agronomie"],
    icon: <Briefcase className="h-8 w-8 text-primary" />,
  },
  {
    id: 6,
    name: "Communication",
    category: "Sciences Humaines",
    duration: "3-5 ans",
    description: "Formation en journalisme, relations publiques, médias numériques.",
    careers: ["Journaliste", "Chargé de communication", "Community manager", "Attaché de presse"],
    icon: <Users className="h-8 w-8 text-primary" />,
  },
]

export default function Programs() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

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

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation links={navigationLinks} />

      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Filières & Débouchés"
            description="Explorez les différentes filières disponibles et leurs débouchés professionnels."
          />

          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Rechercher une filière..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setCategoryFilter(category)}
                  className={`px-4 py-2 rounded-md text-sm whitespace-nowrap ${
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

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPrograms.map((program) => (
              <div
                key={program.id}
                className="group rounded-lg border bg-background p-6 hover:border-primary/50 transition-colors animate-scale-in"
              >
                <div className="mb-4 flex items-center justify-between">
                  {program.icon}
                  <span className="text-xs px-3 py-1 rounded-full bg-accent text-primary-foreground">
                    {program.duration}
                  </span>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {program.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {program.category}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  {program.description}
                </p>
                <div className="mt-6">
                  <h4 className="text-sm font-medium mb-2">Débouchés:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {program.careers.map((career, i) => (
                      <li key={i} className="flex items-center">
                        <GraduationCap className="mr-2 h-3 w-3 text-primary" />
                        {career}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="outline" className="mt-6 w-full">
                  Où suivre cette filière
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground">
            © 2025 Après mon Bac. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}