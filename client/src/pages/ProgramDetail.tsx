import { useParams, Navigate } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { navigationLinks } from "@/lib/navigation";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowLeft, 
  GraduationCap, 
  MapPin, 
  Clock, 
  BookOpen, 
  Briefcase, 
  Star, 
  Users, 
  Award,
  Target,
  CheckCircle,
  TrendingUp,
  Brain,
  Heart,
  Quote
} from "lucide-react";
import { Link } from "react-router-dom";
import { getProgramBySlug, getSchoolsForProgram } from "@/data/programs";
// import { Helmet } from "react-helmet-async"; // Temporarily disabled

export default function ProgramDetail() {
  const { slug } = useParams();
  
  if (!slug) {
    return <Navigate to="/programs" replace />;
  }

  const program = getProgramBySlug(slug);
  const schools = getSchoolsForProgram(slug);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

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

            {/* En-tête Hero avec image */}
            <div className="mb-16 relative">
              <div className="aspect-[3/1] w-full overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 relative">
                <img 
                  src={program.image} 
                  alt={program.name}
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80" />
                <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
                  <div className="max-w-4xl">
                    <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        {program.category}
                      </Badge>
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        <Clock className="mr-1 h-3 w-3" />
                        {program.duration}
                      </Badge>
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        <MapPin className="mr-1 h-3 w-3" />
                        {schools.length} école{schools.length > 1 ? 's' : ''}
                      </Badge>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                      {program.name}
                    </h1>
                    
                    <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
                      {program.description}
                    </p>

                    <div className="flex gap-4 justify-center flex-wrap">
                      <Link to={`/program-schools/${program.slug}`}>
                        <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-white/90">
                          <GraduationCap className="mr-2 h-5 w-5" />
                          Voir les écoles
                        </Button>
                      </Link>
                      <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                        <Briefcase className="mr-2 h-5 w-5" />
                        Nous contacter
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description détaillée */}
            <div className="mb-16">
              <SectionTitle
                title="À propos de cette filière"
                description="Découvrez en détail ce que couvre cette formation"
              />
              
              <Card className="mt-8">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {program.detailedDescription}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Informations clés */}
            <div className="mb-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="h-8 w-8 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Durée</h3>
                  <p className="text-muted-foreground">{program.duration}</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="h-8 w-8 text-green-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Niveaux</h3>
                  <p className="text-muted-foreground">{program.level}</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-purple-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Écoles</h3>
                  <p className="text-muted-foreground">{schools.length} établissement{schools.length > 1 ? 's' : ''}</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <TrendingUp className="h-8 w-8 text-orange-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Débouchés</h3>
                  <p className="text-muted-foreground">{program.careers.length} métiers</p>
                </CardContent>
              </Card>
            </div>

            {/* Section "On devient quoi ?" */}
            <div className="mb-16">
              <SectionTitle
                title="On devient quoi ?"
                description="Les métiers et carrières possibles après cette formation"
              />
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8">
                {program.careers.map((career, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-900/30 mr-3 group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50 transition-colors">
                          <Briefcase className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                        </div>
                        <h3 className="font-semibold text-sm">{career}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Métier d'avenir dans le secteur {program.category.toLowerCase()}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {program.salary && (
                <Card className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800 dark:text-green-200">
                      <TrendingUp className="mr-2 h-5 w-5" />
                      Rémunération indicative
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <p className="text-sm text-green-600 dark:text-green-400 font-medium">Débutant</p>
                        <p className="text-lg font-bold text-green-800 dark:text-green-200">{program.salary.entry}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-green-600 dark:text-green-400 font-medium">Expérimenté</p>
                        <p className="text-lg font-bold text-green-800 dark:text-green-200">{program.salary.average}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-green-600 dark:text-green-400 font-medium">Senior</p>
                        <p className="text-lg font-bold text-green-800 dark:text-green-200">{program.salary.senior}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Matières principales */}
            <div className="mb-16">
              <SectionTitle
                title="Matières principales étudiées"
                description="Le programme d'études détaillé de cette filière"
              />
              
              <Card className="mt-8">
                <CardContent className="p-8">
                  <div className="grid gap-4 md:grid-cols-2">
                    {program.subjects.map((subject, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <span className="text-sm">{subject}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Compétences développées */}
            <div className="mb-16">
              <SectionTitle
                title="Compétences développées"
                description="Les savoir-faire techniques et qualités humaines acquises"
              />
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Brain className="mr-2 h-5 w-5 text-blue-500" />
                      Compétences techniques
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {program.skills.hard.map((skill, index) => (
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
                      Qualités humaines
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {program.skills.soft.map((skill, index) => (
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

            {/* Diplômes obtenus */}
            <div className="mb-16">
              <SectionTitle
                title="Diplômes délivrés"
                description="Les certifications et diplômes que vous pouvez obtenir"
              />
              
              <div className="grid gap-4 md:grid-cols-3 mt-8">
                {program.degrees.map((degree, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <Award className="h-8 w-8 text-yellow-500 mx-auto mb-4" />
                      <h3 className="font-semibold text-sm">{degree}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Conditions d'accès */}
            <div className="mb-16">
              <SectionTitle
                title="Durée des études et conditions d'accès"
                description="Ce qu'il faut savoir pour intégrer cette formation"
              />
              
              <Card className="mt-8 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                <CardContent className="p-8">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="font-semibold mb-4 flex items-center text-blue-800 dark:text-blue-200">
                        <Clock className="mr-2 h-5 w-5" />
                        Durée des études
                      </h3>
                      <p className="text-lg font-medium text-blue-700 dark:text-blue-300">{program.duration}</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
                        Formation progressive du niveau Licence au Doctorat
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-4 flex items-center text-blue-800 dark:text-blue-200">
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Conditions d'accès
                      </h3>
                      <ul className="space-y-2">
                        {program.admissionRequirements.map((requirement, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                            <span className="text-sm text-blue-700 dark:text-blue-300">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Témoignages */}
            {program.testimonials && program.testimonials.length > 0 && (
              <div className="mb-16">
                <SectionTitle
                  title="Témoignages d'anciens étudiants"
                  description="Découvrez les parcours de ceux qui ont réussi dans cette filière"
                />
                
                <div className="grid gap-8 md:grid-cols-2 mt-8">
                  {program.testimonials.map((testimonial, index) => (
                    <Card key={index} className="relative">
                      <CardContent className="p-8">
                        <Quote className="h-8 w-8 text-blue-500 mb-4" />
                        <blockquote className="text-muted-foreground mb-6 italic">
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

            {/* Écoles recommandées */}
            <div className="mb-16">
              <SectionTitle
                title="Où étudier cette filière ?"
                description={`${schools.length} établissement${schools.length > 1 ? 's' : ''} propose${schools.length > 1 ? 'nt' : ''} cette formation au Bénin`}
              />
              
              {schools.length === 0 ? (
                <Card className="mt-8 text-center">
                  <CardContent className="p-12">
                    <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
                    <h3 className="text-xl font-semibold mb-4">Aucune école répertoriée</h3>
                    <p className="text-muted-foreground mb-6">
                      Cette formation pourrait être disponible dans d'autres établissements non répertoriés dans notre base de données.
                    </p>
                    <Link to="/programs">
                      <Button>Voir d'autres filières</Button>
                    </Link>
                  </CardContent>
                </Card>
              ) : (
                <div className="mt-8">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {schools.slice(0, 6).map((school) => (
                      <Card key={school.id} className="hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <h3 className="font-semibold mb-2 text-lg">{school.name}</h3>
                          <p className="text-sm text-muted-foreground mb-3 flex items-center">
                            <MapPin className="mr-1 h-3 w-3" />
                            {school.location}
                          </p>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                            {school.description}
                          </p>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="flex-1">
                              <Users className="mr-1 h-3 w-3" />
                              En savoir plus
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  {schools.length > 6 && (
                    <div className="text-center mt-8">
                      <Link to={`/program-schools/${program.slug}`}>
                        <Button variant="outline" size="lg">
                          <GraduationCap className="mr-2 h-5 w-5" />
                          Voir toutes les écoles ({schools.length})
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              )}
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
                  <Link to={`/program-schools/${program.slug}`}>
                    <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-white/90">
                      <GraduationCap className="mr-2 h-5 w-5" />
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