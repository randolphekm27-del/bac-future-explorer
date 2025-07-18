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
        "group p-8 rounded-2xl bg-card border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover-lift relative overflow-hidden cursor-pointer",
        href && "hover:border-primary/50",
        className
      )}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">{description}</p>
        
        {/* Arrow that appears on hover */}
        <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
          <span className="text-sm font-medium mr-2">En savoir plus</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </CardComponent>
  )
}