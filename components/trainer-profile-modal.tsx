import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Star, Award, Phone, Mail, Calendar, Heart, Trophy, CheckCircle, ArrowRight } from "lucide-react"

interface TrainerProfileModalProps {
  trainer: {
    id: number
    name: string
    specialty: string
    experience: string
    rating: number
    reviews: number
    location: string
    image: string
    certifications: string[]
    specialties: string[]
    price: string
    availability: string
    bio?: string
    phone?: string
    email?: string
    completedSessions?: number
    successRate?: number
  }
  isOpen: boolean
  onClose: () => void
}

export default function TrainerProfileModal({ trainer, isOpen, onClose }: TrainerProfileModalProps) {
  const testimonials = [
    {
      name: "Maria Silva",
      rating: 5,
      comment:
        "Profissional excepcional! Meu cão Rex aprendeu muito rapidamente com as técnicas inovadoras. Recomendo 100%!",
      date: "Há 2 semanas",
      petName: "Rex",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      result: "Problema de agressividade resolvido",
    },
    {
      name: "João Santos",
      rating: 5,
      comment: "Muito paciente e dedicado. Minha Luna estava com ansiedade severa e agora está completamente curada!",
      date: "Há 1 mês",
      petName: "Luna",
      image: "https://randomuser.me/api/portraits/men/28.jpg",
      result: "Ansiedade de separação eliminada",
    },
    {
      name: "Ana Costa",
      rating: 4,
      comment:
        "Excelente trabalho com socialização. Minha Bella ficou muito mais sociável e confiante com outros pets.",
      date: "Há 2 meses",
      petName: "Bella",
      image: "https://randomuser.me/api/portraits/women/35.jpg",
      result: "Socialização completa",
    },
  ]

  const availableHours = [
    { day: "Segunda", hours: "08:00 - 17:00", available: true },
    { day: "Terça", hours: "08:00 - 17:00", available: true },
    { day: "Quarta", hours: "08:00 - 17:00", available: true },
    { day: "Quinta", hours: "08:00 - 17:00", available: true },
    { day: "Sexta", hours: "08:00 - 17:00", available: true },
    { day: "Sábado", hours: "09:00 - 15:00", available: true },
    { day: "Domingo", hours: "Indisponível", available: false },
  ]

  const achievements = [
    { icon: Trophy, label: "Top Trainer 2023", color: "text-yellow-600" },
    { icon: Award, label: "Certificação Internacional", color: "text-blue-600" },
    { icon: Star, label: "5 Estrelas Consistente", color: "text-purple-600" },
    { icon: Heart, label: "Método 100% Positivo", color: "text-red-600" },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl">
        <DialogHeader className="pb-6">
          <DialogTitle className="heading-md text-gray-900">Perfil completo do especialista</DialogTitle>
        </DialogHeader>

        <div className="space-y-8">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-purple-50 to-teal-50 p-8 rounded-3xl">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0 text-center md:text-left">
                <div className="relative inline-block">
                  <img
                    src={trainer.image || "/placeholder.svg"}
                    alt={trainer.name}
                    className="w-32 h-32 rounded-3xl object-cover shadow-xl"
                  />
                  <div className="absolute -top-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
                </div>
                {/* <div className="mt-4">
                  <Badge className="bg-yellow-400 text-yellow-900 font-bold">
                    <Trophy className="w-3 h-3 mr-1" />
                    Top Rated
                  </Badge>
                </div> */}
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="md:w-4/5">
                    <h2 className="text-3xl font-black text-gray-900 mb-2">{trainer.name}</h2>
                    <p className="text-lg font-semibold text-purple-600 mb-3">{trainer.specialty}</p>
                    <p className="text-gray-600 leading-relaxed">
                      Especialista certificado com mais de {trainer.experience} transformando a vida de pets e suas
                      famílias através de métodos científicos e amor genuíno pelos animais.
                    </p>
                  </div>
                  <div className="text-center md:text-right mt-4 md:mt-0">
                    <div className="text-4xl font-black text-purple-600 mb-1">{trainer.price}</div>
                    <div className="text-sm text-gray-600 mb-2">por sessão</div>
                    <Badge className="bg-green-100 text-green-800">Disponível hoje</Badge>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center bg-white p-3 rounded-2xl shadow-md">
                    <div className="text-2xl font-bold text-purple-600">{trainer.rating}</div>
                    <div className="text-xs text-gray-600">Avaliação</div>
                  </div>
                  <div className="text-center bg-white p-3 rounded-2xl shadow-md">
                    <div className="text-2xl font-bold text-teal-600">{trainer.completedSessions || 150}+</div>
                    <div className="text-xs text-gray-600">Sessões</div>
                  </div>
                  <div className="text-center bg-white p-3 rounded-2xl shadow-md">
                    <div className="text-2xl font-bold text-green-600">{trainer.successRate || 96}%</div>
                    <div className="text-xs text-gray-600">Sucesso</div>
                  </div>
                  <div className="text-center bg-white p-3 rounded-2xl shadow-md">
                    <div className="text-2xl font-bold text-yellow-600">{trainer.reviews}</div>
                    <div className="text-xs text-gray-600">Reviews</div>
                  </div>
                </div>

                {/* Rating Display */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(trainer.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-bold text-gray-900">{trainer.rating}</span>
                  <span className="text-gray-600">({trainer.reviews} avaliações verificadas)</span>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Especialidades:</h4>
                  <div className="flex flex-wrap gap-2">
                    {trainer.specialties.map((specialty, idx) => (
                      <Badge key={idx} className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-2xl shadow-lg card-hover">
                <achievement.icon className={`w-8 h-8 ${achievement.color} mx-auto mb-2`} />
                <p className="text-sm font-semibold text-gray-900">{achievement.label}</p>
              </div>
            ))}
          </div>

          <Separator />

          {/* Certifications */}
          <div>
            <h3 className="heading-sm text-gray-900 mb-4">Certificações internacionais</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {trainer.certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center space-x-2 bg-green-50 p-3 rounded-xl">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-800">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Schedule */}
          <div>
            <h3 className="heading-sm text-gray-900 mb-4">Horários disponíveis</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {availableHours.map((schedule, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border-2 ${
                    schedule.available ? "border-green-200 bg-green-50" : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <div className="font-semibold text-gray-900 mb-1">{schedule.day}</div>
                  <div className={`text-sm ${schedule.available ? "text-green-600" : "text-gray-500"}`}>
                    {schedule.hours}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Testimonials */}
          <div>
            <h3 className="heading-sm text-gray-900 mb-6">Depoimentos verificados</h3>
            <div className="space-y-6">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover shadow-md"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">Dono(a) do {testimonial.petName}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                          <span className="text-sm text-gray-500 ml-2">{testimonial.date}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-3 leading-relaxed">"{testimonial.comment}"</p>

                      <div className="bg-green-50 p-3 rounded-xl">
                        <p className="text-sm font-semibold text-green-700">Resultado:</p>
                        <p className="text-sm text-green-600">✅ {testimonial.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Contact Info */}
          <div>
            <h3 className="heading-sm text-gray-900 mb-4">Informações de contato</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-2xl">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Telefone Direto</div>
                  <div className="text-purple-600 font-medium">(11) 99999-9999</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-teal-50 rounded-2xl">
                <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">E-mail Profissional</div>
                  <div className="text-teal-600 font-medium">
                    {trainer.name.toLowerCase().replace(" ", ".")}@woof.com
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-gradient-to-r from-purple-50 to-teal-50 p-8 rounded-3xl">
            <div className="text-center mb-6">
              <h4 className="heading-sm text-gray-900 mb-2">Pronto para transformar seu pet?</h4>
              <p className="text-gray-600">
                Agende sua primeira sessão e veja resultados em 30 dias ou seu dinheiro de volta!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1 btn-primary text-lg py-4 group">
                <Calendar className="w-5 h-5 mr-2" />
                Agendar primeira sessão
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="flex-1 btn-outline text-lg py-4 bg-transparent">
                <Phone className="w-5 h-5 mr-2" />
                Falar agora
              </Button>
              {/* <Button variant="outline" className="flex-1 btn-outline text-lg py-4 bg-transparent">
                <Heart className="w-5 h-5 mr-2" />
                Salvar Favorito
              </Button> */}
            </div>

            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                ✅ Primeira consulta gratuita • ✅ Garantia de satisfação • ✅ Resultados em 30 dias
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
