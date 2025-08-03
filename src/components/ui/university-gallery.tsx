import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Play, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

interface UniversityGalleryProps {
  gallery: {
    images: string[];
    videos?: string[];
    description?: string;
  };
  universityName: string;
}

export function UniversityGallery({ gallery, universityName }: UniversityGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const allMedia = [...gallery.images, ...(gallery.videos || [])];

  const openLightbox = (image: string) => {
    setSelectedImage(image);
    setCurrentIndex(allMedia.indexOf(image));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentIndex((prev) => (prev - 1 + allMedia.length) % allMedia.length);
    } else {
      setCurrentIndex((prev) => (prev + 1) % allMedia.length);
    }
    setSelectedImage(allMedia[currentIndex]);
  };

  const isVideo = (url: string) => {
    return url.includes('video') || url.endsWith('.mp4') || url.endsWith('.webm');
  };

  if (!gallery.images.length && !gallery.videos?.length) {
    return null;
  }

  return (
    <div className="w-full">
      {/* En-tête de la galerie */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold gradient-text mb-4">Galerie</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary via-primary/60 to-primary/20 mx-auto mb-4 rounded-full"></div>
        {gallery.description && (
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {gallery.description}
          </p>
        )}
      </div>

      {/* Grille de la galerie */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        {gallery.images.slice(0, 8).map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl aspect-square bg-muted cursor-pointer hover-scale"
            onClick={() => openLightbox(image)}
          >
            <img
              src={image}
              alt={`${universityName} - Image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Effet de brillance */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
            </div>
          </div>
        ))}

        {/* Vidéos si disponibles */}
        {gallery.videos?.slice(0, 2).map((video, index) => (
          <div
            key={`video-${index}`}
            className="group relative overflow-hidden rounded-xl aspect-square bg-muted cursor-pointer hover-scale"
            onClick={() => openLightbox(video)}
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
              <Play className="w-16 h-16 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-xs text-primary font-medium bg-white/90 rounded-full px-3 py-1 text-center">
                Vidéo de présentation
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bouton voir plus si il y a plus de 8 images */}
      {gallery.images.length > 8 && (
        <div className="text-center">
          <button 
            onClick={() => openLightbox(gallery.images[8])}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full hover:from-primary/90 hover:to-primary/70 transition-all duration-300 hover-scale font-medium"
          >
            Voir toutes les photos ({gallery.images.length})
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-full w-full h-full flex items-center justify-center">
            {/* Image/Vidéo */}
            <div className="relative max-w-full max-h-full">
              {isVideo(selectedImage) ? (
                <div className="aspect-video w-full max-w-4xl bg-black rounded-lg flex items-center justify-center">
                  <Play className="w-20 h-20 text-white" />
                  <span className="ml-4 text-white text-lg">Vidéo de présentation</span>
                </div>
              ) : (
                <img
                  src={allMedia[currentIndex]}
                  alt={`${universityName} - Image ${currentIndex + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
              )}
            </div>

            {/* Contrôles de navigation */}
            {allMedia.length > 1 && (
              <>
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
                  aria-label="Image précédente"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
                  aria-label="Image suivante"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Bouton fermer */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Indicateur de position */}
            {allMedia.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
                {currentIndex + 1} / {allMedia.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}