import { GraduationCap, BookOpen, Briefcase, Trophy, PlayCircle, Building2, Lightbulb } from "lucide-react"
import React from "react"

export const navigationLinks = [
  {
    title: "Universités",
    href: "/universities",
    icon: React.createElement(Building2, { className: "h-4 w-4" }),
  },
  {
    title: "Filières",
    href: "/programs",
    icon: React.createElement(GraduationCap, { className: "h-4 w-4" }),
  },
  {
    title: "Stages",
    href: "/internships",
    icon: React.createElement(Briefcase, { className: "h-4 w-4" }),
  },
  {
    title: "Concours",
    href: "/competitions",
    icon: React.createElement(Trophy, { className: "h-4 w-4" }),
  },
  {
    title: "Formations",
    href: "/courses",
    icon: React.createElement(PlayCircle, { className: "h-4 w-4" }),
  },
  {
    title: "Conseils",
    href: "/conseils",
    icon: React.createElement(Lightbulb, { className: "h-4 w-4" }),
  },
]