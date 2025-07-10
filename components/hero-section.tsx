import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Star, Heart, Shield } from "lucide-react"
import FloatingPetCard from "@/components/floating-pet-card"

export default function HeroSection() {
  return (
    <section className="px-4 md:px-8 py-12 md:py-20 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-teal-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-teal-200 rounded-full opacity-20 animate-float animation-delay-300"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-200 rounded-full opacity-20 animate-float animation-delay-500"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
        <div className="space-y-6 md:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-teal-100 px-3 md:px-4 py-2 rounded-full animate-scale-in">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-xs md:text-sm font-semibold text-gray-700">
              Avaliado 4.9/5 por mais de 500 famílias
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-3 md:space-y-4">
            <h1 className="heading-xl text-gray-900 animate-slide-up">
              Cuidado premium para seus
              <span className="text-purple-600 block pb-2">pequenos amigos</span>
            </h1>
            <p className="subheading animate-slide-up animation-delay-200">
              Transforme a vida do seu pet com nossos serviços especializados. Cuidadores certificados, amor genuíno e
              tecnologia de ponta para garantir que seu melhor amigo receba o carinho que merece.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 animate-slide-up animation-delay-300">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 md:w-5 md:h-5 h-4 text-green-500" />
              <span className="text-xs md:text-sm font-medium text-gray-700">100% Seguro</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-4 md:w-5 md:h-5 h-4 text-red-500" />
              <span className="text-xs md:text-sm font-medium text-gray-700">Cuidado com Amor</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 md:w-5 md:h-5 h-4 text-yellow-500" />
              <span className="text-xs md:text-sm font-medium text-gray-700">Profissionais Certificados</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-4 animate-slide-up animation-delay-400">
            <Button className="btn-primary group w-full md:w-auto">
              Começar agora
              <ArrowRight className="w-4 md:w-5 md:h-5 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            {/* <Button className="btn-outline group w-full md:w-auto">
              <Phone className="w-4 h-4 mr-2" />
              Falar com especialista
            </Button> */}
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0 animate-slide-up animation-delay-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://randomuser.me/api/portraits/women/${i + 20}.jpg`}
                  alt="Cliente satisfeita"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white shadow-md"
                />
              ))}
            </div>
            <div>
              <p className="text-xs md:text-sm font-semibold text-gray-900">Mais de 500 famílias confiam</p>
              <p className="text-xs text-gray-600">Junte-se a elas hoje mesmo!</p>
            </div>
          </div>
        </div>

        {/* Hero Image Section - Hide some floating elements on mobile */}
        <div className="relative animate-scale-in animation-delay-200 mt-8 lg:mt-0">
          <div className="relative z-10">
            <img
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Mulher feliz segurando seu cachorro"
              className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
            />
          </div>

          {/* Floating Elements - Reduced on mobile */}
          <FloatingPetCard
            image="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
            className="absolute top-4 md:top-8 right-4 md:right-8 bg-red-100 animate-float"
          />
          <FloatingPetCard
            image="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
            className="hidden md:block absolute top-32 left-4 bg-blue-100 animate-float animation-delay-200"
          />
          <FloatingPetCard
            image="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
            className="absolute bottom-16 md:bottom-56 right-6 md:right-12 bg-teal-100 animate-float animation-delay-400"
            showHeart
          />

          {/* Floating Stats Card */}
          <div className="absolute bottom-8 md:bottom-16 right-2 md:right-4 bg-white p-3 md:p-6 rounded-2xl shadow-xl animate-float animation-delay-300 border border-gray-100 z-[20]">
            <div className="text-center">
              <div className="text-lg md:text-2xl font-bold text-purple-600">4.9★</div>
              <div className="text-xs md:text-sm text-gray-600">Avaliação Média</div>
              <div className="text-xs text-gray-500 mt-1">500+ Reviews</div>
            </div>
          </div>

          {/* Success Story Card - Hide on small mobile */}
          <div className="hidden sm:block absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-white p-3 md:p-4 rounded-2xl shadow-xl max-w-xs animate-slide-up animation-delay-500 border border-gray-100 z-[20]">
            <div className="flex items-start space-x-2 md:space-x-3">
              <img
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80"
                alt="Pet feliz"
                className="w-8 h-8 md:w-12 md:h-12 rounded-xl object-cover"
              />
              <div>
                <div className="font-semibold text-xs md:text-sm text-gray-900 mt-4">Rex está mais feliz!</div>
                {/* <div className="text-xs text-purple-600 mt-1 font-medium cursor-pointer">Ver história completa →</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
