import { useParams, Navigate } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { navigationLinks } from "@/lib/navigation";
import { SectionTitle } from "@/components/ui/section-title";
import { SchoolCard } from "@/components/ui/school-card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, GraduationCap, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { getProgramBySlug, getSchoolsForProgram } from "@/data/programs";

export default function ProgramSchools() {
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
            <div className="max-w-3xl mx-auto w-full">
              <div className="flex items-center justify-center gap-4 mb-4 flex-wrap">
                <span className="text-sm px-3 py-1 rounded-full bg-accent text-primary">
                  {program.category}
                </span>
                <span className="text-sm px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                  {program.duration}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Où étudier {program.name} ?
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6 break-words">
                {program.description}
              </p>

              {/* Débouchés */}
              <div className="mb-8 p-6 rounded-lg bg-secondary/30 w-full">
                <h3 className="text-lg font-semibold mb-4 flex items-center justify-center">
                  <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                  Débouchés professionnels
                </h3>
                <div className="flex flex-wrap gap-2 justify-center w-full">
                  {program.careers.map((career, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary break-words"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </div>

              {/* Statistiques rapides */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full">
                <div className="flex items-center justify-center gap-2 p-4 rounded-lg bg-secondary/50">
                  <Users className="h-5 w-5 text-primary" />
                  <div className="text-center">
                    <div className="font-semibold">{schools.length}</div>
                    <div className="text-sm text-muted-foreground">Écoles</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 rounded-lg bg-secondary/50">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div className="text-center">
                    <div className="font-semibold">
                      {new Set(schools.map(s => s.university.location)).size}
                    </div>
                    <div className="text-sm text-muted-foreground">Villes</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 rounded-lg bg-secondary/50">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <div className="text-center">
                    <div className="font-semibold">{program.duration}</div>
                    <div className="text-sm text-muted-foreground">Durée</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Liste des écoles */}
          <SectionTitle
            title="Écoles proposant cette filière"
            description="Toutes les écoles où vous pouvez suivre cette formation au Bénin."
          />

          {schools.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Aucune école ne propose actuellement cette filière dans notre base de données.
              </p>
              <Link to="/programs">
                <Button className="mt-4">
                  Voir d'autres filières
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 w-full">
              {schools.map(({ school, university }) => (
                <SchoolCard
                  key={school.id}
                  school={school}
                  university={university}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}