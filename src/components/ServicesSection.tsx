import { ListChecks, Bot, Palette, BrainCircuit } from "lucide-react"

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
              <Bot className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Asistente IA personalizado
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Un chatbot entrenado en los valores y tono de tu marca que responde 
              con autenticidad, resuelve dudas y capta leads sin fricciones.
            </p>
          </div>

          {/* Service 2 */}
          <div className="feature-card text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <BrainCircuit className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Automatización inteligente
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Flujos diseñados para ahorrar tiempo: desde responder preguntas 
              frecuentes hasta guiar a tus clientes en el proceso de compra.
            </p>
          </div>

          {/* Service 3 */}
          <div className="feature-card text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <ListChecks className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Estrategia de implementación
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              No solo instalamos un chatbot: lo integramos en tu negocio 
              con un plan claro, optimizado y adaptado a tus objetivos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection