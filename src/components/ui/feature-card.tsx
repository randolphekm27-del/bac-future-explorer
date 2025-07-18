import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href?: string
  className?: string
}

export function FeatureCard({ icon, title, description, href, className }: FeatureCardProps) {
  const CardComponent = href ? Link : "div"

  return (
    <CardComponent
      to={href || ""}
      className={cn(
        "p-6 rounded-lg bg-card border shadow-sm hover:shadow-md transition-all duration-200",
        href && "cursor-pointer hover:border-primary/50",
        className
      )}
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
    </CardComponent>
  )
}