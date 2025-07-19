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
import { navigationLinks } from "@/lib/navigation"
import { Link, useNavigate } from "react-router-dom"
const logoImage = "/lovable-uploads/d0cefdb1-2000-4d82-9b38-0fa02b5f5d78.png"

const Index = () => {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation links={navigationLinks} />
      <NewsletterPopup />
      
      <main className="flex-1 pt-16">
        {/* Hero Section with Particles */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10 py-20 md:py-32">
          <FloatingParticles />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <ScrollReveal>
                <div className="space-y-8">
                  <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-primary animate-fade-in">
                    Après mon <span className="relative inline-block">
                      Bac
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary animate-pulse rounded-full"></div>
                    </span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Explorez les universités, filières et opportunités pour construire votre avenir. 
                    Guide complet pour les nouveaux bacheliers du Bénin.
                  </p>
                  
                  {/* Smart Search */}
                  <div className="my-8">
                    <SmartSearch 
                      placeholder="Que voulez-vous étudier ?" 
                      className="max-w-full"
                      onSearch={(query) => navigate(`/universities?search=${query}`)}
                    />
                  </div>
                  
                  <div className="space-y-6">
                    <Link to="/universities">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift">
                        Commencer l'exploration
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <p className="text-muted-foreground">
                      Plus de 1000 étudiants nous font déjà confiance
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <div className="relative flex justify-center">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 shadow-2xl hover-lift">
                    <img
                      src={logoImage}
                      alt="Après mon Bac - Logo officiel"
                      className="w-80 h-80 object-contain"
                    />
                  </div>
                  {/* Enhanced decorative elements */}
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-accent/30 rounded-full animate-bounce"></div>
                  <div className="absolute top-10 -right-6 w-12 h-12 bg-primary/40 rounded-full animate-pulse"></div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-accent/5 to-primary/5">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <SectionTitle 
                title="Votre réussite commence ici" 
                description="Découvrez toutes les ressources dont vous avez besoin pour votre avenir"
                className="mb-16"
              />
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollReveal delay={100}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <FeatureCard
                    icon={<Building2 className="h-8 w-8" />}
                    title={
                      <span className="relative">
                        Universités
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
                      </span>
                    }
                    description="Explorez toutes les universités du Bénin avec leurs filières et conditions d'admission"
                    href="/universities"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <FeatureCard
                  icon={<GraduationCap className="h-8 w-8" />}
                  title="Filières & Débouchés"
                  description="Découvrez les formations disponibles et leurs perspectives d'emploi"
                  href="/programs"
                />
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <FeatureCard
                    icon={<Briefcase className="h-8 w-8" />}
                    title={
                      <span className="relative">
                        Stages & Opportunités
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
                      </span>
                    }
                    description="Trouvez des stages et développez votre expérience professionnelle"
                    href="/internships"
                    showPartnerButton
                    isInternship
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <FeatureCard
                  icon={<Trophy className="h-8 w-8" />}
                  title="Concours & Hackathons"
                  description="Participez aux concours et challenges pour vous démarquer"
                  href="/competitions"
                />
              </ScrollReveal>
              <ScrollReveal delay={500}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <FeatureCard
                    icon={<PlayCircle className="h-8 w-8" />}
                    title={
                      <span className="relative">
                        Formations Pratiques
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></div>
                      </span>
                    }
                    description="Développez vos compétences avec nos formations spécialisées"
                    href="/courses"
                    showPartnerButton
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={600}>
                <FeatureCard
                  icon={<Users className="h-8 w-8" />}
                  title="Communauté"
                  description="Rejoignez une communauté d'étudiants motivés et ambitieux"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Interactive Timeline */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <SectionTitle 
                title="Votre parcours en 5 étapes" 
                description="Suivez notre méthode éprouvée pour réussir votre orientation"
                className="mb-16"
              />
            </ScrollReveal>
            <div className="mt-16">
              <InteractiveTimeline />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <SectionTitle 
                title="Ils nous font confiance" 
                description="Découvrez les témoignages de nos étudiants"
                className="mb-16"
              />
            </ScrollReveal>
            <div className="mt-16">
              <TestimonialsCarousel />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Index