import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Menu, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

interface NavigationProps {
  links: {
    title: string
    href: string
    icon?: React.ReactNode
  }[]
}

export function Navigation({ links }: NavigationProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const location = useLocation()

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('nav')
      if (nav && !nav.contains(event.target as Node) && isOpen) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <nav className="fixed top-0 w-full glass-nav z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/d0cefdb1-2000-4d82-9b38-0fa02b5f5d78.png" 
              alt="Après mon Bac Logo" 
              className="h-10 w-10"
            />
            <span className="text-xl font-bold gradient-text text-shadow">
              Après mon Bac
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-6">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "flex items-center space-x-1 lg:space-x-2 text-xs lg:text-sm font-semibold transition-all duration-300 px-2 lg:px-4 py-2 rounded-xl hover:scale-105 focus-visible",
                  location.pathname === link.href 
                    ? "gradient-primary text-primary-foreground shadow-md" 
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                )}
              >
                {link.icon}
                <span className="hidden lg:block">{link.title}</span>
                <span className="lg:hidden">{link.title.slice(0, 8)}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-accent"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in border-t bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-2 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "flex items-center space-x-3 text-sm font-medium transition-all duration-200 px-4 py-3 rounded-md mx-2 hover:bg-accent",
                    location.pathname === link.href 
                      ? "text-primary bg-accent border-l-4 border-primary" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  <span>{link.title}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}