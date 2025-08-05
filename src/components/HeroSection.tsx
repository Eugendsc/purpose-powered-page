import { ChevronDown, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  const scrollToNext = () => {
    const element = document.getElementById("servicios")
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col items-center justify-center relative px-6"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Visibilidad real,<br />
          <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            impacto consciente
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Automatiza procesos, comunica con intención y haz crecer tu marca con soluciones digitales alineadas con tus valores.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-16">
          <Button 
            onClick={scrollToContact}
            className="hero-button text-lg px-8 py-4 h-auto"
          >
            <Rocket className="mr-2 h-5 w-5" />
            Potenciar mi marca
          </Button>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Desde:</p>
            <p className="text-2xl font-bold text-primary">80€</p>
          </div>
        </div>
      </div>

      {/* Scroll Arrow */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-arrow"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="h-8 w-8 text-primary" />
      </button>
    </section>
  )
}

export default HeroSection