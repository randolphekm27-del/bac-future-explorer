import { useState } from 'react';
import { CheckCircle, Circle, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './button';

const timelineSteps = [
  {
    id: 1,
    title: "Exploration",
    description: "Découvrez vos centres d'intérêt et explorez les différentes voies",
    detail: "Utilisez nos outils d'auto-évaluation pour mieux comprendre vos aspirations et talents naturels.",
    icon: "🔍"
  },
  {
    id: 2,
    title: "Orientation",
    description: "Choisissez votre filière avec l'aide de nos conseillers",
    detail: "Bénéficiez de conseils personnalisés de nos experts en orientation scolaire.",
    icon: "🎯"
  },
  {
    id: 3,
    title: "Formation",
    description: "Trouvez la formation qui vous correspond",
    detail: "Accédez à notre base de données complète d'établissements et de programmes.",
    icon: "📚"
  },
  {
    id: 4,
    title: "Expérience",
    description: "Acquérez de l'expérience grâce aux stages",
    detail: "Découvrez des opportunités de stages dans votre domaine d'intérêt.",
    icon: "💼"
  },
  {
    id: 5,
    title: "Réussite",
    description: "Atteignez vos objectifs professionnels",
    detail: "Construisez votre carrière avec confiance grâce à notre accompagnement.",
    icon: "🏆"
  }
];

export function InteractiveTimeline() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>
        
        <div className="space-y-8">
          {timelineSteps.map((step, index) => (
            <div
              key={step.id}
              className={cn(
                "relative flex items-start space-x-6 cursor-pointer transition-all duration-300",
                "hover:scale-[1.02] hover:bg-accent/5 rounded-xl p-4 -ml-4"
              )}
              onClick={() => setActiveStep(step.id)}
            >
              {/* Step circle */}
              <div className={cn(
                "relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 transition-all duration-300",
                activeStep >= step.id 
                  ? "bg-primary border-primary text-white shadow-lg shadow-primary/25" 
                  : "bg-background border-muted-foreground/30"
              )}>
                <span className="text-2xl">{step.icon}</span>
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className={cn(
                    "text-xl font-semibold transition-colors",
                    activeStep >= step.id ? "text-primary" : "text-foreground"
                  )}>
                    {step.title}
                  </h3>
                  {activeStep >= step.id && (
                    <CheckCircle className="w-5 h-5 text-primary animate-scale-in" />
                  )}
                </div>
                
                <p className="text-muted-foreground mb-3">{step.description}</p>
                
                {activeStep === step.id && (
                  <div className="animate-fade-in bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4">
                    <p className="text-sm text-foreground">{step.detail}</p>
                  </div>
                )}
                
                {activeStep === step.id && index < timelineSteps.length - 1 && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="animate-fade-in"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveStep(step.id + 1);
                    }}
                  >
                    Étape suivante
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}