import { cn } from "@/lib/utils"

interface SectionTitleProps {
  title: string
  description?: string
  align?: "left" | "center" | "right"
  className?: string
}

export function SectionTitle({
  title,
  description,
  align = "center",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-12",
        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
        },
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 max-w-2xl text-muted-foreground mx-auto text-lg">
          {description}
        </p>
      )}
    </div>
  )
}