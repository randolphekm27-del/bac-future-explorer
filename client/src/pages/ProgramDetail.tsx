import { useParams, Navigate } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { navigationLinks } from "@/lib/navigation";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { ArrowLeft, GraduationCap, Users, Briefcase, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { getProgramBySlug } from "@/data/programs";
import { LazyImage } from "@/components/ui/lazy-image";

export default function ProgramDetail() {
  const { slug } = useParams();
  
  if (!slug) {
    return <Navigate to="/programs" replace />;
  }

  const program = getProgramBySlug(slug);

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
              <div className="flex items-center justify-center gap-4 mb-4 flex-wrap">
                <span className="text-sm px-3 py-1 rounded-full bg-accent text-primary">
                  {program.category}
                </span>
                <span className="text-sm px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                  {program.duration}
                </span>
                <span className="text-sm px-3 py-1 rounded-full bg-orange-100 text-orange-700">
                  <Users className="inline mr-1 h-3 w-3" />
                  {program.schoolsCount} école{program.schoolsCount > 1 ? 's' : ''}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                {program.name}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                {program.description}
              </p>
            </div>
          </div>

          {/* Galerie d'images avec défilement horizontal - amélioration */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Aperçu de la formation</h2>
            <div className="relative">
              {/* Container avec scroll horizontal amélioré */}
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide gallery-scroll">
                {/* Images par défaut si pas de galerie spécifique */}
                {program.gallery?.images ? program.gallery.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="aspect-video w-80 flex-shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-orange-50 snap-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <LazyImage
                      src={image}
                      alt={`${program.name} - Image ${index + 1}`}
                      className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                    />
                  </div>
                )) : [
                  // Images par défaut basées sur la catégorie
                  program.image || "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
                  "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=800",
                  "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=800",
                  "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800"
                ].map((image, index) => (
                  <div 
                    key={index} 
                    className="aspect-video w-80 flex-shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-orange-50 snap-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <LazyImage
                      src={image}
                      alt={`${program.name} - Image ${index + 1}`}
                      className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
              
              {/* Indicateurs de défilement améliorés */}
              <div className="flex justify-center mt-4 gap-2">
                {(program.gallery?.images || [program.image, "", "", ""]).map((_, index) => (
                  <div 
                    key={index} 
                    className="w-2 h-2 rounded-full bg-primary/30 hover:bg-primary/50 transition-colors cursor-pointer"
                  />
                ))}
              </div>
            </div>
            
            {program.gallery?.description && (
              <p className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto">
                {program.gallery.description}
              </p>
            )}
          </div>

          {/* Description détaillée */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">À propos de cette filière</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {program.detailedDescription || `La filière ${program.name} est une formation complète qui prépare les étudiants aux défis professionnels de ce domaine. Cette formation combine théorie et pratique pour offrir une expertise solide et recherchée sur le marché du travail.`}
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Pourquoi choisir cette filière ?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cette formation offre de nombreux avantages : des débouchés variés, une formation pratique adaptée aux réalités du marché, et des opportunités d'évolution de carrière intéressantes. Les diplômés de cette filière sont très recherchés dans {program.category.toLowerCase()}.
              </p>
            </div>
          </div>

          {/* Débouchés professionnels - Design amélioré */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 gradient-text">Débouchés professionnels</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Découvrez les nombreuses opportunités de carrière qui s'offrent à vous après cette formation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {program.careers.map((career, index) => (
                <div 
                  key={index} 
                  className="group p-6 rounded-2xl border bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-900 dark:to-blue-950/20 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-100/20 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white mr-4">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-600 transition-colors">
                      {career}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Opportunités d'emploi dans le domaine de {career.toLowerCase()} avec des perspectives d'évolution intéressantes.
                  </p>
                  
                  <div className="flex items-center text-sm text-orange-600 font-medium">
                    <span className="mr-2">→</span>
                    Découvrir les postes
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Universités proposant cette filière */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Universités proposant cette filière</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {program.universities.map((university, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg border bg-background hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center">
                    <GraduationCap className="h-5 w-5 text-primary mr-2" />
                    <span className="font-medium">{university}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={`/program-schools/${program.slug}`}>
                <Button size="lg" className="min-w-[200px]">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Voir les écoles
                </Button>
              </Link>
              <Link to="/programs">
                <Button variant="outline" size="lg" className="min-w-[200px]">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Autres filières
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