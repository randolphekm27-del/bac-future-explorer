import { useParams, Navigate } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { navigationLinks } from "@/lib/navigation";
import { SectionTitle } from "@/components/ui/section-title";
import { SchoolCard } from "@/components/ui/school-card";
import { getUniversityBySlug } from "@/data/universities";
import { MapPin, Users, BookOpen } from "lucide-react";

export default function UniversityDetail() {
  const { slug } = useParams();
  
  if (!slug) {
    return <Navigate to="/universities" replace />;
  }

  const university = getUniversityBySlug(slug);

  if (!university) {
    return <Navigate to="/universities" replace />;
  }

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Navigation links={navigationLinks} />

      <main className="flex-1 pt-24 pb-12 w-full">
        <div className="container mx-auto px-4 max-w-full">
          {/* En-tête de l'université */}
          <div className="mb-12 text-center w-full">
            <div className="aspect-video w-full max-w-4xl mx-auto overflow-hidden bg-muted rounded-2xl mb-8 max-w-full">
              <img
                src={university.image}
                alt={university.name}
                className="h-full w-full object-cover max-w-full"
              />
            </div>
            
            <div className="max-w-3xl mx-auto w-full">
              <div className="flex items-center justify-center gap-4 mb-4 flex-wrap">
                <span
                  className={`text-sm px-3 py-1 rounded-full flex-shrink-0 ${
                    university.type === "Public"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-emerald-100 text-emerald-800"
                  }`}
                >
                  {university.type}
                </span>
                <span className="flex items-center text-sm text-muted-foreground flex-shrink-0">
                  <MapPin className="mr-1 h-4 w-4" />
                  {university.location}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                {university.name}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6 break-words">
                {university.description}
              </p>

              {/* Statistiques rapides */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                <div className="flex items-center justify-center gap-2 p-4 rounded-lg bg-secondary/50">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <div className="text-center">
                    <div className="font-semibold">{university.schools.length}</div>
                    <div className="text-sm text-muted-foreground">Écoles</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 rounded-lg bg-secondary/50">
                  <Users className="h-5 w-5 text-primary" />
                  <div className="text-center">
                    <div className="font-semibold">
                      {university.schools.reduce((acc, school) => acc + school.programs.length, 0)}
                    </div>
                    <div className="text-sm text-muted-foreground">Filières</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 rounded-lg bg-secondary/50">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div className="text-center">
                    <div className="font-semibold">{university.type}</div>
                    <div className="text-sm text-muted-foreground">Statut</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Liste des écoles */}
          <SectionTitle
            title="Écoles et Formations"
            description="Découvrez toutes les écoles de cette université et leurs spécialisations."
          />

          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 w-full">
            {university.schools.map((school) => (
              <SchoolCard
                key={school.id}
                school={school}
                university={university}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}