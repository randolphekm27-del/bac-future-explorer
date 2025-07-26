import { Trophy, Search, Calendar, MapPin, ExternalLink } from "lucide-react"
import { useState } from "react"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { navigationLinks } from "@/lib/navigation"
import { SectionTitle } from "@/components/ui/section-title"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const competitions = [
  {
    id: 1,
    title: "Hackathon Innovation Numérique",
    organizer: "TechHub Bénin",
    date: "20-22 Août 2025",
    location: "Cotonou",
    category: "Technologie",
    prizes: ["1er prix: 1,000,000 FCFA", "2e prix: 500,000 FCFA", "3e prix: 250,000 FCFA"],
    description: "48h pour développer des solutions innovantes aux défis numériques du Bénin.",
    requirements: ["Étudiants en informatique", "Développeurs", "Designers"],
  },
  {
    id: 2,
    title: "Challenge Entrepreneuriat Social",
    organizer: "Impact Hub Bénin",
    date: "15 Septembre 2025",
    location: "Porto-Novo",
    category: "Entrepreneuriat",
    prizes: ["Financement jusqu'à 5,000,000 FCFA", "Mentorat personnalisé", "Espace de travail"],
    description: "Présentez votre projet d'entreprise sociale et gagnez un financement pour le lancer.",
    requirements: ["Porteurs de projet", "Étudiants", "Entrepreneurs"],
  },
  {
    id: 3,
    title: "Concours National d'Innovation Agricole",
    organizer: "Ministère de l'Agriculture",
    date: "1-2 Octobre 2025",
    location: "Parakou",
    category: "Agriculture",
    prizes: ["Subvention de projet", "Formation technique", "Équipements agricoles"],
    description: "Solutions innovantes pour moderniser l'agriculture béninoise.",
    requirements: ["Agronomes", "Techniciens agricoles", "Innovateurs"],
  },
  {
    id: 4,
    title: "Défi Green Tech",
    organizer: "EcoInnovate Bénin",
    date: "5 Novembre 2025",
    location: "Abomey-Calavi",
    category: "Environnement",
    prizes: ["Prix d'innovation verte", "Partenariats internationaux", "Stage rémunéré"],
    description: "Concours dédié aux solutions technologiques pour l'environnement.",
    requirements: ["Étudiants en environnement", "Développeurs", "Écologistes"],
  },
  {
    id: 5,
    title: "Challenge Marketing Digital",
    organizer: "Digital Marketing Association",
    date: "12 Décembre 2025",
    location: "Cotonou",
    category: "Marketing",
    prizes: ["Formation certifiante", "Stage en agence", "Équipement professionnel"],
    description: "Compétition de stratégie marketing digital et communication.",
    requirements: ["Étudiants en marketing", "Communicants", "Créatifs"],
  },
  {
    id: 6,
    title: "Olympiades de Mathématiques",
    organizer: "Université d'Abomey-Calavi",
    date: "10-12 Mars 2025",
    location: "Abomey-Calavi",
    category: "Éducation",
    prizes: ["Bourses d'études", "Ordinateurs portables", "Livres scientifiques"],
    description: "Compétition nationale de mathématiques pour étudiants universitaires.",
    requirements: ["Étudiants en sciences", "Mathématiciens", "Passionnés de maths"],
  },
  {
    id: 7,
    title: "Startup Weekend Bénin",
    organizer: "Techstars",
    date: "7-9 Juin 2025",
    location: "Cotonou",
    category: "Entrepreneuriat",
    prizes: ["Capital d'amorçage", "Accélération startup", "Réseautage international"],
    description: "54 heures pour transformer une idée en startup viable.",
    requirements: ["Entrepreneurs", "Développeurs", "Designers", "Business developers"],
  },
]

export default function Competitions() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const categories = ["all", ...new Set(competitions.map((comp) => comp.category))]

  const filteredCompetitions = competitions.filter((competition) => {
    const matchesSearch = 
      competition.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      competition.organizer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      competition.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = 
      categoryFilter === "all" || 
      competition.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation links={navigationLinks} />

      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
              Concours & Hackathons
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Participez à des challenges stimulants et gagnez des prix pour lancer votre carrière.
            </p>
          </div>

          {/* Barre de recherche et filtres - Version corrigée */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row gap-4 items-stretch">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <Input
                  type="text"
                  placeholder="Rechercher un concours..."
                  className="w-full pl-10 py-6 text-base"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Conteneur des filtres corrigé */}
              <div className="relative max-w-[100vw] overflow-hidden">
                <div 
                  className="flex gap-3 overflow-x-auto scrollbar-hide py-2 px-2"
                  style={{
                    scrollSnapType: 'x mandatory',
                    WebkitOverflowScrolling: 'touch'
                  }}
                >
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setCategoryFilter(category)}
                      className={`
                        px-5 py-3 rounded-lg text-sm font-medium whitespace-nowrap flex-shrink-0
                        transition-colors duration-200
                        ${categoryFilter === category
                          ? "bg-primary text-white shadow-md"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        }
                      `}
                      style={{ scrollSnapAlign: 'start' }}
                    >
                      {category === "all" ? "Toutes catégories" : category}
                    </button>
                  ))}
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none" />
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none md:hidden" />
              </div>
            </div>
          </div>

          {/* Liste des concours */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredCompetitions.map((competition) => (
              <div
                key={competition.id}
                className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent">
                      {competition.category}
                    </span>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{competition.date}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {competition.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    Organisé par <span className="font-medium">{competition.organizer}</span>
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-5">
                    {competition.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-2 text-foreground">Prix à gagner :</h4>
                    <ul className="space-y-2">
                      {competition.prizes.map((prize, i) => (
                        <li key={i} className="flex items-start text-sm text-muted-foreground">
                          <Trophy className="flex-shrink-0 h-4 w-4 mt-0.5 mr-2 text-primary" />
                          <span>{prize}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-2 text-foreground">Profils recherchés :</h4>
                    <div className="flex flex-wrap gap-2">
                      {competition.requirements.map((req, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full" size="lg">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      S'inscrire
                    </Button>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {filteredCompetitions.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-muted-foreground">
                Aucun concours trouvé pour ces critères
              </h3>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm("")
                  setCategoryFilter("all")
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
