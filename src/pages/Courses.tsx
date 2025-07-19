import { PlayCircle, Search, Clock, Book, Check } from "lucide-react"
import { useState } from "react"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { navigationLinks } from "@/lib/navigation"
import { SectionTitle } from "@/components/ui/section-title"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const courses = [
  {
    id: 1,
    title: "Les fondamentaux du développement web",
    category: "Développement",
    duration: "30 heures",
    level: "Débutant",
    price: 25000,
    description:
      "Apprenez les bases du développement web avec HTML, CSS et JavaScript.",
    highlights: [
      "Bases de HTML5",
      "Styling avec CSS3",
      "Introduction à JavaScript",
      "Responsive design",
    ],
    includes: ["30 vidéos", "Exercices pratiques", "Certificat", "Support forum"],
  },
  {
    id: 2,
    title: "Marketing Digital pour Débutants",
    category: "Marketing",
    duration: "20 heures",
    level: "Débutant",
    price: 20000,
    description:
      "Maîtrisez les fondamentaux du marketing digital pour promouvoir efficacement en ligne.",
    highlights: [
      "SEO basique",
      "Marketing des réseaux sociaux",
      "Email marketing",
      "Analytics",
    ],
    includes: ["20 vidéos", "Templates", "Certificat", "Études de cas"],
  },
  {
    id: 3,
    title: "Excel Avancé pour l'Analyse de Données",
    category: "Business",
    duration: "15 heures",
    level: "Intermédiaire",
    price: 15000,
    description:
      "Devenez un expert Excel pour l'analyse de données et la business intelligence.",
    highlights: [
      "Formules avancées",
      "Tableaux croisés dynamiques",
      "Macros VBA",
      "Visualisation de données",
    ],
    includes: ["15 vidéos", "Fichiers d'exercice", "Certificat", "Support email"],
  },
  {
    id: 4,
    title: "Design Thinking & Innovation",
    category: "Business",
    duration: "25 heures",
    level: "Tous niveaux",
    price: 30000,
    description:
      "Apprenez à innover et résoudre des problèmes avec la méthode Design Thinking.",
    highlights: [
      "Processus d'innovation",
      "Prototypage rapide",
      "Tests utilisateurs",
      "Études de cas réels",
    ],
    includes: ["25 vidéos", "Templates", "Certificat", "Coaching de groupe"],
  },
  {
    id: 5,
    title: "Communication Professionnelle",
    category: "Soft Skills",
    duration: "10 heures",
    level: "Tous niveaux",
    price: 12000,
    description:
      "Améliorez vos compétences en communication pour réussir professionnellement.",
    highlights: [
      "Communication orale",
      "Rédaction professionnelle",
      "Networking",
      "Personal branding",
    ],
    includes: ["10 vidéos", "Ressources PDF", "Certificat", "Exercices pratiques"],
  },
]

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const categories = ["all", ...new Set(courses.map((course) => course.category))]

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = 
      categoryFilter === "all" || 
      course.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation links={navigationLinks} />

      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Formations Pratiques"
            description="Développez vos compétences avec nos formations en ligne de qualité."
          />

          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Rechercher une formation..."
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
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group glass-card rounded-3xl border-gradient overflow-hidden hover-lift animate-scale-in shadow-xl"
              >
                <div className="aspect-video w-full gradient-hero p-8 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 gradient-primary opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <PlayCircle className="w-20 h-20 text-primary-foreground opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 relative z-10 hover-glow" />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{course.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      {course.duration}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:gradient-text transition-all duration-300 text-shadow">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {course.description}
                  </p>
                  
                  <div className="mt-6">
                    <h4 className="text-sm font-medium mb-2">Ce que vous apprendrez:</h4>
                    <ul className="space-y-2">
                      {course.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Niveau</p>
                      <p className="font-medium">{course.level}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Prix</p>
                      <p className="font-medium">{course.price} FCFA</p>
                    </div>
                  </div>

                  <Button variant="premium" size="lg" className="mt-8 w-full">
                    <Book className="mr-2 h-5 w-5" />
                    Acheter la formation
                  </Button>

                  <div className="mt-4 pt-4 border-t">
                    <h4 className="text-sm font-medium mb-2">Ce qui est inclus:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.includes.map((item, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
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