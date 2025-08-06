import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "./ThemeProvider"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false) // Close mobile menu when navigating
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/a58126d1-401f-43fa-927b-0c1c2606d245.png" 
              alt="Virenso Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection("como-funciona")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Cómo funciona
            </button>
            <button 
              onClick={() => scrollToSection("planes")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Planes
            </button>
            <button 
              onClick={() => scrollToSection("contacto")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Theme toggle and CTA */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-9 h-9"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>
            <Button 
              onClick={() => scrollToSection("contacto")}
              className="hero-button hidden md:inline-flex"
            >
              Empezar ahora
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-9 h-9"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("hero")}
                className="text-foreground hover:text-primary transition-colors text-left py-2"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection("servicios")}
                className="text-foreground hover:text-primary transition-colors text-left py-2"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection("como-funciona")}
                className="text-foreground hover:text-primary transition-colors text-left py-2"
              >
                Cómo funciona
              </button>
              <button 
                onClick={() => scrollToSection("planes")}
                className="text-foreground hover:text-primary transition-colors text-left py-2"
              >
                Planes
              </button>
              <button 
                onClick={() => scrollToSection("contacto")}
                className="text-foreground hover:text-primary transition-colors text-left py-2"
              >
                Contacto
              </button>
              <Button 
                onClick={() => scrollToSection("contacto")}
                className="hero-button w-full mt-4"
              >
                Empezar ahora
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header