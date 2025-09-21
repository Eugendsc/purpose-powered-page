import { MessageSquare, Share2, ChartNoAxesCombined, Target, Zap, TrendingUp } from "lucide-react"

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Herramientas que<br />
            <span className="text-primary font-bold">
              transforman tu marca
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Communication Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4 flex items-center lg:text-left text-center flex-col lg:flex-row">
                <MessageSquare className="h-8 w-8 text-primary mr-3 lg:mr-3 mb-2 lg:mb-0" />
                Comunicación automatizada<br />con propósito
              </h3>
              <p className="text-lg text-muted-foreground mb-6 lg:text-left text-center">
                Tu asistente IA no solo responde: representa. conversa y representa tu marca. 
                Entrenado en tu tono y valores, crea confianza en cada interacción.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3 lg:justify-start justify-center lg:text-left text-center">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <Target className="h-3 w-3 text-primary-foreground" />
                </div>
                <p className="text-foreground">Respuestas coherentes con tu identidad de marca.</p>
              </div>
              <div className="flex items-start space-x-3 lg:justify-start justify-center lg:text-left text-center">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <Zap className="h-3 w-3 text-primary-foreground" />
                </div>
                <p className="text-foreground">Automatización que ahorra recursos.</p>
              </div>
              <div className="flex items-start space-x-3 lg:justify-start justify-center lg:text-left text-center">
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
              <h3 className="text-3xl font-bold text-foreground mb-4 flex items-center lg:text-left text-center flex-col lg:flex-row">
                <ChartNoAxesCombined className="h-8 w-8 text-primary mr-3 lg:mr-3 mb-2 lg:mb-0" />
                IA que impulsa<br />resultados reales
              </h3>
              <p className="text-lg text-muted-foreground mb-6 lg:text-left text-center">
                De la atención al cliente a la captación de leads: soluciones 
                inteligentes que trabajan 24/7 para tu negocio.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3 lg:justify-start justify-center lg:text-left text-center">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <Target className="h-3 w-3 text-primary-foreground" />
                </div>
                <p className="text-foreground">Conversaciones que convierten.</p>
              </div>
              <div className="flex items-start space-x-3 lg:justify-start justify-center lg:text-left text-center">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <Zap className="h-3 w-3 text-primary-foreground" />
                </div>
                <p className="text-foreground">Optimización continua basada en datos.</p>
              </div>
              <div className="flex items-start space-x-3 lg:justify-start justify-center lg:text-left text-center">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <TrendingUp className="h-3 w-3 text-primary-foreground" />
                </div>
                <p className="text-foreground">Diseñado para crecer contigo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection