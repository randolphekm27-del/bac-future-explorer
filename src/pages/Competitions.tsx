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
    description:
      "48h pour développer des solutions innovantes aux défis numériques du Bénin.",
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
    description:
      "Présentez votre projet d'entreprise sociale et gagnez un financement pour le lancer.",
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
    description:
      "Solutions innovantes pour moderniser l'agriculture béninoise.",
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
    description:
      "Concours dédié aux solutions technologiques pour l'environnement.",
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
    description:
      "Compétition de stratégie marketing digital et communication.",
    requirements: ["Étudiants en marketing", "Communicants", "Créatifs"],
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
    <div className="flex min-h-screen flex-col">
      <Navigation links={navigationLinks} />

      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Concours & Hackathons"
            description="Participez à des challenges stimulants et gagnez des prix pour lancer votre carrière."
          />

          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Rechercher un concours..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide scroll-smooth overscroll-contain">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={categoryFilter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCategoryFilter(category)}
                  className="whitespace-nowrap flex-shrink-0"
                >
                  {category === "all" ? "Tous" : category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {filteredCompetitions.map((competition) => (
              <div
                key={competition.id}
                className="group rounded-lg border bg-background p-6 hover:border-primary/50 transition-colors animate-scale-in"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-accent text-primary">
                    {competition.category}
                  </span>
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      {competition.date}
                    </span>
                    <span className="flex items-center text-xs text-muted-foreground">
                      <MapPin className="mr-1 h-3 w-3" />
                      {competition.location}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {competition.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Organisé par: {competition.organizer}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  {competition.description}
                </p>
                
                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Prix à gagner:</h4>
                    <ul className="space-y-1">
                      {competition.prizes.map((prize, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <Trophy className="mr-2 h-4 w-4 text-primary" />
                          {prize}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Profils recherchés:</h4>
                    <div className="flex flex-wrap gap-2">
                      {competition.requirements.map((req, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Button className="mt-6 w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  S'inscrire au concours
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}