import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from './button';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: "Adjara Kossou",
    role: "Étudiante en Médecine, UAC",
    university: "Université d'Abomey-Calavi",
    content: "Après mon Bac m'a permis de découvrir toutes les options disponibles en médecine au Bénin. J'ai pu choisir la bonne université et me préparer efficacement aux concours d'entrée. Aujourd'hui, je suis en 3ème année et je ne regrette pas mon choix.",
    rating: 5,
    avatar: "👩‍⚕️",
    year: "Promotion 2022"
  },
  {
    id: 2,
    name: "Rodrigue Agbossoukpoé",
    role: "Ingénieur Informatique, EPAC",
    university: "École Polytechnique d'Abomey-Calavi",
    content: "Grâce à la plateforme, j'ai découvert les filières d'ingénierie disponibles au Bénin et leurs débouchés. Les informations détaillées sur chaque école m'ont aidé à faire le bon choix. Maintenant diplômé, je travaille dans une entreprise tech à Cotonou.",
    rating: 5,
    avatar: "👨‍💻",
    year: "Promotion 2021"
  },
  {
    id: 3,
    name: "Fatouma Alassane",
    role: "Consultante en Gestion, CESAG",
    university: "Centre Africain d'Études Supérieures en Gestion",
    content: "L'orientation personnalisée m'a orientée vers les sciences de gestion. Les conseils sur les universités partenaires et les programmes d'échange ont été déterminants dans ma réussite. Je recommande vivement cette plateforme aux futurs bacheliers.",
    rating: 5,
    avatar: "👩‍💼",
    year: "Promotion 2020"
  },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="rounded-3xl bg-gradient-to-br from-white via-blue-50/30 to-orange-50/30 border border-gray-200/50 shadow-2xl backdrop-blur-sm">
        <div className="relative overflow-hidden rounded-3xl">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`transition-all duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100 transform translate-x-0' : 'opacity-0 absolute inset-0 transform translate-x-4'
              }`}
            >
              <div className="w-full p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                  {/* Avatar and Rating */}
                  <div className="flex-shrink-0 text-center lg:text-left">
                    <div className="text-6xl lg:text-7xl mb-4 drop-shadow-lg">{testimonial.avatar}</div>
                    <div className="flex justify-center lg:justify-start mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                      {testimonial.year}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <blockquote className="text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed font-medium">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="space-y-2">
                      <div className="font-bold text-xl text-gray-900">{testimonial.name}</div>
                      <div className="text-primary font-semibold">{testimonial.role}</div>
                      <div className="text-sm text-gray-600 font-medium">{testimonial.university}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-xl border border-gray-200/50 text-gray-700 hover:text-gray-900 w-12 h-12 rounded-full backdrop-blur-sm"
        onClick={goToPrevious}
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-xl border border-gray-200/50 text-gray-700 hover:text-gray-900 w-12 h-12 rounded-full backdrop-blur-sm"
        onClick={goToNext}
      >
        <ChevronRight className="w-5 h-5" />
      </Button>
      
      <div className="flex justify-center mt-8 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-4 h-4 rounded-full transition-all duration-300 border-2",
              index === currentIndex 
                ? "bg-primary border-primary scale-110 shadow-lg" 
                : "bg-transparent border-gray-300 hover:border-primary/50 hover:scale-105"
            )}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}