import { Building2, GraduationCap, Briefcase, Trophy, PlayCircle, Users, ArrowRight, Sparkles, ChevronRight, Star, CheckCircle } from "lucide-react"
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
import { OrientationTest } from "@/components/ui/orientation-test"
import { AnimatedTextCycle } from "@/components/ui/animated-text-cycle"
import { navigationLinks } from "@/lib/navigation"
import { Link, useNavigate } from "react-router-dom"

const logoImage = "/lovable-uploads/d0cefdb1-2000-4d82-9b38-0fa02b5f5d78.png"

const Index = () => {
  const navigate = useNavigate()

  const animatedTexts = [
    "Bonjour,",
    "tu viens d'obtenir ton bac ?",
    "Alors Bravo et félicitation à toi...maintenant...",
    "Quelle filière veux-tu vraiment faire ?",
    "ou tu veux être accompagner pour faire le meilleur choix de ta vie !",
    "Alors, sur ce site, tu verras tout ce qu'il te faut...",
    "Clique sur Commencer l'exploration."
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation links={navigationLinks} />
      <NewsletterPopup />
      
      {/* Hero Section */}
      <section className="relative gradient-hero pt-20 pb-16 sm:pb-24 md:pb-32 overflow-hidden">
        <FloatingParticles />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background/80 to-background"></div>
        
        <div className="container-responsive relative z-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 font-responsive">
              <AnimatedTextCycle 
                texts={animatedTexts}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-black tracking-tight leading-tight min-h-[80px] sm:min-h-[120px] md:min-h-[140px] lg:min-h-[160px]"
              />
              
              <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-medium animate-fade-in font-responsive" style={{ animationDelay: "0.2s" }}>
                <span className="gradient-text-accent font-bold">Explorez</span> les universités, filières et opportunités pour construire votre avenir. 
                Guide complet pour les nouveaux bacheliers du Bénin.
              </p>
              
              <div className="w-full animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <SmartSearch 
                  placeholder="Que voulez-vous étudier ?" 
                  className="w-full"
                  onSearch={(query) => navigate(`/universities?search=${query}`)}
                />
              </div>
              
              <div className="space-y-3 sm:space-y-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <Link to="/universities" className="block w-full">
                  <Button variant="premium" size="xl" className="w-full group">
                    <span className="relative z-10 flex items-center justify-center">
                      Commencer l'exploration
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </Button>
                </Link>
                
                <div className="flex items-center justify-center sm:justify-start gap-2 text-muted-foreground">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="h-8 w-8 rounded-full bg-primary/10 border-2 border-background"></div>
                    ))}
                  </div>
                  <p className="text-sm sm:text-base">
                    Plus de <span className="font-semibold text-primary">1000 étudiants</span> nous font déjà confiance
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl hover-scale relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-30"></div>
                <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-primary/10 blur-xl"></div>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-accent/10 blur-xl"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <img
                    src={logoImage}
                    alt="Après mon Bac - Logo officiel"
                    className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-lg"
                  />
                  <div className="mt-6 flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Guide Officiel 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
              <span className="relative z-10">Votre réussite commence ici</span>
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-accent/30 z-0"></span>
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez toutes les ressources dont vous avez besoin pour votre avenir
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <Building2 className="h-6 w-6 text-white" />,
                title: "Universités",
                description: "Explorez toutes les universités du Bénin avec leurs filières et conditions d'admission",
                link: "/universities",
                buttonText: "Explorer"
              },
              {
                icon: <GraduationCap className="h-6 w-6 text-white" />,
                title: "Filières & Débouchés",
                description: "Découvrez les formations disponibles et leurs perspectives d'emploi",
                link: "/programs",
                buttonText: "Découvrir"
              },
              {
                icon: <Briefcase className="h-6 w-6 text-white" />,
                title: "Stages & Opportunités",
                description: "Trouvez des stages et développez votre expérience professionnelle",
                link: "/internships",
                buttonText: "Voir les stages"
              },
              {
                icon: <Trophy className="h-6 w-6 text-white" />,
                title: "Concours & Hackathons",
                description: "Participez aux concours et challenges pour vous démarquer",
                link: "/competitions",
                buttonText: "Participer"
              },
              {
                icon: <PlayCircle className="h-6 w-6 text-white" />,
                title: "Formations Pratiques",
                description: "Développez vos compétences avec nos formations spécialisées",
                link: "/courses",
                buttonText: "Se former"
              },
              {
                icon: <Users className="h-6 w-6 text-white" />,
                title: "Communauté",
                description: "Rejoignez une communauté d'étudiants motivés et ambitieux",
                link: "/community",
                buttonText: "Rejoindre"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-xl border border-border/50 bg-card hover:border-primary/30 transition-all duration-300 animate-fade-in hover:shadow-lg"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-background to-card opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 p-6 h-full flex flex-col">
                  <div className="w-14 h-14 mb-4 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{feature.description}</p>
                  <Link to={feature.link} className="mt-auto">
                    <Button variant="outline" className="w-full group">
                      <span className="flex items-center">
                        {feature.buttonText}
                        <ChevronRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <Star className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">TÉMOIGNAGES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ils nous font confiance</h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez les témoignages de nos étudiants
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* Test d'Orientation CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="orientation-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="white" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#orientation-grid)" />
          </svg>
        </div>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl -z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl -z-0"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in space-y-8">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-blue-100 to-orange-200 bg-clip-text text-transparent leading-tight">
                  Trouvez votre voie idéale
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto font-medium">
                  Notre test d'orientation intelligent analyse vos centres d'intérêt, compétences et aspirations pour vous recommander les filières les plus adaptées à votre profil unique.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
                <div className="text-center animate-bounce">
                  <OrientationTest />
                </div>
                
                <div className="text-center space-y-4">
                  <div className="glass-card rounded-2xl p-6 bg-white/10 backdrop-blur-sm border border-white/20 max-w-md relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/20 blur-xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-accent/20 blur-xl"></div>
                    
                    <div className="relative z-10 grid grid-cols-3 gap-4 text-center">
                      {[
                        { value: "50+", label: "Filières" },
                        { value: "15", label: "Questions" },
                        { value: "5min", label: "Durée" }
                      ].map((item, index) => (
                        <div key={index} className="space-y-1">
                          <div className="text-3xl font-bold text-white">{item.value}</div>
                          <div className="text-blue-200 text-sm">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2 text-blue-200">
                    <div className="flex items-center gap-2 bg-blue-900/30 px-4 py-2 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm font-medium">100% gratuit • Résultats instantanés</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-12">
                <p className="text-blue-200/80 text-lg">
                  Rejoignez plus de <span className="font-bold text-orange-300">1,000 étudiants</span> qui ont trouvé leur voie grâce à notre test
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Index
