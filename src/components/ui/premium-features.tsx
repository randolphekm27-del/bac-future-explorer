import React from "react"
import { Sparkles, Zap, Shield, Globe } from "lucide-react"
import { cn } from "@/lib/utils"

interface PremiumFeatureProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
  style?: React.CSSProperties
}

const PremiumFeature = ({ icon, title, description, className, style }: PremiumFeatureProps) => (
  <div className={cn("glass-card p-6 rounded-2xl border-gradient hover-lift group", className)} style={style}>
    <div className="gradient-primary p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-lg font-bold mb-2 gradient-text">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </div>
)

export function PremiumFeatures() {
  const features = [
    {
      icon: <Sparkles className="h-6 w-6 text-white" />,
      title: "IA Avancée",
      description: "Recommandations personnalisées basées sur vos intérêts et compétences"
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Mise à jour temps réel",
      description: "Informations actualisées en continu sur les universités et formations"
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Données fiables",
      description: "Informations vérifiées et validées par nos experts en éducation"
    },
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      title: "Réseau étendu",
      description: "Partenariats avec toutes les grandes universités du Bénin"
    }
  ]

  return (
    <section className="py-20 gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Une plateforme <span className="gradient-text">premium</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les fonctionnalités avancées qui font de notre plateforme 
            l'outil de référence pour l'orientation post-bac au Bénin
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <PremiumFeature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </section>
  )
}