import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from './button';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: "Marie Dupont",
    role: "Étudiante en Médecine",
    content: "Grâce à Après mon Bac, j'ai trouvé ma voie en médecine. Les conseils d'orientation ont été précieux !",
    rating: 5,
    avatar: "👩‍⚕️"
  },
  {
    id: 2,
    name: "Thomas Martin",
    role: "Élève ingénieur",
    content: "Les stages proposés m'ont permis de découvrir le monde de l'ingénierie. Une expérience formidable !",
    rating: 5,
    avatar: "👨‍💻"
  },
  {
    id: 3,
    name: "Sarah Cohen",
    role: "Étudiante en Commerce",
    content: "La plateforme m'a aidée à choisir mon école de commerce. Interface intuitive et conseils pertinents.",
    rating: 5,
    avatar: "👩‍💼"
  },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="rounded-2xl bg-card border shadow-lg">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 p-8">
              <div className="text-center">
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-xl italic text-muted-foreground mb-6">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <div className="font-semibold text-lg">{testimonial.name}</div>
                  <div className="text-primary">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background shadow-lg opacity-100"
        onClick={goToPrevious}
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background shadow-lg opacity-100"
        onClick={goToNext}
      >
        <ChevronRight className="w-5 h-5" />
      </Button>
      
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentIndex ? "bg-primary scale-125" : "bg-muted-foreground/30"
            )}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}