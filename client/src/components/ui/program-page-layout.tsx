import React from "react";
import { ArrowLeft, Clock, MapPin, Users, TrendingUp, CheckCircle, Star, Quote, ExternalLink, BookOpen, Award, Target, Brain, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import { Navigation } from "./navigation";
import { Footer } from "./footer";
import { SectionTitle } from "./section-title";
import { navigationLinks } from "@/lib/navigation";
import type { ProgramDetails } from "@/data/program-details";
import { getSchoolsForProgram } from "@/data/programs";

interface ProgramPageLayoutProps {
  content: ProgramDetails;
}

export function ProgramPageLayout({ content }: ProgramPageLayoutProps) {
  const schools = getSchoolsForProgram(content.slug);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Navigation links={navigationLinks} />
      
      <main className="flex-1 pt-20 sm:pt-24 pb-8 sm:pb-12 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Navigation de retour */}
          <div className="mb-6 sm:mb-8">
            <Link to="/programs">
              <Button variant="ghost" className="mb-2 sm:mb-4 hover:bg-blue-50 dark:hover:bg-blue-950 text-sm sm:text-base">
                <ArrowLeft className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Retour aux filières
              </Button>
            </Link>
          </div>

          {/* Section Hero */}
          <div className="mb-12 sm:mb-16">
            {/* Titre et sous-titre au-dessus */}
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white leading-tight">
                {content.heroSection.title}
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
                {content.heroSection.subtitle}
              </h2>
            </div>

            {/* Zone info violette */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden">
              {/* Image de fond */}
              <div className="relative min-h-[400px] sm:min-h-[500px]">
                <img 
                  src={content.heroSection.backgroundImage} 
                  alt={content.heroSection.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90" />
                
                {/* Contenu centré */}
                <div className="relative z-10 flex flex-col justify-center items-center text-center text-white p-6 sm:p-8 lg:p-12 min-h-[400px] sm:min-h-[500px]">
                  {/* Texte descriptif */}
                  <div className="max-w-3xl mb-8 sm:mb-12">
                    <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 sm:mb-10">
                      {content.heroSection.description}
                    </p>
                  </div>

                  {/* Points forts - 4 boutons */}
                  <div className="w-full max-w-4xl mb-8 sm:mb-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      {content.heroSection.highlights.map((highlight, index) => (
                        <div 
                          key={index} 
                          className="bg-white/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/30 hover:bg-white/25 transition-all duration-300"
                        >
                          <p className="text-sm sm:text-base font-semibold leading-tight">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Boutons d'action */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md">
                    <Link to={`/program-schools/${content.slug}`} className="flex-1">
                      <Button 
                        size="lg" 
                        variant="secondary" 
                        className="w-full bg-white text-blue-600 hover:bg-white/90 text-sm sm:text-base font-semibold py-3 sm:py-4"
                      >
                        <Users className="mr-2 h-5 w-5" />
                        Voir les écoles ({schools.length})
                      </Button>
                    </Link>
                    <Button 
                      size="lg" 
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base font-semibold py-3 sm:py-4"
                    >
                      <BookOpen className="mr-2 h-5 w-5" />
                      Nous contacter
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section À propos */}
          <div className="mb-16">
            <SectionTitle
              title={content.aboutSection.title}
              description="Découvrez en détail cette formation d'excellence"
            />
            
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="space-y-6">
                      {content.aboutSection.content.map((paragraph, index) => (
                        <p key={index} className="text-lg leading-relaxed text-muted-foreground">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                  <CardHeader>
                    <CardTitle className="text-blue-800 dark:text-blue-200">
                      Points clés de la formation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {content.aboutSection.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-blue-700 dark:text-blue-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Section Débouchés */}
          <div className="mb-16">
            <SectionTitle
              title={content.careersSection.title}
              description={content.careersSection.description}
            />
            
            <div className="prose prose-lg max-w-none mt-8 space-y-8">
              {content.careersSection.careers.map((career, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <TrendingUp className="h-6 w-6 text-orange-600 dark:text-orange-400 mr-3" />
                    {career.title}
                  </h3>
                  
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p className="text-lg leading-relaxed">
                      {career.description}
                    </p>
                    
                    <p className="leading-relaxed">
                      <span className="font-semibold text-green-700 dark:text-green-400">En termes de rémunération</span>, 
                      cette profession offre des salaires compétitifs allant de {career.salary}. 
                      Les revenus évoluent généralement en fonction de l'expérience acquise et de la spécialisation choisie.
                    </p>
                    
                    <p className="leading-relaxed">
                      <span className="font-semibold text-blue-700 dark:text-blue-400">Concernant les perspectives d'évolution</span>, 
                      {career.growth}. Cette progression permet d'accéder à des postes à responsabilités et d'élargir 
                      son champ d'expertise au fil des années.
                    </p>
                    
                    <p className="leading-relaxed">
                      <span className="font-semibold text-purple-700 dark:text-purple-400">Les compétences essentielles</span> 
                      pour réussir dans ce domaine incluent notamment : {career.requirements.join(', ')}. 
                      Ces aptitudes sont développées progressivement au cours de la formation et perfectionnées 
                      grâce à l'expérience professionnelle.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section Études */}
          <div className="mb-16">
            <SectionTitle
              title={content.studiesSection.title}
              description={`Durée totale : ${content.studiesSection.duration}`}
            />
            
            <div className="prose prose-lg max-w-none mt-8 space-y-8">
              {content.studiesSection.levels.map((level, index) => (
                <div key={index} className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 sm:p-8 border-l-4 border-l-blue-500">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-200">{level.name}</h3>
                    <div className="flex items-center bg-blue-200 dark:bg-blue-800 rounded-full px-3 py-1">
                      <Clock className="mr-1 h-4 w-4 text-blue-700 dark:text-blue-300" />
                      <span className="text-sm font-medium text-blue-700 dark:text-blue-300">{level.duration}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-blue-800 dark:text-blue-200">
                    <p className="text-lg leading-relaxed">
                      {level.description}
                    </p>
                    
                    <p className="leading-relaxed">
                      <span className="font-semibold">Le programme pédagogique</span> de ce niveau couvre des matières 
                      fondamentales qui constituent le socle de connaissances nécessaire pour la suite du parcours. 
                      Les enseignements comprennent : {level.subjects.slice(0, 3).join(', ')}.
                    </p>
                    
                    {level.subjects.length > 3 && (
                      <p className="leading-relaxed">
                        <span className="font-semibold">Les matières complémentaires</span> incluent également : 
                        {level.subjects.slice(3).join(', ')}. Ces disciplines permettent d'acquérir une vision 
                        globale et approfondie du domaine d'études.
                      </p>
                    )}
                    
                    <p className="leading-relaxed">
                      <span className="font-semibold">L'approche pédagogique</span> combine cours théoriques, travaux dirigés 
                      et projets pratiques pour garantir une assimilation optimale des concepts enseignés. 
                      Cette méthode favorise le développement de l'autonomie et de l'esprit critique des étudiants.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section Compétences */}
          <div className="mb-16">
            <SectionTitle
              title={content.skillsSection.title}
              description="Les savoir-faire techniques et qualités humaines que vous développerez"
            />
            
            <div className="prose prose-lg max-w-none mt-8 space-y-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-6 flex items-center">
                  <Brain className="mr-3 h-6 w-6 text-blue-500" />
                  {content.skillsSection.technical.title}
                </h3>
                
                <div className="space-y-4 text-blue-800 dark:text-blue-200">
                  <p className="text-lg leading-relaxed">
                    <span className="font-semibold">Cette formation développe</span> un ensemble de compétences techniques 
                    spécialisées qui constituent le cœur de votre expertise professionnelle. 
                    {content.skillsSection.technical.skills.slice(0, 3).join(', ')} font partie des aptitudes fondamentales 
                    que vous maîtriserez progressivement.
                  </p>
                  
                  {content.skillsSection.technical.skills.length > 3 && (
                    <p className="leading-relaxed">
                      <span className="font-semibold">Votre formation technique</span> s'enrichit également de compétences 
                      avancées telles que : {content.skillsSection.technical.skills.slice(3).join(', ')}. 
                      Ces savoir-faire techniques vous permettront d'évoluer dans un environnement professionnel 
                      exigeant et en constante évolution.
                    </p>
                  )}
                  
                  <p className="leading-relaxed">
                    <span className="font-semibold">L'acquisition de ces compétences</span> se fait de manière progressive 
                    à travers des projets pratiques, des stages en entreprise et des travaux de recherche appliquée. 
                    Cette approche garantit une maîtrise opérationnelle des outils et méthodes du secteur.
                  </p>
                </div>
              </div>

              <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-pink-900 dark:text-pink-200 mb-6 flex items-center">
                  <Heart className="mr-3 h-6 w-6 text-pink-500" />
                  {content.skillsSection.soft.title}
                </h3>
                
                <div className="space-y-4 text-pink-800 dark:text-pink-200">
                  <p className="text-lg leading-relaxed">
                    <span className="font-semibold">Au-delà des aspects techniques</span>, cette formation cultive 
                    des qualités humaines essentielles pour votre réussite professionnelle. 
                    {content.skillsSection.soft.skills.slice(0, 3).join(', ')} sont des aptitudes que vous développerez 
                    tout au long de votre parcours.
                  </p>
                  
                  {content.skillsSection.soft.skills.length > 3 && (
                    <p className="leading-relaxed">
                      <span className="font-semibold">Votre développement personnel</span> inclut également : 
                      {content.skillsSection.soft.skills.slice(3).join(', ')}. 
                      Ces qualités interpersonnelles sont aujourd'hui indispensables pour s'épanouir 
                      dans le monde professionnel moderne.
                    </p>
                  )}
                  
                  <p className="leading-relaxed">
                    <span className="font-semibold">Ces compétences transversales</span> se développent naturellement 
                    à travers le travail en équipe, les présentations orales, les projets collaboratifs et 
                    les interactions avec les professionnels du secteur. Elles constituent un véritable 
                    atout différenciant sur le marché de l'emploi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section Admission */}
          <div className="mb-16">
            <SectionTitle
              title={content.admissionSection.title}
              description="Tout ce qu'il faut savoir pour intégrer cette formation"
            />
            
            <div className="prose prose-lg max-w-none mt-8 space-y-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-6">
                  Conditions d'admission et prérequis
                </h3>
                
                <div className="space-y-4 text-blue-800 dark:text-blue-200">
                  <p className="text-lg leading-relaxed">
                    <span className="font-semibold">Pour intégrer cette formation</span>, plusieurs conditions doivent être remplies. 
                    {content.admissionSection.requirements.slice(0, 2).join(' et ')} constituent les exigences de base 
                    pour postuler à ce programme d'études.
                  </p>
                  
                  {content.admissionSection.requirements.length > 2 && (
                    <p className="leading-relaxed">
                      <span className="font-semibold">Les critères complémentaires</span> incluent : 
                      {content.admissionSection.requirements.slice(2).join(', ')}. 
                      Ces éléments permettent d'évaluer votre motivation et votre aptitude à suivre 
                      cette formation avec succès.
                    </p>
                  )}
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-green-900 dark:text-green-200 mb-6">
                  Démarches et processus de candidature
                </h3>
                
                <div className="space-y-4 text-green-800 dark:text-green-200">
                  <p className="text-lg leading-relaxed">
                    <span className="font-semibold">Le processus d'admission</span> se déroule en plusieurs étapes bien définies. 
                    Premièrement, {content.admissionSection.process[0]?.toLowerCase()}, puis 
                    {content.admissionSection.process[1]?.toLowerCase()}. Cette procédure garantit 
                    un traitement équitable de toutes les candidatures.
                  </p>
                  
                  {content.admissionSection.process.length > 2 && (
                    <p className="leading-relaxed">
                      <span className="font-semibold">Les étapes suivantes</span> comprennent : 
                      {content.admissionSection.process.slice(2).map(step => step.toLowerCase()).join(', ')}. 
                      Chaque étape est importante et contribue à l'évaluation globale de votre dossier 
                      de candidature.
                    </p>
                  )}
                  
                  <p className="leading-relaxed">
                    <span className="font-semibold">Il est essentiel</span> de respecter les délais indiqués 
                    et de fournir tous les documents demandés dans les formes requises. 
                    Une candidature complète et soignée augmente significativement vos chances d'admission.
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-200 mb-6">
                  Conseils pour optimiser votre candidature
                </h3>
                
                <div className="space-y-4 text-orange-800 dark:text-orange-200">
                  <p className="text-lg leading-relaxed">
                    <span className="font-semibold">Pour maximiser vos chances de réussite</span>, 
                    il est recommandé de {content.admissionSection.tips[0]?.toLowerCase()} et de 
                    {content.admissionSection.tips[1]?.toLowerCase()}. Ces démarches témoignent 
                    de votre sérieux et de votre engagement.
                  </p>
                  
                  {content.admissionSection.tips.length > 2 && (
                    <p className="leading-relaxed">
                      <span className="font-semibold">D'autres stratégies efficaces</span> incluent : 
                      {content.admissionSection.tips.slice(2).map(tip => tip.toLowerCase()).join(', ')}. 
                      Ces actions concrètes démontrent votre motivation et votre préparation à intégrer 
                      cette formation exigeante.
                    </p>
                  )}
                  
                  <p className="leading-relaxed">
                    <span className="font-semibold">N'hésitez pas</span> à contacter les équipes pédagogiques 
                    pour obtenir des informations complémentaires sur le contenu de la formation 
                    et les perspectives d'avenir qu'elle offre. Cette démarche proactive est toujours appréciée.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section Témoignages */}
          {content.testimonialsSection && (
            <div className="mb-16">
              <SectionTitle
                title={content.testimonialsSection.title}
                description="Découvrez les parcours de ceux qui ont réussi dans cette filière"
              />
              
              <div className="prose prose-lg max-w-none mt-8 space-y-8">
                {content.testimonialsSection.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 sm:p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">{testimonial.role}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.company}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 text-gray-700 dark:text-gray-300">
                      <Quote className="h-8 w-8 text-blue-500 mb-4" />
                      
                      <p className="text-lg leading-relaxed italic">
                        <span className="font-semibold">"{testimonial.name} témoigne : "</span>
                        {testimonial.quote}"
                      </p>
                      
                      <p className="leading-relaxed">
                        <span className="font-semibold">Ce témoignage illustre parfaitement</span> les opportunités 
                        qu'offre cette formation. L'expérience de {testimonial.name} démontre comment 
                        les compétences acquises durant les études se transforment en réussite professionnelle concrète. 
                        Son parcours chez {testimonial.company} est un exemple inspirant pour les futurs diplômés.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section Ressources */}
          <div className="mb-16">
            <SectionTitle
              title={content.resourcesSection.title}
              description="Liens utiles pour approfondir vos connaissances"
            />
            
            <div className="prose prose-lg max-w-none mt-8">
              <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-900/20 dark:to-cyan-900/20 rounded-lg p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Ressources complémentaires pour votre parcours
                </h3>
                
                <div className="space-y-6 text-gray-700 dark:text-gray-300">
                  <p className="text-lg leading-relaxed">
                    <span className="font-semibold">Pour enrichir votre parcours</span> et approfondir vos connaissances 
                    dans ce domaine, plusieurs ressources de qualité sont à votre disposition. Ces outils pédagogiques 
                    et informatifs vous accompagneront tout au long de votre formation et au-delà.
                  </p>
                  
                  <div className="space-y-4">
                    {content.resourcesSection.resources.map((resource, index) => (
                      <div key={index} className="bg-white/70 dark:bg-gray-800/50 rounded-lg p-4 border-l-4 border-l-blue-500">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-200 flex items-center">
                            {resource.title}
                            <ExternalLink className="ml-2 h-4 w-4 text-blue-600" />
                          </h4>
                        </div>
                        
                        <p className="leading-relaxed mb-3">
                          <span className="font-semibold">Cette ressource</span> vous permettra de {resource.description.toLowerCase()}. 
                          Elle constitue un complément précieux à votre formation et vous aidera à 
                          développer une expertise approfondie dans le domaine.
                        </p>
                        
                        <div className="mt-4">
                          <a 
                            href={resource.link} 
                            target={resource.link.startsWith('http') ? '_blank' : '_self'}
                            rel={resource.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                          >
                            Accéder à la ressource
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <p className="leading-relaxed">
                    <span className="font-semibold">N'hésitez pas à consulter régulièrement</span> ces ressources 
                    tout au long de votre parcours. Elles sont régulièrement mises à jour et constituent 
                    une source d'information fiable pour rester à la pointe des évolutions du secteur.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action final */}
          <Card className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Prêt à commencer votre parcours ?
              </h2>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
                Découvrez où vous pouvez suivre cette formation et lancez-vous dans cette aventure académique passionnante.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Link to={`/program-schools/${content.slug}`} className="w-full sm:w-auto">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-white/90 text-sm sm:text-base">
                    <Users className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Voir les écoles
                  </Button>
                </Link>
                <Link to="/conseils" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 text-sm sm:text-base">
                    <BookOpen className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Conseils d'orientation
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}