import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href?: string
  className?: string
}

export function FeatureCard({
  title,
  description,
  icon,
  href,
  className,
}: FeatureCardProps) {
  const CardComponent = href ? Link : "div"

  return (
    <CardComponent
      to={href || ""}
      className={cn(
        "relative group rounded-lg border bg-background p-6 hover:border-primary/50 transition-colors",
        href && "hover:shadow-md cursor-pointer",
        className
      )}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardComponent>
  )
}