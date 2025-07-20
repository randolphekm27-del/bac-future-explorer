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
    <div className="flex min-h-screen flex-col">
      <Navigation links={navigationLinks} />
      <NewsletterPopup />
      
      <main className="flex-1 pt-16">
        {/* Premium Hero Section */}
        <section className="relative overflow-hidden gradient-hero py-16 sm:py-24 md:py-40">
          <FloatingParticles />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <ScrollReveal>
                <div className="space-y-6 sm:space-y-8">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none">
                    <span className="text-shadow">Trouvez votre voie</span><br />
                    <span className="text-shadow">après le </span>
                    <span className="gradient-text animate-bounce-in text-glow">Bac</span>
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 leading-relaxed font-medium">
                    <span className="gradient-text-accent">Explorez</span> les universités, filières et opportunités pour construire votre avenir. 
                    Guide complet pour les nouveaux bacheliers du Bénin.
                  </p>
                  
                  {/* Smart Search */}
                  <div className="my-6 sm:my-8">
                    <SmartSearch 
                      placeholder="Que voulez-vous étudier ?" 
                      className="max-w-full"
                      onSearch={(query) => navigate(`/universities?search=${query}`)}
                    />
                  </div>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <Link to="/universities">
                      <Button variant="premium" size="xl" className="animate-glow w-full sm:w-auto">
                        Commencer l'exploration
                        <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                      </Button>
                    </Link>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Plus de 1000 étudiants nous font déjà confiance
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <div className="relative flex justify-center mt-8 lg:mt-0">
                  <div className="glass-card rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl hover-lift border-gradient animate-float">
                    <img
                      src={logoImage}
                      alt="Après mon Bac - Logo officiel"
                      className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain animate-glow"
                    />
                  </div>
                  {/* Premium decorative elements */}
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 gradient-accent rounded-full animate-float opacity-80"></div>
                  <div className="absolute top-12 -right-8 w-16 h-16 gradient-primary rounded-full animate-bounce opacity-70"></div>
                  <div className="absolute top-1/2 -left-12 w-6 h-6 bg-accent rounded-full animate-pulse"></div>
                  <div className="absolute bottom-1/4 -right-4 w-8 h-8 bg-primary/60 rounded-full animate-bounce delay-1000"></div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Premium Features Section */}
        <section className="py-16 sm:py-20 md:py-24 gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <SectionTitle 
                title="Votre réussite commence ici" 
                description="Découvrez toutes les ressources dont vous avez besoin pour votre avenir"
                className="mb-12 sm:mb-16"
              />
            </ScrollReveal>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <ScrollReveal delay={100}>
                <FeatureCard
                  icon={<Building2 className="h-8 w-8" />}
                  title="Universités"
                  description="Explorez toutes les universités du Bénin avec leurs filières et conditions d'admission"
                  href="/universities"
                />
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
                <FeatureCard
                  icon={<Briefcase className="h-8 w-8" />}
                  title="Stages & Opportunités"
                  description="Trouvez des stages et développez votre expérience professionnelle"
                  href="/internships"
                />
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
                <FeatureCard
                  icon={<PlayCircle className="h-8 w-8" />}
                  title="Formations Pratiques"
                  description="Développez vos compétences avec nos formations spécialisées"
                  href="/courses"
                />
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

        {/* Premium Interactive Timeline */}
        <section className="py-16 sm:py-20 md:py-24 gradient-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <SectionTitle 
                title="Votre parcours en 5 étapes" 
                description="Suivez notre méthode éprouvée pour réussir votre orientation"
                className="mb-12 sm:mb-16"
              />
            </ScrollReveal>
            <div className="mt-12 sm:mt-16">
              <InteractiveTimeline />
            </div>
          </div>
        </section>

        {/* Premium Testimonials */}
        <section className="py-16 sm:py-20 md:py-24 gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <SectionTitle 
                title="Ils nous font confiance" 
                description="Découvrez les témoignages de nos étudiants"
                className="mb-12 sm:mb-16"
              />
            </ScrollReveal>
            <div className="mt-12 sm:mt-16">
              <TestimonialsCarousel />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingAccessibility />
    </div>
  )
}

export default Index