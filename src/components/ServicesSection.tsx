import { Search, Bot, Palette } from "lucide-react"

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Todo lo que necesitas para<br />
            <span className="text-primary font-bold">
              crecer con autenticidad
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Herramientas diseñadas para marcas con propósito que buscan destacar y avanzar con estrategia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="feature-card text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Auditoría digital personalizada
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Análisis completo de tu presencia online con recomendaciones claras y aplicables, 
              adaptadas a marcas que quieren destacar con coherencia.
            </p>
          </div>

          {/* Service 2 */}
          <div className="feature-card text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bot className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Chatbot inteligente entrenado
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Asistente IA que comunica tus valores, responde automáticamente y mejora la 
              atención al cliente sin perder autenticidad.
            </p>
          </div>

          {/* Service 3 */}
          <div className="feature-card text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Palette className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Kit de contenidos visuales
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Plantillas de contenido diseñadas para atraer, emocionar y contar la historia 
              detrás de tu marca de forma visual y efectiva.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection