import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href?: string
  className?: string
  onClick?: () => void
}

export function FeatureCard({ icon, title, description, href, className, onClick }: FeatureCardProps) {
  const CardComponent = href ? Link : "div"

  return (
    <CardComponent
      to={href || ""}
      onClick={onClick}
      className={cn(
        "group glass-card rounded-3xl border-gradient shadow-2xl hover:shadow-xl transition-all duration-500 hover-lift relative overflow-hidden cursor-pointer animate-scale-in",
        href && "hover:border-primary/50",
        className
      )}
    >
      {/* Premium gradient overlay with animation */}
      <div className="absolute inset-0 gradient-hero opacity-0 group-hover:opacity-30 transition-all duration-500 pointer-events-none" />
      
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
      
      <div className="relative z-10 p-10">
        <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center text-primary-foreground mb-8 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg hover-glow">
          {icon}
        </div>
        <h3 className="text-3xl font-bold mb-6 group-hover:gradient-text transition-all duration-300 text-shadow">{title}</h3>
        <p className="text-xl text-foreground/70 leading-relaxed mb-8 font-medium">{description}</p>
        
        {/* Premium arrow with glow effect */}
        <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-20px] group-hover:translate-x-0">
          <span className="text-lg font-bold mr-3 gradient-text-accent">Découvrir</span>
          <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center group-hover:animate-bounce">
            <ArrowRight className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>
      </div>
    </CardComponent>
  )
}