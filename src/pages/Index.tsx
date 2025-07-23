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
    <div className="min-h-screen">
      <Navigation links={navigationLinks} />
      <NewsletterPopup />
      
      <main className="pt-16">
        {/* Premium Hero Section */}
        <section className="relative gradient-hero py-16 sm:py-24 md:py-40">
          <FloatingParticles />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <ScrollReveal>
                <div className="space-y-6 sm:space-y-8">
                   <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-tight">
                    <span className="text-shadow">Trouvez votre voie</span><br />
                    <span className="text-shadow">après le </span>
                    <span className="gradient-text animate-bounce-in text-glow">Bac</span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed font-medium">
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
                  <div className="glass-card rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-8 md:p-12 shadow-2xl hover-lift border-gradient animate-float">
                    <img
                      src={logoImage}
                      alt="Après mon Bac - Logo officiel"
                      className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain animate-glow"
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
            
            <div className="relative max-w-4xl mx-auto">
              <div className="rounded-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  <ScrollReveal delay={100}>
                    <div className="glass-card rounded-xl p-6 hover-lift border-gradient">
                      <div className="text-center">
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
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={200}>
                    <div className="glass-card rounded-xl p-6 hover-lift border-gradient">
                      <div className="text-center">
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
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={300}>
                    <div className="glass-card rounded-xl p-6 hover-lift border-gradient">
                      <div className="text-center">
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
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={400}>
                    <div className="glass-card rounded-xl p-6 hover-lift border-gradient">
                      <div className="text-center">
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
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={500}>
                    <div className="glass-card rounded-xl p-6 hover-lift border-gradient">
                      <div className="text-center">
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
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={600}>
                    <div className="glass-card rounded-xl p-6 hover-lift border-gradient">
                      <div className="text-center">
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
                  </ScrollReveal>
                </div>
              </div>
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