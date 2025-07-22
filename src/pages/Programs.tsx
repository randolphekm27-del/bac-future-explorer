import { GraduationCap, Search, BookOpen, Users, Briefcase } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { navigationLinks } from "@/lib/navigation"
import { SectionTitle } from "@/components/ui/section-title"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { programs } from "@/data/programs"

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
                  {getIcon(program.icon)}
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
                <Link to={`/programs/${program.slug}/schools`}>
                  <Button variant="outline" className="mt-6 w-full">
                    Où suivre cette filière ?
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}