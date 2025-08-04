import { useParams, Navigate, Link } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { navigationLinks } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Download, Share2 } from "lucide-react";
import { getUniversityBySlug } from "@/data/universities";
import { useState } from "react";

export default function UniversityGallery() {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  if (!slug) {
    return <Navigate to="/universities" replace />;
  }

  const university = getUniversityBySlug(slug);

  if (!university || !university.gallery || !university.gallery.images || university.gallery.images.length === 0) {
    return <Navigate to={`/universities/${slug}`} replace />;
  }

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleShareGallery = async () => {
    try {
      await navigator.share({
        title: `Galerie de ${university.name}`,
        text: `Découvrez les images de ${university.name}`,
        url: window.location.href
      });
    } catch (error) {
      // Fallback pour les navigateurs qui ne supportent pas Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Lien copié dans le presse-papiers !');
    }
  };

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Navigation links={navigationLinks} />

      <main className="flex-1 pt-24 pb-12 w-full">
        <div className="container mx-auto px-4 max-w-full">
          {/* Navigation de retour */}
          <div className="mb-8">
            <Link to={`/universities/${slug}`}>
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour à l'université
              </Button>
            </Link>
          </div>

          {/* En-tête de la galerie */}
          <div className="mb-12 text-center w-full">
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
                Galerie de {university.name}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6 break-words">
                Découvrez l'université en images : campus, installations, vie étudiante et plus encore.
              </p>

              {/* Actions */}
              <div className="flex justify-center gap-4 mb-8">
                <Button variant="outline" onClick={handleShareGallery}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Partager
                </Button>
              </div>

              {/* Statistiques */}
              <div className="text-center p-4 rounded-lg bg-secondary/30">
                <div className="font-semibold text-lg">{university.gallery.images.length}</div>
                <div className="text-sm text-muted-foreground">
                  {university.gallery.images.length > 1 ? 'Images' : 'Image'}
                </div>
              </div>
            </div>
          </div>

          {/* Galerie d'images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {university.gallery.images.map((imageUrl: string, index: number) => (
              <div
                key={index}
                className="group aspect-square overflow-hidden rounded-lg bg-muted cursor-pointer hover:shadow-lg transition-all duration-300 relative"
                onClick={() => handleImageClick(imageUrl)}
              >
                <img
                  src={imageUrl}
                  alt={`Image ${index + 1} de ${university.name}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Message si pas d'images */}
          {university.gallery.images.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Aucune image disponible pour cette université.
              </p>
              <Link to={`/universities/${slug}`}>
                <Button className="mt-4">
                  Retour aux détails
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      {/* Modal pour affichage en grand */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={handleCloseModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Image en grand"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <Button
              variant="secondary"
              size="sm"
              className="absolute top-4 right-4"
              onClick={handleCloseModal}
            >
              ✕
            </Button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}