import { useParams, Navigate } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { navigationLinks } from "@/lib/navigation";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { ArrowLeft, GraduationCap, MapPin, Users, Briefcase, Clock, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { getProgramBySlug, getSchoolsForProgram } from "@/data/programs";

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
        <div className="container mx-auto px-4 max-w-full">
          {/* Navigation de retour */}
          <div className="mb-8">
            <Link to="/programs">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux filières
              </Button>
            </Link>
          </div>

          {/* En-tête de la filière */}
          <div className="mb-12 text-center w-full">
            <div className="max-w-4xl mx-auto w-full">
              <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
                <span className="text-sm px-4 py-2 rounded-full bg-accent text-primary font-medium">
                  {program.category}
                </span>
                <span className="text-sm px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-medium">
                  <Clock className="mr-1 h-3 w-3 inline" />
                  {program.duration || "3-5 ans"}
                </span>
                <span className="text-sm px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
                  <MapPin className="mr-1 h-3 w-3 inline" />
                  {schools.length} école{schools.length > 1 ? 's' : ''}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
                {program.name}
              </h1>
              
              {program.description && (
                <p className="text-lg md:text-xl text-muted-foreground mb-8 break-words leading-relaxed">
                  {program.description}
                </p>
              )}

              <div className="flex gap-4 justify-center flex-wrap">
                <Link to={`/program-schools/${program.slug}`}>
                  <Button size="lg" variant="outline" className="px-8">
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Où suivre cette filière
                  </Button>
                </Link>
                <Button size="lg" className="px-8 bg-orange-500 hover:bg-orange-600">
                  <Briefcase className="mr-2 h-5 w-5" />
                  Nous contacter
                </Button>
              </div>
            </div>
          </div>

          {/* Section des débouchés professionnels */}
          <div className="mb-16">
            <SectionTitle
              title="Débouchés professionnels"
              description="Découvrez les carrières possibles après cette formation"
            />
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              {program.careers.map((career, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-800 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-full bg-orange-500 text-white mr-3">
                      <Briefcase className="h-4 w-4" />
                    </div>
                    <h3 className="font-semibold text-orange-900 dark:text-orange-100">
                      {career}
                    </h3>
                  </div>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    Une carrière prometteuse dans le domaine de {program.category.toLowerCase()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section des écoles */}
          <div className="mb-16">
            <SectionTitle
              title="Écoles recommandées"
              description={`${schools.length} école${schools.length > 1 ? 's' : ''} propose${schools.length > 1 ? 'nt' : ''} cette formation au Bénin`}
            />
            
            {schools.length === 0 ? (
              <div className="text-center py-12">
                <div className="p-6 rounded-lg bg-secondary/30">
                  <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">
                    Aucune école ne propose actuellement cette filière dans notre base de données.
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Cette formation pourrait être disponible dans d'autres établissements non répertoriés.
                  </p>
                  <Link to="/programs">
                    <Button>
                      Voir d'autres filières
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="mt-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {schools.slice(0, 6).map((school) => (
                    <div
                      key={school.id}
                      className="p-6 rounded-lg border bg-card hover:shadow-lg transition-all duration-300"
                    >
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
                          En savoir plus
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                {schools.length > 6 && (
                  <div className="text-center mt-8">
                    <Link to={`/program-schools/${program.slug}`}>
                      <Button variant="outline">
                        Voir toutes les écoles ({schools.length})
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Call to action */}
          <div className="text-center py-12 px-6 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt à commencer votre parcours ?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Découvrez où vous pouvez suivre cette formation et commencez votre aventure académique dès maintenant.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to={`/program-schools/${program.slug}`}>
                <Button size="lg">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Voir les écoles
                </Button>
              </Link>
              <Link to="/conseils">
                <Button size="lg" variant="outline">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Conseils d'orientation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}