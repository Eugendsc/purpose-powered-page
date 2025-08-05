import { MessageSquare, Share2, Eye, Target, Zap, TrendingUp } from "lucide-react"

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Herramientas que<br />
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              transforman tu marca
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Communication Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4 flex items-center">
                <MessageSquare className="h-8 w-8 text-primary mr-3" />
                Comunicación automatizada<br />con propósito
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Tu asistente IA no solo responde: representa. Entrenado en tu comunicación y valores, 
                interactúa con tus clientes y refuerza tu mensaje sin esfuerzo.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <Target className="h-3 w-3 text-primary-foreground" />
                </div>
                <p className="text-foreground">Respuestas coherentes con tu identidad de marca.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <Zap className="h-3 w-3 text-primary-foreground" />
                </div>
                <p className="text-foreground">Automatización eficiente: informa sin intervención.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <Share2 className="h-3 w-3 text-primary-foreground" />
                </div>
                <p className="text-foreground">Integración sencilla con tus redes sociales.</p>
              </div>
            </div>
          </div>

          {/* Visual Content Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4 flex items-center">
                <Eye className="h-8 w-8 text-primary mr-3" />
                Contenido visual<br />que inspira acción
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Plantillas estratégicas para reels y carruseles que cuentan tu historia, 
                transmiten valor y convierten seguidores en clientes reales.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <Target className="h-3 w-3 text-primary-foreground" />
                </div>
                <p className="text-foreground">Diseñado para educar e inspirar.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <Zap className="h-3 w-3 text-primary-foreground" />
                </div>
                <p className="text-foreground">Adaptado a marcas con propósito.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <TrendingUp className="h-3 w-3 text-primary-foreground" />
                </div>
                <p className="text-foreground">Enfocado en conversión y visibilidad.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection