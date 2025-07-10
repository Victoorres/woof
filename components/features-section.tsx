import { Heart, Shield, Award, Users, Star, Zap, CheckCircle } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Heart,
      title: "Cuidado com amor genuíno",
      description:
        "Cada pet é tratado como família. Nossos cuidadores são apaixonados por animais e dedicam sua total atenção.",
      color: "from-red-500 to-pink-500",
      stats: "98% satisfação",
    },
    {
      icon: Shield,
      title: "Segurança total garantida",
      description:
        "Profissionais certificados, seguro completo e protocolos rigorosos para total tranquilidade dos donos.",
      color: "from-blue-500 to-cyan-500",
      stats: "Zero acidentes",
    },
    {
      icon: Zap,
      title: "Resposta ultra rápida",
      description: "Atendimento de emergência 24/7 com tempo de resposta médio de 15 minutos em toda a cidade.",
      color: "from-yellow-500 to-orange-500",
      stats: "15min resposta",
    },
    {
      icon: Award,
      title: "Qualidade premium",
      description: "Produtos premium, equipamentos de última geração e métodos cientificamente comprovados.",
      color: "from-purple-500 to-indigo-500",
      stats: "5★ qualidade",
    },
    {
      icon: Users,
      title: "Equipe de especialistas",
      description: "Veterinários, comportamentalistas e treinadores com anos de experiência e formação continuada.",
      color: "from-green-500 to-teal-500",
      stats: "50+ especialistas",
    },
    {
      icon: CheckCircle,
      title: "Resultados comprovados",
      description: "Mais de 500 pets transformados, famílias satisfeitas e histórias de sucesso documentadas.",
      color: "from-teal-500 to-cyan-500",
      stats: "500+ sucessos",
    },
  ]

  return (
    <section className="px-4 md:px-8 py-12 md:py-20 bg-white">
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center space-x-2 bg-purple-100 px-3 md:px-4 py-2 rounded-full mb-4 md:mb-6">
          <Star className="w-3 md:w-4 md:h-4 h-3 text-purple-600" />
          <span className="text-xs md:text-sm font-semibold text-purple-700">Por que somos diferentes</span>
        </div>
        <h2 className="heading-lg text-gray-900 mb-4 md:mb-6">
          A escolha certa para seu
          <span className="text-purple-600 block pb-2">melhor amigo</span>
        </h2>
        <p className="subheading max-w-3xl mx-auto">
          Não somos apenas mais um serviço de pet care. Somos uma revolução no cuidado animal, combinando amor genuíno
          com tecnologia de ponta e profissionalismo incomparável.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 card-hover relative overflow-hidden"
          >
            {/* Background Gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl md:rounded-3xl`}
            ></div>

            <div className="relative z-10">
              {/* Icon */}
              <div
                className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-3 md:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="heading-sm text-gray-900 group-hover:text-purple-600 transition-colors mb-2 sm:mb-0">
                    {feature.title}
                  </h3>
                  <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded-xl w-fit">
                    {feature.stats}
                  </span>
                </div>
                <p className="body text-gray-600 leading-relaxed">{feature.description}</p>
              </div>

              {/* Hover Effect */}
              {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></div> */}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12 md:mt-16">
        <div className="inline-flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 bg-gradient-to-r from-purple-50 to-teal-50 px-6 md:px-8 py-4 rounded-2xl">
          <div className="flex -space-x-2">
            {[25, 26, 27, 28].map((i) => (
              <img
                key={i}
                src={`https://randomuser.me/api/portraits/women/${i}.jpg`}
                alt="Cliente satisfeita"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white shadow-md"
              />
            ))}
          </div>
          <div className="text-center sm:text-left">
            <p className="font-bold text-gray-900 text-sm md:text-base">Mais de 500 famílias já confiam</p>
            <p className="text-xs md:text-sm text-gray-600">Seja a próxima história de sucesso!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
