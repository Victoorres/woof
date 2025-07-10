import { Star, Quote, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Silva",
      petName: "Rex",
      rating: 5,
      comment:
        "O Woof transformou completamente a vida do meu Rex! Ele era muito ansioso e agora está super calmo e feliz. A equipe é simplesmente incrível e o cuidado é excepcional.",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      service: "Treinamento",
      result: "100% menos ansiedade",
    },
    {
      name: "João Santos",
      petName: "Luna",
      rating: 5,
      comment:
        "Serviço excepcional! Deixo minha Luna com total tranquilidade. Eles mandam fotos, vídeos e updates durante todo o dia. É como se ela estivesse em casa!",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      service: "Cuidado Domiciliar",
      result: "Tranquilidade total",
    },
    {
      name: "Ana Costa",
      petName: "Bella",
      rating: 5,
      comment:
        "A melhor decisão que tomei foi confiar no Woof. Minha Bella adora os passeios e voltou muito mais sociável. O app com GPS é fantástico!",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      service: "Passeio Premium",
      result: "Mais sociável",
    },
  ]

  const stats = [
    { number: "500+", label: "Pets Transformados", icon: "🐾" },
    { number: "4.9", label: "Avaliação Média", icon: "⭐" },
    { number: "98%", label: "Taxa de Satisfação", icon: "❤️" },
    { number: "24/7", label: "Suporte Disponível", icon: "🛡️" },
  ]

  return (
    <section className="px-4 md:px-8 py-12 md:py-20 bg-gradient-to-br from-purple-50 via-white to-teal-50">
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center space-x-2 bg-green-100 px-3 md:px-4 py-2 rounded-full mb-4 md:mb-6">
          <Star className="w-3 md:w-4 md:h-4 h-3 text-green-600 fill-current" />
          <span className="text-xs md:text-sm font-semibold text-green-700">Histórias reais de sucesso</span>
        </div>
        <h2 className="heading-lg text-gray-900 mb-4 md:mb-6">
          Veja o que nossos clientes
          <span className="text-purple-600 block">estão dizendo</span>
        </h2>
        <p className="subheading max-w-3xl mx-auto">
          Cada depoimento representa uma vida transformada, um pet mais feliz e uma família mais tranquila. Estas são
          apenas algumas das centenas de histórias de sucesso.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 relative group card-hover border border-gray-100"
          >
            {/* Quote Icon */}
            <div className="absolute -top-3 md:-top-4 left-6 md:left-8">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-3 h-3 md:w-4 md:h-4 text-white" />
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-4 md:mb-6 pt-3 md:pt-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-xs md:text-sm font-semibold text-gray-700">({testimonial.rating}.0)</span>
            </div>

            {/* Comment */}
            <p className="body text-gray-700 mb-4 md:mb-6 leading-relaxed italic">"{testimonial.comment}"</p>

            {/* Result Badge */}
            <div className="mb-4 md:mb-6">
              <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-semibold px-2 md:px-3 py-1 rounded-full">
                ✅ {testimonial.result}
              </span>
            </div>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover mr-3 md:mr-4 shadow-md"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">{testimonial.name}</h4>
                  <p className="text-xs md:text-sm text-gray-600">Dono(a) do {testimonial.petName}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-semibold text-purple-600">{testimonial.service}</p>
              </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-teal-500/5 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-2xl md:text-4xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm font-medium text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-8 md:mt-12">
        <Button className="btn-primary group text-base md:text-lg px-8 md:px-10 py-3 md:py-4 w-full sm:w-auto">
          Quero ser o próximo caso de sucesso
          <ArrowRight className="w-4 md:w-5 md:h-5 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        <p className="text-xs md:text-sm text-gray-600 mt-3">Consulta gratuita • Sem compromisso • Resposta em 24h</p>
      </div>
    </section>
  )
}
