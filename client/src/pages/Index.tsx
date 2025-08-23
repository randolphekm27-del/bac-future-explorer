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
    "ou tu veux être accompagner pour faire le meuilleur choix de ta vie !",
    "Alors, sur ce site, tu verras tout ce qu'il te faut...",
    "Clique sur Commencer l'exploration."
  ]

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation links={navigationLinks} />
      {/* Popup newsletter supprimé comme demandé */}
      
      {/* Hero Section */}
      <section className="relative gradient-hero pt-20 pb-16 sm:pb-24 md:pb-32">
        <FloatingParticles />
        
        <div className="container-responsive relative z-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 font-responsive">
              <AnimatedTextCycle 
                texts={animatedTexts}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight min-h-[80px] sm:min-h-[120px] md:min-h-[140px] lg:min-h-[160px]"
              />
              <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-medium animate-fade-in font-responsive" style={{ animationDelay: "0.2s" }}>
                <span className="gradient-text-accent">Explorez</span> les universités, filières et opportunités pour construire votre avenir. 
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
                  <Button 
                    variant="premium" 
                    size="xl" 
                    className="w-full text-sm sm:text-base py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Commencer l'exploration
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </Link>
                <p className="text-base sm:text-lg text-muted-foreground text-center sm:text-left animate-fade-in" style={{ animationDelay: "0.8s" }}>
                  Plus de 1000 étudiants nous font déjà confiance
                </p>
              </div>
            </div>
            
            <div className="relative flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl hover-scale border-2 border-blue-500/30">
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
      <StatsSection />

      {/* Features Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Votre réussite commence ici</h2>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300">Découvrez toutes les ressources dont vous avez besoin pour votre avenir</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature cards with vibrant blue border and icons */}
            <div className="glass-card rounded-xl p-6 text-center hover-scale animate-fade-in border-2 border-blue-500/20 hover:border-blue-500/40 transition-all" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center bg-blue-600">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Universités</h3>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                Explorez toutes les universités du Bénin avec leurs filières et conditions d'admission
              </p>
              <Link to="/universities">
                <Button variant="outline" className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950">
                  Explorer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="glass-card rounded-xl p-6 text-center hover-scale animate-fade-in border-2 border-blue-500/20 hover:border-blue-500/40 transition-all" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center bg-blue-600">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Filières & Débouchés</h3>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                Découvrez les formations disponibles et leurs perspectives d'emploi
              </p>
              <Link to="/programs">
                <Button variant="outline" className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950">
                  Découvrir
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="glass-card rounded-xl p-6 text-center hover-scale animate-fade-in border-2 border-blue-500/20 hover:border-blue-500/40 transition-all" style={{ animationDelay: "0.3s" }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center bg-blue-600">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Stages & Opportunités</h3>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                Trouvez des stages et développez votre expérience professionnelle
              </p>
              <Link to="/internships">
                <Button variant="outline" className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950">
                  Voir les stages
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="glass-card rounded-xl p-6 text-center hover-scale animate-fade-in border-2 border-blue-500/20 hover:border-blue-500/40 transition-all" style={{ animationDelay: "0.4s" }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center bg-blue-600">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Concours & Hackathons</h3>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                Participez aux concours et challenges pour vous démarquer
              </p>
              <Link to="/competitions">
                <Button variant="outline" className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950">
                  Participer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="glass-card rounded-xl p-6 text-center hover-scale animate-fade-in border-2 border-blue-500/20 hover:border-blue-500/40 transition-all" style={{ animationDelay: "0.5s" }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center bg-blue-600">
                <PlayCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Formations Pratiques</h3>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                Développez vos compétences avec nos formations spécialisées
              </p>
              <Link to="/courses">
                <Button variant="outline" className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950">
                  Se former
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="glass-card rounded-xl p-6 text-center hover-scale animate-fade-in border-2 border-blue-500/20 hover:border-blue-500/40 transition-all" style={{ animationDelay: "0.6s" }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center bg-blue-600">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Communauté</h3>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                Rejoignez une communauté d'étudiants motivés et ambitieux
              </p>
              <a 
                href="https://chat.whatsapp.com/FUpGT490JQ98CCidAHOLcw?mode=ac_t" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant="outline" className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950">
                  Rejoindre
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Ils nous font confiance</h2>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300">Découvrez les témoignages de nos étudiants</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* Test d'Orientation CTA Section */}
<section className="py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 relative overflow-hidden">
  {/* Background Pattern Subtle */}
  <div className="absolute inset-0 opacity-5">
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1.5" fill="white" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots-pattern)" />
    </svg>
  </div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <div className="space-y-10">
        {/* Heading Section */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Trouvez votre voie idéale
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Notre test d'orientation analyse vos centres d'intérêt, compétences et aspirations 
            pour vous recommander les filières les plus adaptées à votre profil.
          </p>
        </div>
        
        {/* Stats and CTA */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 pt-6">
          {/* Stats Cards */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 max-w-md">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-blue-200 text-sm mt-1">Filières</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">15</div>
                <div className="text-blue-200 text-sm mt-1">Questions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">5min</div>
                <div className="text-blue-200 text-sm mt-1">Durée</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center mt-6 space-x-2 text-blue-200">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">100% gratuit • Résultats instantanés</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Commencer le test
            </button>
          </div>
        </div>
        
        {/* Social Proof */}
        <div className="pt-10">
          <p className="text-blue-200">
            Rejoignez plus de <span className="font-semibold text-orange-300">1,000 étudiants</span> 
            qui ont trouvé leur voie grâce à notre test
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
