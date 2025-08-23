import { Building2, GraduationCap, Briefcase, Trophy, PlayCircle, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { TestimonialsCarousel } from "@/components/ui/testimonials-carousel"
import { SmartSearch } from "@/components/ui/smart-search"
import { StatsSection } from "@/components/ui/stats-section"
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
    "ou tu veux être accompagné pour faire le meilleur choix de ta vie !",
    "Alors, sur ce site, tu verras tout ce qu'il te faut...",
    "Clique sur Commencer l'exploration."
  ]

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation links={navigationLinks} />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 sm:pb-24 md:pb-32 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white">
                <AnimatedTextCycle 
                  texts={animatedTexts}
                  className="min-h-[120px] sm:min-h-[140px] md:min-h-[160px]"
                />
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">Explorez</span> les universités, filières et opportunités pour construire votre avenir. 
                Guide complet pour les nouveaux bacheliers du Bénin.
              </p>
              
              <div className="w-full">
                <SmartSearch 
                  placeholder="Que voulez-vous étudier ?" 
                  className="w-full"
                  onSearch={(query) => navigate(`/universities?search=${query}`)}
                />
              </div>
              
              <div className="space-y-4">
                <Link to="/universities" className="block w-full">
                  <Button 
                    size="lg" 
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-300 text-base"
                  >
                    Commencer l'exploration
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <p className="text-base text-gray-500 dark:text-gray-400 text-center sm:text-left">
                  Plus de 1000 étudiants nous font déjà confiance
                </p>
              </div>
            </div>
            
            <div className="relative flex justify-center">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <img
                  src={logoImage}
                  alt="Après mon Bac - Logo officiel"
                  className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Votre réussite commence ici</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Découvrez toutes les ressources dont vous avez besoin pour votre avenir</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Feature cards */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <Building2 className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Universités</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                Explorez toutes les universités du Bénin avec leurs filières et conditions d'admission
              </p>
              <Link to="/universities">
                <Button variant="outline" className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900">
                  Explorer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <GraduationCap className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Filières & Débouchés</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                Découvrez les formations disponibles et leurs perspectives d'emploi
              </p>
              <Link to="/programs">
                <Button variant="outline" className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900">
                  Découvrir
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <Briefcase className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Stages & Opportunités</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                Trouvez des stages et développez votre expérience professionnelle
              </p>
              <Link to="/internships">
                <Button variant="outline" className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900">
                  Voir les stages
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <Trophy className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Concours & Hackathons</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                Participez aux concours et challenges pour vous démarquer
              </p>
              <Link to="/competitions">
                <Button variant="outline" className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900">
                  Participer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <PlayCircle className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Formations Pratiques</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                Développez vos compétences avec nos formations spécialisées
              </p>
              <Link to="/courses">
                <Button variant="outline" className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900">
                  Se former
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <Users className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Communauté</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                Rejoignez une communauté d'étudiants motivés et ambitieux
              </p>
              <a 
                href="https://chat.whatsapp.com/FUpGT490JQ98CCidAHOLcw?mode=ac_t" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant="outline" className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900">
                  Rejoindre
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Ils nous font confiance</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Découvrez les témoignages de nos étudiants</p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Test d'Orientation CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 relative overflow-hidden">
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
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Trouvez votre voie idéale
                </h2>
                <p className="text-lg text-blue-100 leading-relaxed max-w-3xl mx-auto">
                  Notre test d'orientation analyse vos centres d'intérêt, compétences et aspirations 
                  pour vous recommander les filières les plus adaptées à votre profil.
                </p>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 pt-6">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 max-w-md">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-white">50+</div>
                      <div className="text-blue-200 text-xs md:text-sm mt-1">Filières</div>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-white">15</div>
                      <div className="text-blue-200 text-xs md:text-sm mt-1">Questions</div>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-white">5min</div>
                      <div className="text-blue-200 text-xs md:text-sm mt-1">Durée</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center mt-6 space-x-2 text-blue-200">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs md:text-sm font-medium">100% gratuit • Résultats instantanés</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                    Commencer le test
                  </button>
                </div>
              </div>
              
              <div className="pt-8">
                <p className="text-blue-200 text-sm md:text-base">
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
