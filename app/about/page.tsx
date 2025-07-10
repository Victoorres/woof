import Header from '@/components/header';
import { Heart, Users, Award, Clock, Target, Lightbulb, Shield, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function About() {
  const stats = [
    { icon: Heart, number: '500+', label: 'Pets Transformados', color: 'text-red-600', bg: 'bg-red-100' },
    { icon: Users, number: '200+', label: 'Famílias Felizes', color: 'text-blue-600', bg: 'bg-blue-100' },
    { icon: Award, number: '5', label: 'Anos de Excelência', color: 'text-yellow-600', bg: 'bg-yellow-100' },
    { icon: Clock, number: '24/7', label: 'Suporte Disponível', color: 'text-green-600', bg: 'bg-green-100' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Amor incondicional',
      description:
        'Cada pet é tratado como família. Nosso amor pelos animais é genuíno e transparece em cada cuidado, cada carinho e cada momento de atenção dedicado.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Award,
      title: 'Excelência',
      description:
        'Padrões internacionais de qualidade, profissionais certificados e processos rigorosos garantem que seu pet receba sempre o melhor cuidado possível.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'Comunidade unida',
      description:
        'Mais que clientes, somos uma família. Construímos relacionamentos duradouros baseados na confiança mútua e no amor compartilhado pelos animais.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'Confiança total',
      description:
        'Transparência absoluta, comunicação constante e responsabilidade integral. Sua tranquilidade é nossa prioridade número um.',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Target,
      title: 'Foco no resultado',
      description:
        'Cada serviço é personalizado para atingir objetivos específicos. Medimos nosso sucesso pela felicidade e bem-estar do seu pet.',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Lightbulb,
      title: 'Inovação constante',
      description:
        'Tecnologia de ponta, métodos científicos atualizados e inovação contínua para oferecer sempre o mais moderno no cuidado animal.',
      color: 'from-teal-500 to-cyan-500',
    },
  ];

  const team = [
    {
      name: 'Dra. Ana Silva',
      role: 'Veterinária Chefe & Fundadora',
      experience: '+12 anos',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
      specialties: ['Cirurgia Avançada', 'Medicina Interna', 'Emergências'],
      description: 'Formada pela USP, especialista em comportamento animal e apaixonada por salvar vidas.',
    },
    {
      name: 'Carlos Santos',
      role: 'Especialista em Comportamento',
      experience: '+8 anos',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      specialties: ['Adestramento Positivo', 'Terapia Comportamental', 'Socialização'],
      description: 'Certificado internacionalmente, já ajudou mais de 300 pets com problemas comportamentais.',
    },
    {
      name: 'Marina Costa',
      role: 'Coordenadora de Bem-Estar',
      experience: '+6 anos',
      image: 'https://randomuser.me/api/portraits/women/28.jpg',
      specialties: ['Nutrição Especializada', 'Cuidados Diários', 'Terapias Alternativas'],
      description: 'Especialista em nutrição animal e bem-estar holístico, sempre buscando o melhor para cada pet.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700">
      <div className="container mx-auto px-4 py-6">
        <div className="bg-gray-50 rounded-3xl shadow-2xl overflow-hidden min-h-screen">
          <Header />

          <main className="px-8 py-16">
            {/* Hero Section */}
            <section className="text-center mb-12 md:mb-20 relative overflow-hidden">
              {/* Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-float"></div>
                <div className="absolute bottom-20 right-10 w-24 h-24 bg-teal-200 rounded-full opacity-20 animate-float animation-delay-300"></div>
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 bg-red-100 px-3 md:px-4 py-2 rounded-full mb-4 md:mb-6">
                  <Heart className="w-3 md:w-4 md:h-4 h-3 text-red-600" />
                  <span className="text-xs md:text-sm font-semibold text-red-700">
                    Nossa história de amor pelos pets
                  </span>
                </div>

                <h1 className="heading-xl text-gray-900 mb-4 md:mb-6">
                  Conheça o<span className="text-gradient block pb-2">Woof</span>
                </h1>

                <p className="subheading max-w-4xl mx-auto mb-6 md:mb-8">
                  Nascemos do amor incondicional pelos animais e da missão de revolucionar o cuidado pet no Brasil. Cada
                  dia trabalhamos para criar um mundo onde todos os pets recebam o amor, cuidado e atenção que merecem.
                </p>
              </div>
            </section>

            {/* Story Section */}
            <section className="px-8 py-20 bg-white">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div>
                    <div className="inline-flex items-center space-x-2 bg-teal-100 px-4 py-2 rounded-full mb-6">
                      <Star className="w-4 h-4 text-teal-600" />
                      <span className="text-sm font-semibold text-teal-700">Nossa Jornada</span>
                    </div>
                    <h2 className="heading-lg text-gray-900 mb-6">
                      Uma história de
                      <span className="text-gradient block pb-2">amor e dedicação</span>
                    </h2>
                  </div>

                  <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                    <p>
                      Em 2019, três amigos veterinários se uniram com um sonho: criar o melhor serviço de cuidado pet do
                      Brasil. Cansados de ver pets mal cuidados e donos preocupados, decidimos fazer a diferença.
                    </p>
                    <p>
                      O que começou em uma pequena clínica se transformou em uma
                      <strong className="text-teal-600"> revolução no cuidado animal</strong>. Hoje, somos a escolha
                      número 1 de famílias que querem o melhor para seus pets.
                    </p>
                    <p>
                      Cada pet que cuidamos, cada família que atendemos, cada vida que transformamos nos motiva a
                      continuar inovando e oferecendo{' '}
                      <strong className="text-green-600">excelência em cada detalhe</strong>.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="btn-primary group">
                      Conhecer Nossos Serviços
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative z-10">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?q=80&w=414&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Equipe Woof cuidando de pets com amor"
                      className="rounded-3xl shadow-2xl w-full h-full"
                    />
                  </div>

                  {/* Floating testimonial */}
                  <div className="absolute md:top-8 md:-right-8 bg-white p-4 rounded-2xl shadow-xl max-w-xs animate-float animation-delay-500 z-[20]">
                    <div className="flex items-center space-x-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-gray-900">"Mudaram a vida do meu Rex!"</p>
                    <p className="text-xs text-gray-600">- Maria, cliente há 2 anos</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Values Section */}
            <section className="px-8 py-20 bg-gradient-to-br from-gray-50 to-purple-50">
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
                  <Award className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-semibold text-purple-700">Nossos valores fundamentais</span>
                </div>
                <h2 className="heading-lg text-gray-900 mb-6">
                  O que nos move
                  <span className="text-gradient block">todos os dias</span>
                </h2>
                <p className="subheading max-w-3xl mx-auto">
                  Estes valores não são apenas palavras bonitas. São os princípios que guiam cada decisão, cada ação e
                  cada momento de cuidado que oferecemos.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group card-hover relative overflow-hidden"
                  >
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                    ></div>

                    <div className="relative z-10">
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <value.icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="heading-sm text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                        {value.title}
                      </h3>
                      <p className="body text-gray-600 leading-relaxed">{value.description}</p>

                      {/* Hover Effect Line */}
                      {/* <div
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full`}
                      ></div> */}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Team Section */}
            <section className="px-8 py-20 bg-white">
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 bg-teal-100 px-4 py-2 rounded-full mb-6">
                  <Users className="w-4 h-4 text-teal-600" />
                  <span className="text-sm font-semibold text-teal-700">Conheça quem cuida do seu pet</span>
                </div>
                <h2 className="heading-lg text-gray-900 mb-6">
                  Nossa equipe de
                  <span className="text-gradient block">especialistas</span>
                </h2>
                <p className="subheading max-w-3xl mx-auto">
                  Profissionais apaixonados, certificados e dedicados que fazem a diferença na vida do seu pet todos os
                  dias.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <div key={index} className="text-center group card-hover p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 relative">
                    <div className="relative mb-8">
                      <div className="relative">
                        <img
                          src={member.image || '/placeholder.svg'}
                          alt={member.name}
                          className="w-56 h-56 rounded-3xl object-cover mx-auto shadow-2xl group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Floating badge */}
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100">
                        <span className="text-sm font-bold text-purple-600">{member.experience}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                        <p className="text-lg font-semibold text-purple-600 mb-2">{member.role}</p>
                        <p className="body text-gray-600 mb-4">{member.description}</p>
                      </div>

                      <div className="flex flex-wrap justify-center gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-purple-100 to-teal-100 text-purple-700 rounded-full text-sm font-semibold"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="px-8 py-20">
              <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-teal-600 rounded-3xl p-12 lg:p-16 text-center text-white relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
                  <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float animation-delay-300"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                  <h2 className="heading-lg mb-6">
                    Pronto para fazer parte
                    <span className="block text-yellow-300">da nossa família?</span>
                  </h2>
                  <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
                    Junte-se a mais de 500 famílias que já descobriram o que é ter um pet verdadeiramente feliz e bem
                    cuidado.
                    <strong> Sua primeira consulta é totalmente gratuita!</strong>
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <Button
                      size="lg"
                      className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-4 text-lg font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group"
                    >
                      Agendar consulta gratuita
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-10 py-4 text-lg font-bold bg-transparent backdrop-blur-sm"
                    >
                      Conhecer nossos serviços
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
