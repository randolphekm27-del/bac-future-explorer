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
      content: `Au Bénin, le système universitaire suit le modèle LMD (Licence-Master-Doctorat) avec une licence en 3 ans, un master en 2 ans et un doctorat en 3 ans. Les universités publiques comme l'UAC, l'UNSTIM et l'UNB offrent des formations à coût réduit mais avec une capacité d'accueil limitée, tandis que les établissements privés proposent plus de flexibilité à un coût plus élevé. Les grandes écoles spécialisées (INE, ENSP, ENEAM) sont très sélectives mais offrent une insertion professionnelle excellente, avec près de 85% des diplômés trouvant un emploi dans les 6 mois. Le système de crédits ECTS vous permet de valider progressivement votre parcours et même de mobilité entre établissements.`
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Choisir selon sa passion et ses talents",
      description: "L'alignement personnel est la clé de la réussite et de l'épanouissement.",
      content: `Votre choix de filière doit refléter qui vous êtes vraiment, pas ce que les autres attendent de vous. Prenez le temps d'identifier vos matières préférées au lycée et vos compétences naturelles : êtes-vous plutôt analytique, créatif, logique ou relationnel ? Beaucoup d'étudiants commettent l'erreur de suivre une filière "porteuse" sans y trouver d'intérêt personnel, et près de 40% se réorientent après la première année. Testez vos intérêts grâce à des stages d'immersion ou des rencontres avec des professionnels. Rappelez-vous : vous passerez au moins 3 à 5 ans dans cette formation, puis toute une carrière - l'épanouissement personnel est aussi important que les débouchés professionnels.`
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Analyser les débouchés professionnels réels",
      description: "Une filière doit offrir des perspectives d'avenir concrètes et durables.",
      content: `Au-delà de la passion, une orientation réussie doit considérer les réalités du marché de l'emploi béninois. Les secteurs porteurs incluent actuellement le numérique (avec une croissance de 15% par an), l'agriculture moderne, les énergies renouvelables, la santé et le BTP. Les salaires de sortie varient considérablement : de 80.000 FCFA pour certaines filières saturées à plus de 300.000 FCFA pour les spécialités en tension comme la cybersécurité ou l'intelligence artificielle. Renseignez-vous sur les taux d'insertion professionnelle des promotions précédentes et notez que 60% des métiers de 2030 n'existent pas encore aujourd'hui - privilégiez donc les formations qui développent des compétences transversales et adaptatives.`
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Réussir sa transition lycée-université",
      description: "Le passage vers l'enseignement supérieur demande une adaptation méthodologique.",
      content: `La première année universitaire représente un changement radical qui surprend beaucoup d'étudiants. À l'université, l'autonomie est reine : plus personne ne vous rappellera les devoirs ou les révisions. Prévoyez environ 2 heures de travail personnel pour chaque heure de cours, et apprenez à prendre des notes efficaces pendant les amphis. Formez des groupes de travail dès le début du semestre - les études montrent que les étudiants qui travaillent en groupe ont 30% de meilleurs résultats. La bibliothèque universitaire deviendra votre meilleure alliée, tout comme les ressources en ligne de votre établissement. Cette adaptation demande 3 à 4 mois en moyenne, alors soyez indulgent avec vous-même pendant cette période de transition.`
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Anticiper le financement de ses études",
      description: "Une planification financière réaliste évite bien des interruptions de parcours.",
      content: `Les études supérieures représentent un investissement important qu'il faut anticiper sereinement. Au Bénin, le coût annuel varie de 50.000 FCFA dans le public à 500.000 FCFA dans le privé, auxquels s'ajoutent les frais de transport, de matériel pédagogique, de logement et de nourriture. Renseignez-vous sur les bourses nationales et les programmes d'aide sociale - seulement 15% des étudiants en bénéficient actuellement. Les jobs étudiants peuvent compléter votre budget, mais attention à ne pas dépasser 15 heures par semaine sous peine de mettre en péril votre réussite académique. Ayez une conversation ouverte avec votre famille sur le budget éducation et explorez toutes les options de financement avant de vous engager.`
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "S'épanouir dans la vie étudiante",
      description: "L'université est une expérience humaine transformative au-delà des cours.",
      content: `Votre passage à l'université ne se résume pas aux seuls apprentissages académiques. C'est aussi l'occasion de vous découvrir, de vous faire des amis pour la vie et de développer votre réseau professionnel. Les associations étudiantes - plus de 50 sont actives dans les universités béninoises - vous permettront de développer des compétences précieuses en management, organisation d'événements et travail d'équipe. Votre choix de logement (campus, colocation, famille) influencera grandement votre expérience quotidienne. N'oubliez pas de vous inscrire à la mutuelle étudiante et de participer aux activités sportives et culturelles pour maintenir un équilibre de vie essentiel à votre réussite globale.`
    }
  ]

  const filieresDetails = [
    {
      icon: <Code className="h-5 w-5" />,
      name: "Informatique et Technologies",
      content: `Le secteur numérique béninois connaît une croissance exceptionnelle de 15% par an. Cette filière exige de solides bases en mathématiques et une logique algorithmique développée. Les débouchés sont excellents avec des salaires débutants entre 200.000 et 400.000 FCFA pour les développeurs, et jusqu'à 600.000 FCFA pour les spécialistes en cybersécurité. La formation combine théorie et pratique avec de nombreux projets concrets.`
    },
    {
      icon: <Scale className="h-5 w-5" />,
      name: "Droit et Sciences Juridiques",
      content: `Cette filière prestigieuse demande une excellente expression écrite et orale, ainsi qu'un sens aigu de l'éthique. Les études durent au minimum 4 ans et débouchent sur des carrières diversifiées : avocat (30% des diplômés), magistrat, juriste d'entreprise ou notaire. Le secteur public recrute activement, avec 200 postes ouverts annuellement dans la magistrature et l'administration.`
    },
    {
      icon: <Building className="h-5 w-5" />,
      name: "Génie Civil et Architecture",
      content: `Portée par les grands projets d'infrastructure nationaux, cette filière offre d'excellentes perspectives avec 5.000 emplois créés annuellement dans le BTP. Elle requiert de solides bases en mathématiques et physique. Les ingénieurs civils débutent autour de 300.000 FCFA et peuvent atteindre 800.000 FCFA après 5 ans d'expérience. La formation alterne théorie et stages pratiques sur chantier.`
    },
    {
      icon: <Microscope className="h-5 w-5" />,
      name: "Médecine et Santé",
      content: `Filère d'excellence extrêmement sélective (seulement 10% d'admis), la médecine demande une capacité de travail exceptionnelle et une vocation affirmée. Les études durent 7 ans minimum et débouchent sur des carrières variées : médecine générale, spécialisation, recherche ou santé publique. Les besoins en personnel soignant sont immenses, avec seulement 1 médecin pour 10.000 habitants au Bénin.`
    },
    {
      icon: <Calculator className="h-5 w-5" />,
      name: "Gestion et Commerce",
      content: `Cette filière polyvalente convient aux esprits analytiques avec un sens du relationnel. Elle mène à des carrières en management, comptabilité, audit ou entrepreneuriat. Les diplômés trouvent rapidement un emploi (75% dans les 3 mois) avec des salaires débutants entre 150.000 et 250.000 FCFA. Les écoles de commerce privées offrent un réseau professionnel précieux mais à un coût plus élevé.`
    }
  ]

  const etapes = [
    { 
      title: "Auto-évaluation approfondie", 
      description: "Prenez le temps de vous connaître vraiment avant de choisir",
      content: "Commencez par identifier vos forces académiques, vos passions profondes et vos valeurs personnelles. Utilisez des tests d'orientation validés et discutez avec vos professeurs de vos potentialités. Cette introspection honnête est la base solide de tout choix d'orientation réussi."
    },
    { 
      title: "Exploration concrète des filières", 
      description: "Allez au-delà des brochures pour découvrir la réalité des formations",
      content: "Participez aux journées portes ouvertes, assistez à des cours en auditeur libre et rencontrez des étudiants en 2e ou 3e année. Leur retour d'expérience est inestimable. Comparez au moins 3 établissements différents pour avoir une vision complète des options qui s'offrent à vous."
    },
    { 
      title: "Analyse réaliste des débouchés", 
      description: "Confrontez vos aspirations aux réalités du marché de l'emploi",
      content: "Renseignez-vous sur les taux d'insertion professionnelle, les salaires de début de carrière et les perspectives d'évolution. Consultez les offres d'emploi actuelles dans votre domaine visé et identifiez les compétences les plus demandées par les employeurs."
    },
    { 
      title: "Préparation méthodique des dossiers", 
      description: "Construisez un dossier de candidature qui vous représente fidèlement",
      content: "Rédigez une lettre de motivation authentique qui explique votre choix de filière. Préparez soigneusement les éventuels concours ou entretiens. Sollicitez des recommandations de professeurs qui vous connaissent bien et peuvent témoigner de votre potentiel."
    },
    { 
      title: "Intégration progressive et réussie", 
      description: "Anticipez votre arrivée à l'université pour partir du bon pied",
      content: "Préparez votre méthode de travail à l'avance, organisez votre logement et votre budget, et identifiez les ressources disponibles sur le campus. Contactez des associations étudiantes dès votre admission pour vous intégrer rapidement à la communauté universitaire."
    }
  ]

  const stats = [
    { value: "85%", label: "des étudiants changent d'avis pendant la 1ère année sans orientation solide" },
    { value: "3x", label: "plus de chances de réussite avec une orientation réfléchie et personnalisée" },
    { value: "40%", label: "des métiers de 2030 n'existent pas encore - privilégiez l'adaptabilité" },
    { value: "72%", label: "des employeurs valorisent les soft skills autant que le diplôme lui-même" }
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
                  <span className="gradient-text">Votre Avenir</span> Mérite une Orientation Réfléchie
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  Choisir sa filière universitaire est l'une des décisions les plus importantes de votre vie. Nous sommes là pour vous guider pas à pas dans ce parcours déterminant, avec bienveillance et expertise.
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
                title="Tout ce que vous devez savoir pour bien choisir" 
                description="Six aspects essentiels qui feront la différence dans votre parcours universitaire"
                className="mb-12"
              />
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {conseils.map((conseil, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="hover-lift border-gradient h-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-primary/10 p-3 rounded-xl text-primary">
                          {conseil.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl font-bold">{conseil.title}</CardTitle>
                          <CardDescription className="mt-1">{conseil.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {conseil.content}
                      </p>
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
                title="Les filières les plus porteuses au Bénin" 
                description="Découvrez les caractéristiques et perspectives des domaines d'étude les plus demandés"
                className="mb-12"
              />
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filieresDetails.map((filiere, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="hover-lift h-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary">
                          {filiere.icon}
                        </div>
                        <CardTitle className="text-lg">{filiere.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {filiere.content}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Étapes Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <SectionTitle 
                title="Votre roadmap pour une orientation réussie" 
                description="Cinq étapes essentielles pour prendre une décision éclairée et sereine"
                className="mb-12"
              />
            </ScrollReveal>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-5 gap-6">
              {etapes.map((etape, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full border">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-center mb-3">{etape.title}</h3>
                    <p className="text-sm text-muted-foreground text-center mb-3">{etape.description}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{etape.content}</p>
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
                  Ne restez pas seul face à ce choix important
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Notre équipe d'experts et notre intelligence artificielle sont là pour vous accompagner personnellement dans cette décision qui marquera votre avenir. Ensemble, trouvons la voie qui vous correspond vraiment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="premium" size="lg" className="animate-glow">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Discuter avec notre conseiller IA
                  </Button>
                  <Button variant="outline" size="lg" className="hover-glow bg-white">
                    Explorer toutes les filières en détail
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  Déjà plus de 12.000 étudiants béninois ont trouvé leur voie grâce à notre accompagnement personnalisé
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
