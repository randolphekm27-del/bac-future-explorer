import { BookOpen, Users, Clock, Target, TrendingUp, MessageCircle, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { SectionTitle } from "@/components/ui/section-title"
import { navigationLinks } from "@/lib/navigation"

const Conseils = () => {
  const conseils = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Comprendre les filières",
      description: "Une filière est un parcours d'études structuré qui vous forme à un domaine spécifique.",
      content: [
        "Chaque filière a ses propres matières principales",
        "Les débouchés professionnels varient selon la filière",
        "Certaines filières nécessitent des prérequis spécifiques",
        "Il existe des passerelles entre certaines filières"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "La vie universitaire",
      description: "L'université offre une expérience unique d'apprentissage et de développement personnel.",
      content: [
        "Autonomie dans l'organisation des études",
        "Participation à des clubs et associations étudiantes",
        "Développement de réseaux professionnels",
        "Accès aux ressources comme bibliothèques et laboratoires"
      ]
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Faire le bon choix",
      description: "Choisir sa voie nécessite une réflexion approfondie sur ses aspirations et capacités.",
      content: [
        "Analysez vos points forts et centres d'intérêt",
        "Informez-vous sur les débouchés professionnels",
        "Rencontrez des étudiants et professionnels du secteur",
        "Considérez les perspectives d'évolution de carrière"
      ]
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Les défis à anticiper",
      description: "Préparez-vous aux réalités de l'enseignement supérieur.",
      content: [
        "Charge de travail plus importante qu'au lycée",
        "Nécessité de développer son autonomie",
        "Gestion du stress lors des examens",
        "Équilibre entre études et vie sociale"
      ]
    }
  ]

  const etapes = [
    { title: "Auto-évaluation", description: "Identifiez vos forces, faiblesses et passions" },
    { title: "Exploration", description: "Découvrez les filières et universités disponibles" },
    { title: "Orientation", description: "Obtenez des conseils personnalisés" },
    { title: "Candidature", description: "Préparez vos dossiers d'admission" },
    { title: "Préparation", description: "Anticipez votre entrée dans l'enseignement supérieur" }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation links={navigationLinks} />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden gradient-hero py-16 md:py-24">
          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6">
                  <span className="gradient-text">Conseils</span> pour réussir votre orientation
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Tout ce que vous devez savoir pour faire les bons choix et réussir votre transition vers l'enseignement supérieur
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Conseils Cards */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <SectionTitle 
                title="Guide complet d'orientation" 
                description="Comprendre les enjeux de l'enseignement supérieur"
                className="mb-12"
              />
            </ScrollReveal>
            
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {conseils.map((conseil, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="glass-card hover-lift border-gradient h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="gradient-primary rounded-xl p-3 text-primary-foreground">
                          {conseil.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl font-bold">{conseil.title}</CardTitle>
                          <CardDescription className="mt-2">{conseil.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {conseil.content.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Étapes Section */}
        <section className="py-16 md:py-24 gradient-card">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <SectionTitle 
                title="Votre parcours d'orientation en 5 étapes" 
                description="Suivez ces étapes pour une orientation réussie"
                className="mb-12"
              />
            </ScrollReveal>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
              {etapes.map((etape, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="glass-card p-6 text-center hover-lift">
                    <div className="gradient-primary rounded-full w-12 h-12 flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{etape.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{etape.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 gradient-hero">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Prêt à commencer votre orientation ?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Utilisez nos outils d'orientation personnalisés pour trouver la filière qui vous correspond
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="premium" size="lg" className="animate-glow">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Parler avec notre IA
                  </Button>
                  <Button variant="outline" size="lg" className="hover-glow">
                    Faire le test d'orientation
                    <ArrowRight className="ml-2 h-5 w-5" />
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