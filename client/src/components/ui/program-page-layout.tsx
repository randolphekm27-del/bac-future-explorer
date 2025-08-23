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
import type { ProgramPageContent } from "@/data/program-pages";
import { getSchoolsForProgram } from "@/data/programs";

interface ProgramPageLayoutProps {
  content: ProgramPageContent;
}

export function ProgramPageLayout({ content }: ProgramPageLayoutProps) {
  const schools = getSchoolsForProgram(content.slug);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Navigation links={navigationLinks} />
      
      <main className="flex-1 pt-24 pb-12 w-full">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Navigation de retour */}
          <div className="mb-8">
            <Link to="/programs">
              <Button variant="ghost" className="mb-4 hover:bg-blue-50 dark:hover:bg-blue-950">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux filières
              </Button>
            </Link>
          </div>

          {/* Section Hero */}
          <div className="mb-16 relative">
            <div className="aspect-[3/1] w-full overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 relative">
              <img 
                src={content.heroSection.backgroundImage} 
                alt={content.heroSection.title}
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80" />
              <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
                <div className="max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    {content.heroSection.title}
                  </h1>
                  
                  <h2 className="text-2xl md:text-3xl mb-6 text-white/90">
                    {content.heroSection.subtitle}
                  </h2>
                  
                  <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
                    {content.heroSection.description}
                  </p>

                  {/* Points forts */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {content.heroSection.highlights.map((highlight, index) => (
                      <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                        <p className="text-sm font-medium">{highlight}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4 justify-center flex-wrap">
                    <Link to={`/program-schools/${content.slug}`}>
                      <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-white/90">
                        <Users className="mr-2 h-5 w-5" />
                        Voir les écoles ({schools.length})
                      </Button>
                    </Link>
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
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
            
            <div className="grid lg:grid-cols-3 gap-8 mt-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-8">
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
            
            <div className="grid gap-8 md:grid-cols-2 mt-8">
              {content.careersSection.careers.map((career, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-900/30 mr-3 group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50 transition-colors">
                        <TrendingUp className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                      </div>
                      {career.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {career.description}
                    </p>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <p className="text-sm font-medium text-green-800 dark:text-green-200 mb-1">
                          💰 Rémunération
                        </p>
                        <p className="text-sm text-green-700 dark:text-green-300">{career.salary}</p>
                      </div>
                      
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
                          🎯 Évolution
                        </p>
                        <p className="text-sm text-blue-700 dark:text-blue-300">{career.growth}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium mb-2">Compétences requises :</p>
                      <div className="flex flex-wrap gap-2">
                        {career.requirements.map((req, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Section Études */}
          <div className="mb-16">
            <SectionTitle
              title={content.studiesSection.title}
              description={`Durée totale : ${content.studiesSection.duration}`}
            />
            
            <div className="space-y-6 mt-8">
              {content.studiesSection.levels.map((level, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{level.name}</span>
                      <Badge variant="secondary">
                        <Clock className="mr-1 h-3 w-3" />
                        {level.duration}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{level.description}</p>
                    <div>
                      <h4 className="font-semibold mb-3">Matières principales :</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {level.subjects.map((subject, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                            <span className="text-sm">{subject}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Section Compétences */}
          <div className="mb-16">
            <SectionTitle
              title={content.skillsSection.title}
              description="Les savoir-faire techniques et qualités humaines que vous développerez"
            />
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="mr-2 h-5 w-5 text-blue-500" />
                    {content.skillsSection.technical.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {content.skillsSection.technical.skills.map((skill, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Target className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="mr-2 h-5 w-5 text-pink-500" />
                    {content.skillsSection.soft.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {content.skillsSection.soft.skills.map((skill, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Star className="h-4 w-4 text-pink-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Section Admission */}
          <div className="mb-16">
            <SectionTitle
              title={content.admissionSection.title}
              description="Tout ce qu'il faut savoir pour intégrer cette formation"
            />
            
            <div className="grid lg:grid-cols-3 gap-8 mt-8">
              <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="text-blue-800 dark:text-blue-200">
                    Prérequis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {content.admissionSection.requirements.map((req, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span className="text-sm text-blue-700 dark:text-blue-300">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="text-green-800 dark:text-green-200">
                    Processus d'admission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2">
                    {content.admissionSection.process.map((step, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-sm text-green-700 dark:text-green-300">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              <Card className="bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
                <CardHeader>
                  <CardTitle className="text-orange-800 dark:text-orange-200">
                    Conseils pratiques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {content.admissionSection.tips.map((tip, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Star className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                        <span className="text-sm text-orange-700 dark:text-orange-300">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Section Témoignages */}
          {content.testimonialsSection && (
            <div className="mb-16">
              <SectionTitle
                title={content.testimonialsSection.title}
                description="Découvrez les parcours de ceux qui ont réussi dans cette filière"
              />
              
              <div className="grid gap-8 md:grid-cols-2 mt-8">
                {content.testimonialsSection.testimonials.map((testimonial, index) => (
                  <Card key={index} className="relative">
                    <CardContent className="p-8">
                      <Quote className="h-8 w-8 text-blue-500 mb-4" />
                      <blockquote className="text-muted-foreground mb-6 italic leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              {content.resourcesSection.resources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                        {resource.title}
                      </h3>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-blue-600 transition-colors" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    <Button size="sm" variant="outline" className="w-full" asChild>
                      <a 
                        href={resource.link} 
                        target={resource.link.startsWith('http') ? '_blank' : '_self'}
                        rel={resource.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        Accéder
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to action final */}
          <Card className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">
                Prêt à commencer votre parcours ?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Découvrez où vous pouvez suivre cette formation et lancez-vous dans cette aventure académique passionnante.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to={`/program-schools/${content.slug}`}>
                  <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-white/90">
                    <Users className="mr-2 h-5 w-5" />
                    Voir les écoles
                  </Button>
                </Link>
                <Link to="/conseils">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <BookOpen className="mr-2 h-5 w-5" />
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