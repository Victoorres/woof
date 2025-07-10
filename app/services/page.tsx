import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Heart,
  Home,
  Scissors,
  Stethoscope,
  GraduationCap,
  Car,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Award,
  Phone,
  Calendar,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Home,
      title: 'Cuidado domiciliar premium',
      description: 'Cuidado profissional no conforto da sua casa',
      price: 'A partir de R$ 80',
      originalPrice: 'R$ 120',
      features: [
        'Atualizações com fotos/vídeos a cada 2h',
        'Alimentação e medicação rigorosa',
        'Tempo de brincadeira personalizado',
        'Relatório completo diário',
        'Segurança residencial inclusa',
      ],
      badge: 'Mais Popular',
      color: 'from-blue-500 to-cyan-500',
      rating: 4.9,
      reviews: 234,
      image:
        'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      icon: Car,
      title: 'Passeio com GPS premium',
      description: 'Passeios monitorados com GPS e relatórios detalhados de atividade',
      price: 'A partir de R$ 45',
      originalPrice: 'R$ 65',
      features: [
        'Rastreamento GPS em tempo real',
        'Passeios de 45-90 minutos',
        'Fotos e vídeos durante o passeio',
        'Relatório de atividade física',
        'Socialização controlada',
      ],
      badge: 'Tecnologia Avançada',
      color: 'from-green-500 to-teal-500',
      rating: 4.8,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      icon: Scissors,
      title: 'Spa & estética completa',
      description: 'Tratamento completo de beleza e bem-estar com produtos premium',
      price: 'A partir de R$ 120',
      originalPrice: 'R$ 180',
      features: [
        'Banho com produtos orgânicos',
        'Corte profissional personalizado',
        'Hidratação e aromaterapia',
        'Limpeza completa (ouvidos, dentes)',
        'Massagem relaxante inclusa',
      ],
      badge: 'Luxo Premium',
      color: 'from-pink-500 to-rose-500',
      rating: 4.9,
      reviews: 156,
      image:
        'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      icon: Stethoscope,
      title: 'Atendimento veterinário VIP',
      description: 'Consultas veterinárias completas com especialistas certificados',
      price: 'A partir de R$ 180',
      originalPrice: 'R$ 250',
      features: [
        'Consulta completa (60 minutos)',
        'Exames laboratoriais inclusos',
        'Plano de saúde personalizado',
        'Atendimento de emergência 24/7',
        'Telemedicina gratuita por 30 dias',
      ],
      badge: 'Emergência 24/7',
      color: 'from-red-500 to-orange-500',
      rating: 4.9,
      reviews: 298,
      image:
        'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      icon: GraduationCap,
      title: 'Adestramento científico',
      description: 'Treinamento baseado em ciência comportamental',
      price: 'A partir de R$ 150',
      originalPrice: 'R$ 220',
      features: [
        'Avaliação comportamental completa',
        'Plano de treinamento personalizado',
        'Sessões individuais e em grupo',
        'Suporte contínuo por WhatsApp',
        'Garantia de resultado em 60 dias',
      ],
      badge: 'Resultado Garantido',
      color: 'from-purple-500 to-indigo-500',
      rating: 4.8,
      reviews: 167,
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      icon: Heart,
      title: 'Hotel pet 5 estrelas',
      description: 'Hospedagem luxuosa com suítes climatizadas e atividades recreativas',
      price: 'A partir de R$ 100',
      originalPrice: 'R$ 150',
      features: [
        'Suítes individuais climatizadas',
        'Atividades recreativas diárias',
        'Monitoramento 24h com câmeras',
        'Refeições gourmet personalizadas',
        'Relatórios diários com fotos',
      ],
      badge: '5 Estrelas',
      color: 'from-yellow-500 to-amber-500',
      rating: 4.9,
      reviews: 203,
      image:
        'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: '100% Seguro',
      description: 'Profissionais certificados, seguros completos e protocolos rigorosos de segurança.',
      stats: 'Zero acidentes em 5 anos',
    },
    {
      icon: Clock,
      title: 'Disponível 24/7',
      description: 'Suporte e atendimento de emergência disponível todos os dias, a qualquer hora.',
      stats: 'Resposta em 15 minutos',
    },
    {
      icon: Award,
      title: 'Qualidade',
      description: 'Padrões internacionais de qualidade com certificações reconhecidas mundialmente.',
      stats: 'ISO 9001 Certificado',
    },
    {
      icon: Heart,
      title: 'Amor genuíno',
      description: 'Cada pet é tratado como família, com carinho e atenção personalizada.',
      stats: '98% satisfação dos clientes',
    },
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      service: 'Cuidado Domiciliar',
      comment: 'Serviço excepcional! Meu Rex fica super feliz e eu tenho total tranquilidade no trabalho.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      petName: 'Rex',
    },
    {
      name: 'João Santos',
      service: 'Adestramento',
      comment: 'Em 30 dias minha Luna estava completamente transformada. Profissionais incríveis!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      petName: 'Luna',
    },
    {
      name: 'Ana Costa',
      service: 'Veterinário VIP',
      comment: 'Salvaram a vida da minha Bella. Atendimento rápido e profissional de primeira linha.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/28.jpg',
      petName: 'Bella',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700">
      <div className="container mx-auto px-4 py-6">
        <div className="bg-gray-50 rounded-3xl shadow-2xl overflow-hidden min-h-screen">
          <Header />

          <main className="px-4 md:px-8 py-12 md:py-16">
            {/* Hero Section */}
            <section className="text-center mb-12 md:mb-20 relative overflow-hidden">
              {/* Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-float"></div>
                <div className="absolute bottom-20 right-10 w-24 h-24 bg-teal-200 rounded-full opacity-20 animate-float animation-delay-300"></div>
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 bg-yellow-100 px-3 md:px-4 py-2 rounded-full mb-4 md:mb-6">
                  <Star className="w-3 md:w-4 md:h-4 h-3 text-yellow-600 fill-current" />
                  <span className="text-xs md:text-sm font-semibold text-yellow-700">
                    Serviços premium certificados
                  </span>
                </div>

                <h1 className="heading-xl text-gray-900 mb-4 md:mb-6">
                  Serviços que transformam
                  <span className="text-gradient block pb-2">a vida do seu pet</span>
                </h1>

                <p className="subheading max-w-4xl mx-auto mb-6 md:mb-8">
                  Cuidado profissional, amor genuíno e tecnologia de ponta. Nossos serviços são projetados para
                  proporcionar o máximo bem-estar para seu pet e total tranquilidade para você.
                </p>
              </div>
            </section>

            {/* Services Grid */}
            <section className="px-4 md:px-8 py-12 md:py-20 bg-white">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 card-hover bg-white rounded-3xl overflow-hidden group"
                  >
                    {/* Service Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.image || '/placeholder.svg'}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                      {/* Badge */}
                      {service.badge && (
                        <Badge className="absolute top-4 left-4 bg-red-500 text-white font-bold shadow-lg">
                          🔥 {service.badge}
                        </Badge>
                      )}

                      {/* Icon */}
                      <div
                        className={`absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="mb-6">
                        <CardTitle className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-semibold text-gray-700 ml-2">
                          {service.rating} ({service.reviews} avaliações)
                        </span>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Incluso no serviço:</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        {service.features.length > 3 && (
                          <p className="text-sm text-purple-600 font-medium mt-2">
                            +{service.features.length - 3} benefícios adicionais
                          </p>
                        )}
                      </div>

                      {/* Pricing */}
                      <div className="mb-6">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-3xl font-black text-purple-600">{service.price}</span>
                          {service.originalPrice && (
                            <span className="text-lg text-gray-500 line-through">{service.originalPrice}</span>
                          )}
                        </div>
                        {service.originalPrice && (
                          <span className="text-sm font-bold text-green-600">
                            Economize R${' '}
                            {Number.parseInt(service.originalPrice.replace(/[^\d]/g, '')) -
                              Number.parseInt(service.price.replace(/[^\d]/g, ''))}
                          </span>
                        )}
                        <p className="text-sm text-gray-600">por sessão</p>
                      </div>

                      {/* CTA */}
                      <div className="space-y-3">
                        <Button className="w-full btn-primary group">
                          Agendar Agora
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" className="w-full btn-outline bg-transparent hover:text-purple-600">
                          Saber Mais
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-6">
                  <Award className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-700">Por que somos diferentes</span>
                </div>
                <h2 className="heading-lg text-gray-900 mb-6">
                  A escolha certa para
                  <span className="text-gradient block pb-2">seu melhor amigo</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-20 h-20 bg-white rounded-3xl shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-10 h-10 text-purple-600" />
                    </div>
                    <h3 className="heading-sm text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="body text-gray-600 mb-3 leading-relaxed">{item.description}</p>
                    <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                      ✅ {item.stats}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonials */}
            <section className="px-4 md:px-8 py-12 md:py-20 bg-white">
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
                  <Star className="w-4 h-4 text-blue-600 fill-current" />
                  <span className="text-sm font-semibold text-blue-700">Depoimentos reais</span>
                </div>
                <h2 className="heading-lg text-gray-900 mb-6">
                  Veja o que nossos
                  <span className="text-gradient block pb-2">clientes dizem</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-8 rounded-3xl shadow-xl card-hover border border-gray-100">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <p className="body text-gray-700 mb-6 leading-relaxed italic">"{testimonial.comment}"</p>

                    <div className="flex items-center">
                      <img
                        src={testimonial.image || '/placeholder.svg'}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4 shadow-md"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">Dono(a) do {testimonial.petName}</p>
                        <p className="text-xs text-purple-600 font-medium">{testimonial.service}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
              <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-teal-600 rounded-3xl p-12 lg:p-16 text-center text-white relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
                  <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float animation-delay-300"></div>
                  <Zap className="absolute top-20 right-1/4 w-8 h-8 text-yellow-300 animate-pulse opacity-50" />
                  <Heart className="absolute bottom-20 left-1/3 w-6 h-6 text-yellow-300 animate-pulse animation-delay-500 opacity-50" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                  <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
                    <Zap className="w-4 h-4 text-yellow-300" />
                    <span className="text-sm font-semibold">Oferta Especial - Primeira Consulta Grátis!</span>
                  </div>

                  <h2 className="heading-lg mb-6">
                    Pronto para dar ao seu pet
                    <span className="block text-yellow-300">o cuidado que ele merece?</span>
                  </h2>

                  <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
                    Agende sua primeira consulta gratuita e descubra como nossos serviços podem transformar a vida do
                    seu pet. <strong>Sem compromisso, sem taxas ocultas!</strong>
                  </p>

                  {/* Benefits */}
                  {/* <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto text-left">
                    {[
                      'Consulta e avaliação 100% gratuita',
                      'Plano personalizado para seu pet',
                      'Profissionais certificados',
                      'Garantia de satisfação total',
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                        <span className="font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div> */}

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <Button
                      size="lg"
                      className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-4 text-lg font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Agendar consulta
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-10 py-4 text-lg font-bold bg-transparent backdrop-blur-sm"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Falar com especialista
                    </Button>
                  </div>

                  {/* Trust indicators */}
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm opacity-90">
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
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
