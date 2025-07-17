import * as React from "react"
import { GraduationCap, BookOpen, Briefcase, Trophy, PlayCircle, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/ui/navigation"
import heroImage from "@/assets/hero.png"

const navigationLinks = [
  {
    title: "Universités",
    href: "/universities",
    icon: <Building2 className="h-4 w-4" />,
  },
  {
    title: "Filières",
    href: "/programs",
    icon: <GraduationCap className="h-4 w-4" />,
  },
  {
    title: "Stages",
    href: "/internships",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    title: "Concours",
    href: "/competitions",
    icon: <Trophy className="h-4 w-4" />,
  },
  {
    title: "Formations",
    href: "/courses",
    icon: <PlayCircle className="h-4 w-4" />,
  },
]

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation links={navigationLinks} />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="space-y-8 animate-fade-in">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  Trouvez votre voie après le{" "}
                  <span className="text-primary">Bac</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Explorez les universités, filières et opportunités pour construire votre avenir. 
                  Guide complet pour les nouveaux bacheliers du Bénin.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Explorer les filières
                  </Button>
                  <Button size="lg" variant="outline">
                    En savoir plus
                  </Button>
                </div>
              </div>
              <div className="relative animate-scale-in">
                <img
                  src={heroImage}
                  alt="Illustration éducative"
                  className="w-full rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-accent/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Votre parcours simplifié
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: <Building2 className="h-6 w-6 text-primary" />,
                  title: "Universités",
                  description:
                    "Découvrez toutes les universités du Bénin, leurs spécialités et conditions d'admission.",
                },
                {
                  icon: <GraduationCap className="h-6 w-6 text-primary" />,
                  title: "Filières",
                  description:
                    "Explorez les différentes filières disponibles et leurs débouchés professionnels.",
                },
                {
                  icon: <Briefcase className="h-6 w-6 text-primary" />,
                  title: "Opportunités",
                  description:
                    "Accédez aux offres de stages, concours et formations complémentaires.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="relative group rounded-lg border bg-background p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
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

export default Index
