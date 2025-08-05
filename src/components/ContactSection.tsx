import { Mail, Instagram, Calendar, Shield, Clock, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                ¿Solo necesitas un servicio específico?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contáctanos para servicios individuales personalizados
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Correo</p>
                  <p className="text-lg font-semibold text-foreground">info@virenso.es</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Instagram className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Instagram</p>
                  <p className="text-lg font-semibold text-foreground">virenso.digital</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="feature-card">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Más visibilidad,<br />
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  menos fricción
                </span>
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Soluciones reales para automatizar, comunicar y crecer con impacto.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="font-semibold text-foreground">Incluye todo esto:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Auditoría digital completa de tu marca</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Chatbot IA entrenado y personalizado</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>30 días de calendario editorial</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>5 plantillas de reels educativos</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>5 carruseles de storytelling</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Guía de implementación paso a paso</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Soporte por WhatsApp 30 días</span>
                </li>
              </ul>
            </div>

            <div className="text-center mb-8">
              <p className="text-2xl font-bold text-primary mb-2">Desde 80€</p>
              <p className="text-muted-foreground">
                Reserva tu sesión gratuita y descubre cómo aumentar la visibilidad de tu marca 
                con una estrategia clara y automatizada.
              </p>
            </div>

            <Button className="w-full hero-button text-lg py-4 h-auto mb-6">
              <Calendar className="mr-2 h-5 w-5" />
              Agenda tu sesión
            </Button>

            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                Garantía de 30 días
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Resultados visibles en la primera semana
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection