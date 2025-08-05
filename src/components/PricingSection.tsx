import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const PricingSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="planes" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Elige el impulso que<br />
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              tu marca necesita
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Packs diseñados para diferentes necesidades de crecimiento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Pack Esencial */}
          <div className="pricing-card">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Pack Esencial</h3>
              <p className="text-muted-foreground mb-4">Análisis + Reels/Carruseles</p>
              <div className="text-4xl font-bold text-primary mb-2">80€</div>
              <p className="text-sm text-muted-foreground">Precio</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Auditoría digital completa</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">30 días de calendario editorial</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">5 plantillas de reels educativos</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">5 carruseles de storytelling</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Guía de implementación</span>
              </li>
            </ul>

            <Button 
              onClick={scrollToContact}
              variant="outline" 
              className="w-full"
            >
              Elegir Pack Esencial
            </Button>
          </div>

          {/* Pack Comunicación */}
          <div className="pricing-card">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Pack Comunicación</h3>
              <p className="text-muted-foreground mb-4">Análisis + Chatbot IA</p>
              <div className="text-4xl font-bold text-primary mb-2">450€</div>
              <p className="text-sm text-muted-foreground">Precio</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Auditoría digital completa</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Chatbot IA entrenado y personalizado</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Guía de implementación paso a paso</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Soporte por WhatsApp 30 días</span>
              </li>
            </ul>

            <Button 
              onClick={scrollToContact}
              variant="outline" 
              className="w-full"
            >
              Elegir Pack Comunicación
            </Button>
          </div>

          {/* Pack Completo - Popular */}
          <div className="pricing-card popular relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                <Star className="h-4 w-4 mr-1" />
                Más Popular
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Pack Completo</h3>
              <p className="text-muted-foreground mb-4">Todo incluido</p>
              <div className="text-4xl font-bold text-primary mb-2">490€</div>
              <p className="text-sm text-muted-foreground">Precio</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Auditoría digital completa</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Chatbot IA entrenado y personalizado</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">30 días de calendario editorial</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">5 plantillas de reels educativos</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">5 carruseles de storytelling</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Guía de implementación paso a paso</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Soporte por WhatsApp 30 días</span>
              </li>
            </ul>

            <Button 
              onClick={scrollToContact}
              className="w-full hero-button"
            >
              Elegir Pack Completo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection