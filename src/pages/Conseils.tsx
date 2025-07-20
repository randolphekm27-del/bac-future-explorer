import { BookOpen, Lightbulb, Users, Target, Clock, ArrowRight, CheckCircle, Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { SectionTitle } from "@/components/ui/section-title"
import { navigationLinks } from "@/lib/navigation"

const Conseils = () => {
  const guides = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Comprendre l'université",
      description: "Découvrez le fonctionnement des universités, les crédits ECTS, les semestres et l'organisation académique.",
      content: [
        "Système LMD (Licence, Master, Doctorat)",
        "Organisation en semestres et UE",
        "Contrôle continu vs examens finaux",
        "Vie sur le campus universitaire"
      ]
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Choisir sa filière",
      description: "Comment identifier la filière qui correspond à vos passions, aptitudes et objectifs professionnels.",
      content: [
        "Analyser ses centres d'intérêt",
        "Évaluer ses compétences",
        "Rechercher les débouchés",
        "Considérer les perspectives d'emploi"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Vie étudiante",
      description: "Tout ce qu'il faut savoir sur la vie quotidienne d'un étudiant : logement, financement, associations.",
      content: [
        "Options de logement étudiant",
        "Bourses et aides financières",
        "Associations et clubs étudiants",
        "Équilibre études-vie sociale"
      ]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Planifier ses études",
      description: "Méthodes pour organiser son parcours académique et préparer son insertion professionnelle.",
      content: [
        "Planification à long terme",
        "Stages et expériences pro",
        "Mobilité internationale",
        "Préparation à l'emploi"
      ]
    }
  ]

  const tips = [
    {
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      title: "Visitez les universités",
      description: "Participez aux journées portes ouvertes pour vous familiariser avec l'environnement."
    },
    {
      icon: <Heart className="h-5 w-5 text-red-500" />,
      title: "Suivez votre passion",
      description: "Choisissez une filière qui vous passionne vraiment, pas seulement pour le prestige."
    },
    {
      icon: <Star className="h-5 w-5 text-yellow-500" />,
      title: "Restez ouvert",
      description: "Gardez plusieurs options et soyez prêt à ajuster votre parcours si nécessaire."
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation links={navigationLinks} />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="gradient-hero py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                  <span className="gradient-text">Guide d'orientation</span>
                  <br />
                  <span className="text-shadow">après le Bac</span>
                </h1>
                <p className="text-xl text-foreground/80 leading-relaxed mb-8">
                  Découvrez tout ce que vous devez savoir pour réussir votre transition 
                  vers l'enseignement supérieur et faire les bons choix pour votre avenir.
                </p>
                <Button variant="premium" size="lg" className="animate-glow">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Commencer le guide
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Main Guides Section */}
        <section className="py-20 gradient-card">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <SectionTitle 
                title="Votre guide complet" 
                description="Explorez chaque aspect de votre future vie étudiante"
                className="mb-16"
              />
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 gap-8">
              {guides.map((guide, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="glass-card p-8 rounded-2xl border-gradient hover-lift transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="gradient-primary p-3 rounded-xl mr-4">
                        {guide.icon}
                      </div>
                      <h3 className="text-xl font-bold">{guide.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {guide.description}
                    </p>
                    <div className="space-y-3">
                      {guide.content.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <SectionTitle 
                title="Conseils pratiques" 
                description="Les points essentiels à retenir pour votre orientation"
                className="mb-16"
              />
            </ScrollReveal>
            
            <div className="grid md:grid-cols-3 gap-6">
              {tips.map((tip, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="glass-card p-6 rounded-xl border-gradient hover-lift">
                    <div className="flex items-start mb-4">
                      {tip.icon}
                      <h4 className="font-semibold ml-3">{tip.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{tip.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 gradient-card">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Prêt à <span className="gradient-text">démarrer</span> votre aventure ?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Explorez nos outils d'orientation personnalisés pour découvrir 
                  les filières qui vous correspondent le mieux.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="premium" size="lg" className="animate-glow">
                    <Target className="mr-2 h-5 w-5" />
                    Passer le test d'orientation
                  </Button>
                  <Button variant="outline" size="lg" className="hover-lift">
                    <Users className="mr-2 h-5 w-5" />
                    Rejoindre la communauté
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Conseils