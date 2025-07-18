import { Building2, GraduationCap, Briefcase, Trophy, PlayCircle, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionTitle } from "@/components/ui/section-title"
import { FeatureCard } from "@/components/ui/feature-card"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { navigationLinks } from "@/lib/navigation"
import { Link } from "react-router-dom"
const logoImage = "/lovable-uploads/d0cefdb1-2000-4d82-9b38-0fa02b5f5d78.png"

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation links={navigationLinks} />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="space-y-8 animate-fade-in">
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  Trouvez votre voie après le{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Bac</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Explorez les universités, filières et opportunités pour construire votre avenir. 
                  Guide complet pour les nouveaux bacheliers du Bénin.
                </p>
                <div className="space-y-6">
                  <Link to="/universities">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Commencer l'exploration
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <p className="text-muted-foreground">
                    Plus de 1000 étudiants nous font déjà confiance
                  </p>
                </div>
              </div>
              <div className="relative animate-scale-in flex justify-center">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 shadow-2xl">
                  <img
                    src={logoImage}
                    alt="Après mon Bac - Logo officiel"
                    className="w-80 h-80 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-accent/5 to-primary/5">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Votre réussite commence ici" 
              description="Découvrez toutes les ressources dont vous avez besoin pour votre avenir"
              className="mb-16"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Building2 className="h-8 w-8" />}
                title="Universités"
                description="Explorez toutes les universités du Bénin avec leurs filières et conditions d'admission"
                href="/universities"
                className="hover:scale-105 transition-transform duration-200"
              />
              <FeatureCard
                icon={<GraduationCap className="h-8 w-8" />}
                title="Filières & Débouchés"
                description="Découvrez les formations disponibles et leurs perspectives d'emploi"
                href="/programs"
                className="hover:scale-105 transition-transform duration-200"
              />
              <FeatureCard
                icon={<Briefcase className="h-8 w-8" />}
                title="Stages & Opportunités"
                description="Trouvez des stages et développez votre expérience professionnelle"
                href="/internships"
                className="hover:scale-105 transition-transform duration-200"
              />
              <FeatureCard
                icon={<Trophy className="h-8 w-8" />}
                title="Concours & Hackathons"
                description="Participez aux concours et challenges pour vous démarquer"
                href="/competitions"
                className="hover:scale-105 transition-transform duration-200"
              />
              <FeatureCard
                icon={<PlayCircle className="h-8 w-8" />}
                title="Formations Pratiques"
                description="Développez vos compétences avec nos formations spécialisées"
                href="/courses"
                className="hover:scale-105 transition-transform duration-200"
              />
              <FeatureCard
                icon={<Users className="h-8 w-8" />}
                title="Communauté"
                description="Rejoignez une communauté d'étudiants motivés et ambitieux"
                className="hover:scale-105 transition-transform duration-200"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Index