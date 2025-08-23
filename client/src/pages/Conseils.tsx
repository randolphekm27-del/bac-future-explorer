import { BookOpen, Users, Clock, Target, TrendingUp, MessageCircle, ArrowRight, CheckCircle, Heart, Brain, Calendar, Map, Star, Shield, Lightbulb, GraduationCap, Briefcase, Globe, Scale, Building, Microscope, Code, Calculator, Palette, Music, Utensils } from "lucide-react"
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
      title: "Comprendre le système universitaire béninois",
      description: "Maîtriser l'écosystème de l'enseignement supérieur au Bénin pour mieux naviguer.",
      content: [
        "Système LMD (Licence-Master-Doctorat) : 3 ans de licence, 2 ans de master, 3 ans de doctorat",
        "Universités publiques (UAC, UNSTIM, UNB) vs privées : coûts, reconnaissance et spécificités",
        "Grandes écoles : INE, ENSP, ENEAM... formations spécialisées très sélectives",
        "Crédits ECTS : système de transfert de crédits européen utilisé pour valider votre parcours",
        "Semestres vs années : organisation du calendrier académique et sessions d'examens"
      ]
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Choisir selon sa passion et ses talents",
      description: "L'alignement personnel est la clé de la réussite et de l'épanouissement.",
      content: [
        "Faites le point sur vos matières préférées au lycée et vos résultats",
        "Identifiez vos compétences naturelles : analyse, créativité, logique, relationnel...",
        "Évaluez votre tolérance à certaines contraintes : travail de bureau, terrain, horaires...",
        "Testez vos intérêts via des stages d'immersion ou des rencontres métiers",
        "Ne suivez pas une tendance sans qu'elle ne vous corresponde vraiment"
      ]
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Analyser les débouchés professionnels",
      description: "Une filière doit offrir des perspectives d'avenir concrètes.",
      content: [
        "Taux d'insertion professionnelle : vérifiez les statistiques des promotions précédentes",
        "Secteurs porteurs au Bénin : numérique, agriculture, énergie, santé, BTP...",
        "Salaire moyen de sortie : variez entre 80.000 FCFA et 300.000 FCFA selon les filières",
        "Possibilités d'entrepreneuriat : certaines filières se prêtent mieux à la création d'entreprise",
        "Mobilité internationale : possibilités d'expatriation dans la sous-région ou ailleurs"
      ]
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Méthodologie universitaire : réussir sa transition",
      description: "Le passage lycée-université demande une adaptation stratégique.",
      content: [
        "Travail personnel requis : comptez 2h de travail à la maison pour 1h de cours",
        "Prise de notes efficace : apprenez à synthétiser l'essentiel en amphi",
        "Travail en groupe : formez des équises de travail dès le début du semestre",
        "Gestion du temps : utilisez un agenda pour planifier révisions et travaux",
        "Recherche documentaire : maîtrisez la bibliothèque universitaire et les ressources en ligne"
      ]
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Financer ses études supérieures",
      description: "Anticipez les aspects financiers pour étudier sereinement.",
      content: [
        "Coût moyen annuel : 50.000 à 500.000 FCFA selon le type d'établissement",
        "Bourses nationales : conditions et procédures de demande",
        "Jobs étudiants : équilibre entre travail rémunéré et études",
        "Frais annexes : transport, matériel pédagogique, logement, nourriture...",
        "Aides familiales : dialoguez ouvertement sur le budget éducation"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Vie étudiante et épanouissement personnel",
      description: "L'université est aussi une expérience humaine et sociale.",
      content: [
        "Associations étudiantes : plus de 50 associations actives dans les universités béninoises",
        "Logement : campus, colocation, famille - pesez le pour et le contre",
        "Santé : inscriptions à la mutuelle étudiante et accès aux services médicaux",
        "Culture et sport : activités para-universitaires pour l'équilibre vie-études",
        "Réseautage : construisez votre réseau professionnel dès la première année"
      ]
    }
  ]

  const filieresDetails = [
    {
      icon: <Code className="h-5 w-5" />,
      name: "Informatique et Technologies",
      tips: "Prérequis en mathématiques, logique algorithmique. Débouchés : développeur, data scientist, expert cybersécurité"
    },
    {
      icon: <Scale className="h-5 w-5" />,
      name: "Droit et Sciences Juridiques",
      tips: "Excellente expression écrite et orale requis. Débouchés : avocat, magistrat, juriste d'entreprise"
    },
    {
      icon: <Building className="h-5 w-5" />,
      name: "Génie Civil et Architecture",
      tips: "Solides bases en maths/physique. Débouchés : ingénieur BTP, architecte, urbaniste"
    },
    {
      icon: <Microscope className="h-5 w-5" />,
      name: "Médecine et Santé",
      tips: "Concours très sélectif, excellente capacité de travail. Débouchés : médecin, pharmacien, infirmier"
    },
    {
      icon: <Calculator className="h-5 w-5" />,
      name: "Gestion et Commerce",
      tips: "Esprit d'analyse et sens du relationnel. Débouchés : manager, comptable, entrepreneur"
    }
  ]

  const etapes = [
    { 
      title: "Auto-évaluation", 
      description: "Identifiez vos forces, faiblesses, passions et valeurs personnelles",
      details: "Tests de personnalité, bilan de compétences, réflexion sur vos aspirations profondes"
    },
    { 
      title: "Exploration des filières", 
      description: "Découvrez en détail les formations disponibles et leurs spécificités",
      details: "Journées portes ouvertes, rencontres avec des professionnels, recherche documentaire"
    },
    { 
      title: "Analyse des débouchés", 
      description: "Évaluez les perspectives d'emploi et les salaires potentiels",
      details: "Étude du marché de l'emploi, statistiques d'insertion, tendances économiques"
    },
    { 
      title: "Préparation des dossiers", 
      description: "Construisez un dossier de candidature solide et personnalisé",
      details: "Lettre de motivation, CV étudiant, préparation aux entretiens et concours"
    },
    { 
      title: "Intégration réussie", 
      description: "Anticipez votre arrivée à l'université et votre méthode de travail",
      details: "Rencontre avec des anciens, préparation mentale, organisation du logement"
    }
  ]

  const stats = [
    { value: "85%", label: "des étudiants changent d'avis pendant la 1ère année sans orientation" },
    { value: "3x", label: "plus de chances de réussite avec une bonne orientation" },
    { value: "40%", label: "des métiers de 2030 n'existent pas encore aujourd'hui" },
    { value: "72%", label: "des employeurs valorisent les soft skills autant que le diplôme" }
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
                  <span className="gradient-text">Guide Complet</span> d'Orientation Universitaire
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  Tout ce que vous devez savoir pour faire les bons choix et réussir votre parcours dans l'enseignement supérieur au Bénin
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
                  {stats.map((stat, index) => (
                    <div key={index} className="glass-card p-4 text-center">
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Conseils Cards */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <SectionTitle 
                title="Les piliers d'une orientation réussie" 
                description="6 aspects essentiels à maîtriser pour faire le bon choix"
                className="mb-12"
              />
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                          <CardDescription className="mt-2 text-sm">{conseil.description}</CardDescription>
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

        {/* Filières Section */}
        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <SectionTitle 
                title="Focus sur les principales filières" 
                description="Caractéristiques clés des domaines d'étude les plus populaires"
                className="mb-12"
              />
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filieresDetails.map((filiere, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="hover-lift">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          {filiere.icon}
                        </div>
                        <CardTitle className="text-lg">{filiere.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{filiere.tips}</p>
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
                title="Votre roadmap d'orientation en 5 étapes" 
                description="Un processus structuré pour des choix éclairés"
                className="mb-12"
              />
            </ScrollReveal>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
              {etapes.map((etape, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="glass-card p-6 text-center hover-lift h-full">
                    <div className="gradient-primary rounded-full w-12 h-12 flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{etape.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{etape.description}</p>
                    <p className="text-xs text-primary/80 font-medium">{etape.details}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Checklist Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <SectionTitle 
                title="Checklist de l'étudiant bien orienté" 
                description="Les actions concrètes à mener pour maximiser vos chances de réussite"
                className="mb-12"
              />
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Avant de choisir</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Rencontrer au moins 3 professionnels du métier visé",
                    "Assister à des cours en auditeur libre",
                    "Comparer les programmes de 3 établissements minimum",
                    "Évaluer le coût total de la formation",
                    "Vérifier les accréditations et reconnaissances"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Après l'admission</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "S'inscrire à la mutuelle étudiante",
                    "Rejoindre une association étudiante",
                    "Créer son emploi du temps de travail",
                    "Identifier les ressources bibliographiques",
                    "Prévoir le budget du premier semestre"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 gradient-hero">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Prêt à construire votre avenir universitaire ?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Utilisez nos outils d'orientation personnalisés pour trouver la filière qui correspond à votre profil unique
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="premium" size="lg" className="animate-glow">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Conseil personnalisé avec notre IA
                  </Button>
                  <Button variant="outline" size="lg" className="hover-glow">
                    Explorer les filières détaillées
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  Plus de 10,000 étudiants béninois ont déjà trouvé leur voie grâce à nos conseils
                </p>
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
