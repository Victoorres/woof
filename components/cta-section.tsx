import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Calendar, Sparkles, CheckCircle, Gift } from "lucide-react"

export default function CTASection() {
  const benefits = [
    "Consulta gratuita de 30 minutos",
    "Plano personalizado para seu pet",
    "Garantia de satisfação 100%",
    "Suporte 24/7 incluso",
  ]

  return (
    <section className="px-4 md:px-8 py-12 md:py-20">
      <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-teal-600 rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16 text-center text-white overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-32 right-16 w-24 h-24 bg-white/10 rounded-full animate-float animation-delay-200"></div>
          <div className="absolute bottom-16 left-20 w-20 h-20 bg-white/10 rounded-full animate-float animation-delay-400"></div>
          <div className="absolute bottom-8 right-8 w-28 h-28 bg-white/10 rounded-full animate-float animation-delay-300"></div>

          {/* Sparkle Effects */}
          <Sparkles className="absolute top-20 right-1/4 w-4 md:w-6 md:h-6 h-4 text-yellow-300 animate-pulse" />
          <Sparkles className="absolute bottom-20 left-1/3 w-3 md:w-4 md:h-4 h-3 text-yellow-300 animate-pulse animation-delay-500" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full mb-6 md:mb-8">
            <Gift className="w-3 md:w-4 md:h-4 h-3 text-yellow-300" />
            <span className="text-xs md:text-sm font-semibold">Oferta Especial - Primeiros 100 Clientes</span>
          </div>

          {/* Main Heading */}
          <h2 className="heading-lg mb-4 md:mb-6">
            Pronto Para Transformar a Vida
            <span className="block text-yellow-300">Do Seu Pet?</span>
          </h2>

          <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 opacity-90 leading-relaxed">
            Junte-se a mais de 500 famílias que já descobriram o segredo para ter um pet mais feliz, saudável e bem
            cuidado. <strong>Sua primeira consulta é totalmente gratuita!</strong>
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-10 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 md:space-x-3 text-left">
                <CheckCircle className="w-4 md:w-5 md:h-5 h-4 text-green-300 flex-shrink-0" />
                <span className="text-sm md:text-base font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-4 justify-center items-center mb-6 md:mb-8">
            <Button
              size="lg"
              className="w-full md:w-auto bg-white text-purple-600 hover:bg-gray-100 px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group"
            >
              <Calendar className="w-4 md:w-5 md:h-5 h-4 mr-2" />
              Agendar Consulta Gratuita
              <ArrowRight className="w-4 md:w-5 md:h-5 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full md:w-auto border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-bold bg-transparent backdrop-blur-sm group"
            >
              <Phone className="w-4 md:w-5 md:h-5 h-4 mr-2" />
              Falar com Especialista
            </Button>
          </div>

          {/* Urgency & Social Proof */}
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-xs md:text-sm opacity-90">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Consulta 100% gratuita</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>Resposta em 24h</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="flex -space-x-2">
                {[35, 36, 37, 38, 39].map((i) => (
                  <img
                    key={i}
                    src={`https://randomuser.me/api/portraits/women/${i}.jpg`}
                    alt="Cliente satisfeita"
                    className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white shadow-md"
                  />
                ))}
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs md:text-sm font-bold">+500 famílias atendidas este mês</p>
                <p className="text-xs opacity-75">Seja a próxima!</p>
              </div>
            </div>

            {/* Urgency */}
            <div className="bg-red-500/20 backdrop-blur-sm border border-red-300/30 rounded-xl md:rounded-2xl p-3 md:p-4 max-w-md mx-auto">
              <p className="text-xs md:text-sm font-bold text-yellow-300">⚡ Oferta Limitada!</p>
              <p className="text-xs md:text-sm">Apenas 23 vagas restantes para consulta gratuita esta semana</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
