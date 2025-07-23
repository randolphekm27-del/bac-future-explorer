import { Building2, GraduationCap, Briefcase, Trophy, PlayCircle, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionTitle } from "@/components/ui/section-title"
import { FeatureCard } from "@/components/ui/feature-card"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { FloatingParticles } from "@/components/ui/floating-particles"
import { TestimonialsCarousel } from "@/components/ui/testimonials-carousel"
import { InteractiveTimeline } from "@/components/ui/interactive-timeline"
import { NewsletterPopup } from "@/components/ui/newsletter-popup"
import { SmartSearch } from "@/components/ui/smart-search"
import { StatsSection } from "@/components/ui/stats-section"
import { FloatingAccessibility } from "@/components/ui/floating-accessibility"
import { navigationLinks } from "@/lib/navigation"
import { Link, useNavigate } from "react-router-dom"
const logoImage = "/lovable-uploads/d0cefdb1-2000-4d82-9b38-0fa02b5f5d78.png"

const Index = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background">
      <Navigation links={navigationLinks} />
      <NewsletterPopup />
      
      {/* Hero Section */}
      <section className="relative gradient-hero pt-20 pb-16 sm:pb-24 md:pb-32">
        <FloatingParticles />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                <span className="text-shadow">Trouvez votre voie</span><br />
                <span className="text-shadow">après le </span>
                <span className="gradient-text">Bac</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-medium">
                <span className="gradient-text-accent">Explorez</span> les universités, filières et opportunités pour construire votre avenir. 
                Guide complet pour les nouveaux bacheliers du Bénin.
              </p>
              
              <div className="my-8">
                <SmartSearch 
                  placeholder="Que voulez-vous étudier ?" 
                  className="max-w-full"
                  onSearch={(query) => navigate(`/universities?search=${query}`)}
                />
              </div>
              
              <div className="space-y-6">
                <Link to="/universities">
                  <Button variant="premium" size="xl" className="w-full sm:w-auto">
                    Commencer l'exploration
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <p className="text-muted-foreground">
                  Plus de 1000 étudiants nous font déjà confiance
                </p>
              </div>
            </div>
            
            <div className="relative flex justify-center">
              <div className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl">
                <img
                  src={logoImage}
                  alt="Après mon Bac - Logo officiel"
                  className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <StatsSection />
      </section>

      {/* Features Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Votre réussite commence ici</h2>
            <p className="text-xl text-muted-foreground">Découvrez toutes les ressources dont vous avez besoin pour votre avenir</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Universités</h3>
              <p className="text-muted-foreground mb-4">
                Explorez toutes les universités du Bénin avec leurs filières et conditions d'admission
              </p>
              <Link to="/universities">
                <Button variant="outline" className="w-full">
                  Explorer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="glass-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Filières & Débouchés</h3>
              <p className="text-muted-foreground mb-4">
                Découvrez les formations disponibles et leurs perspectives d'emploi
              </p>
              <Link to="/programs">
                <Button variant="outline" className="w-full">
                  Découvrir
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="glass-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Stages & Opportunités</h3>
              <p className="text-muted-foreground mb-4">
                Trouvez des stages et développez votre expérience professionnelle
              </p>
              <Link to="/internships">
                <Button variant="outline" className="w-full">
                  Voir les stages
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="glass-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Concours & Hackathons</h3>
              <p className="text-muted-foreground mb-4">
                Participez aux concours et challenges pour vous démarquer
              </p>
              <Link to="/competitions">
                <Button variant="outline" className="w-full">
                  Participer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="glass-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                <PlayCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Formations Pratiques</h3>
              <p className="text-muted-foreground mb-4">
                Développez vos compétences avec nos formations spécialisées
              </p>
              <Link to="/courses">
                <Button variant="outline" className="w-full">
                  Se former
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="glass-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Communauté</h3>
              <p className="text-muted-foreground mb-4">
                Rejoignez une communauté d'étudiants motivés et ambitieux
              </p>
              <Button variant="outline" className="w-full">
                Rejoindre
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ils nous font confiance</h2>
            <p className="text-xl text-muted-foreground">Découvrez les témoignages de nos étudiants</p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      <Footer />
      <FloatingAccessibility />
    </div>
  )
}

export default Index