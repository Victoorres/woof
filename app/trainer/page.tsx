"use client"

import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Award, Users, Trophy, Heart, ArrowRight, Zap, CheckCircle } from "lucide-react"
import TrainerProfileModal from "@/components/trainer-profile-modal"
import { useState } from "react"

export default function Trainer() {
  const [selectedTrainer, setSelectedTrainer] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const programs = [
    {
      title: "Filhotes Felizes",
      duration: "6 semanas intensivas",
      price: "R$ 599",
      originalPrice: "R$ 799",
      description: "Programa completo para filhotes de 8-16 semanas com socialização e comandos básicos",
      features: ["Socialização segura", "Comandos essenciais", "Controle de mordidas", "Higiene básica"],
      badge: "Mais Popular",
      color: "from-yellow-500 to-orange-500",
      icon: "🐶",
    },
    {
      title: "Obediência Total",
      duration: "8 semanas transformadoras",
      price: "R$ 899",
      originalPrice: "R$ 1199",
      description: "Treinamento completo de obediência para cães adultos com resultados garantidos",
      features: ["Comandos avançados", "Caminhada perfeita", "Controle total", "Garantia de resultado"],
      badge: "Resultado Garantido",
      color: "from-blue-500 to-cyan-500",
      icon: "🎯",
    },
    {
      title: "Comportamento",
      duration: "12 semanas especializadas",
      price: "R$ 1299",
      originalPrice: "R$ 1699",
      description: "Solução definitiva para problemas comportamentais complexos e com abordagens eficazes",
      features: ["Agressividade", "Ansiedade", "Medos", "Comportamentos destrutivos"],
      badge: "Especializado",
      color: "from-red-500 to-pink-500",
      icon: "🧠",
    },
    {
      title: "Treinamento VIP",
      duration: "10 semanas exclusivas",
      price: "R$ 1599",
      originalPrice: "R$ 2199",
      description: "Programa exclusivo com atenção personalizada e resultados extraordinários",
      features: ["1:1 personalizado", "Truques avançados", "Competições", "Suporte 24/7"],
      badge: "Exclusivo",
      color: "from-purple-500 to-indigo-500",
      icon: "👑",
    },
  ]

  const trainers = [
    {
      id: 1,
      name: "Sarah Johnson",
      specialty: "Especialista em Comportamento Canino",
      experience: "8 anos transformando vidas",
      rating: 4.9,
      reviews: 156,
      location: "Centro da Cidade",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      certifications: ["CCPDT-KA", "CBCC-KA", "KPA-CTP"],
      specialties: ["Agressividade", "Ansiedade de Separação", "Treinamento de Filhotes"],
      price: "R$ 150",
      availability: "Seg-Sex 8h-18h",
      completedSessions: 280,
      successRate: 96,
      badge: "Comportamento",
      description: "Especialista em comportamento com foco em métodos positivos e resultados duradouros.",
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      specialty: "Mestre em Obediência Avançada",
      experience: "12 anos de excelência",
      rating: 4.8,
      reviews: 203,
      location: "Zona Norte",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      certifications: ["CPDT-KA", "KPA-CTP", "AKC-CGC"],
      specialties: ["Obediência Competitiva", "Comandos Avançados", "Cães de Trabalho"],
      price: "R$ 130",
      availability: "Ter-Sáb 7h-19h",
      completedSessions: 350,
      successRate: 94,
      badge: "Obediência",
      description: "Treinador certificado com especialização em obediência de alto nível e competições.",
    },
    {
      id: 3,
      name: "Emily Chen",
      specialty: "Consultora Comportamental Felina",
      experience: "6 anos especializados",
      rating: 4.7,
      reviews: 89,
      location: "Zona Oeste",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      certifications: ["CCBC", "IAABC", "AVSAB"],
      specialties: ["Problemas de Caixa de Areia", "Agressão Felina", "Enriquecimento Ambiental"],
      price: "R$ 140",
      availability: "Qua-Dom 9h-17h",
      completedSessions: 180,
      successRate: 92,
      badge: "Felinos",
      description: "Única especialista certificada em comportamento felino da região, com métodos únicos.",
    },
    {
      id: 4,
      name: "David Thompson",
      specialty: "Especialista em Socialização",
      experience: "10 anos criando vínculos",
      rating: 4.9,
      reviews: 134,
      location: "Zona Sul",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      certifications: ["CPDT-KA", "PSA", "CCPDT-KSA"],
      specialties: ["Socialização de Filhotes", "Integração Multi-pets", "Terapia Assistida"],
      price: "R$ 120",
      availability: "Seg-Sáb 8h-16h",
      completedSessions: 220,
      successRate: 98,
      badge: "Socialização",
      description: "Especialista em criar vínculos saudáveis entre pets e famílias, com taxa de sucesso excepcional.",
    },
  ]

  const handleViewProfile = (trainer: any) => {
    setSelectedTrainer(trainer)
    setIsModalOpen(true)
  }

  const successStories = [
    {
      petName: "Rex",
      ownerName: "Maria Silva",
      problem: "Agressividade extrema",
      result: "100% dócil em 8 semanas",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      trainerName: "Sarah Johnson",
    },
    {
      petName: "Luna",
      ownerName: "João Santos",
      problem: "Ansiedade de separação",
      result: "Calma total quando sozinha",
      image: "https://randomuser.me/api/portraits/men/28.jpg",
      trainerName: "Mike Rodriguez",
    },
    {
      petName: "Bella",
      ownerName: "Ana Costa",
      problem: "Não obedecia comandos",
      result: "Obediência perfeita",
      image: "https://randomuser.me/api/portraits/women/35.jpg",
      trainerName: "David Thompson",
    },
  ]

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
                <div className="inline-flex items-center space-x-2 bg-green-100 px-3 md:px-4 py-2 rounded-full mb-4 md:mb-6">
                  <Trophy className="w-3 md:w-4 md:h-4 h-3 text-green-600" />
                  <span className="text-xs md:text-sm font-semibold text-green-700">
                    Treinadores certificados internacionalmente
                  </span>
                </div>

                <h1 className="heading-xl text-gray-900 mb-4 md:mb-6">
                  Transforme seu pet com
                  <span className="text-purple-600 block">especialistas de elite</span>
                </h1>

                <p className="subheading max-w-4xl mx-auto mb-6 md:mb-8">
                  Nossos treinadores certificados internacionalmente já transformaram mais de 1.000 pets usando métodos
                  científicos comprovados. Resultados garantidos ou seu dinheiro de volta.
                </p>

                {/* Trust Indicators */}
                {/* <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 md:gap-8 mb-6 md:mb-8">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 md:w-5 md:h-5 h-4 text-green-500" />
                    <span className="text-xs md:text-sm font-semibold text-gray-700">Resultados em 30 dias</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 md:w-5 md:h-5 h-4 text-yellow-500" />
                    <span className="text-xs md:text-sm font-semibold text-gray-700">Certificação internacional</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 md:w-5 md:h-5 h-4 text-red-500" />
                    <span className="text-xs md:text-sm font-semibold text-gray-700">Métodos 100% positivos</span>
                  </div>
                </div> */}

                {/* CTA */}
                <Button className="btn-primary text-base md:text-lg px-6 md:px-10 py-3 md:py-4 group w-full sm:w-auto">
                  Agendar avaliação gratuita
                  <ArrowRight className="w-4 md:w-5 md:h-5 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-xs md:text-sm text-gray-600 mt-3">
                  Primeira consulta gratuita • Garantia de satisfação • Resultados em 30 dias
                </p>
              </div>
            </section>

            {/* Success Stories */}
            <section className="mb-12 md:mb-20">
              <div className="text-center mb-8 md:mb-12">
                <div className="inline-flex items-center space-x-2 bg-yellow-100 px-3 md:px-4 py-2 rounded-full mb-4 md:mb-6">
                  <Star className="w-3 md:w-4 md:h-4 h-3 text-yellow-600 fill-current" />
                  <span className="text-xs md:text-sm font-semibold text-yellow-700">
                    Histórias reais de transformação
                  </span>
                </div>
                <h2 className="heading-lg text-gray-900 mb-4">
                  Veja as transformações
                  <span className="text-purple-600 block">incríveis</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {successStories.map((story, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl card-hover border border-gray-100"
                  >
                    <div className="flex items-center space-x-3 md:space-x-4 mb-4">
                      <img
                        src={story.image || "/placeholder.svg"}
                        alt={story.ownerName}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-md"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm md:text-base">{story.ownerName}</h4>
                        <p className="text-xs md:text-sm text-gray-600">Dono(a) do {story.petName}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-red-50 p-3 rounded-xl">
                        <p className="text-xs md:text-sm font-semibold text-red-700">Problema:</p>
                        <p className="text-xs md:text-sm text-red-600">{story.problem}</p>
                      </div>

                      <div className="bg-green-50 p-3 rounded-xl">
                        <p className="text-xs md:text-sm font-semibold text-green-700">Resultado:</p>
                        <p className="text-xs md:text-sm text-green-600">✅ {story.result}</p>
                      </div>

                      <p className="text-xs text-purple-600 font-medium">Treinador: {story.trainerName}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Training Programs */}
            <section className="mb-12 md:mb-20">
              <div className="text-center mb-8 md:mb-12">
                <div className="inline-flex items-center space-x-2 bg-blue-100 px-3 md:px-4 py-2 rounded-full mb-4 md:mb-6">
                  <Zap className="w-3 md:w-4 md:h-4 h-3 text-blue-600" />
                  <span className="text-xs md:text-sm font-semibold text-blue-700">Programas especializados</span>
                </div>
                <h2 className="heading-lg text-gray-900 mb-4">
                  Programas que
                  <span className="text-purple-600 block">realmente funcionam</span>
                </h2>
                <p className="subheading max-w-3xl mx-auto">
                  Cada programa é cientificamente desenvolvido para resolver problemas específicos com garantia de
                  resultado.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {programs.map((program, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-xl text-center card-hover bg-white rounded-2xl md:rounded-3xl overflow-hidden relative"
                  >
                    {/* Badge */}
                    {program.badge && (
                      <div className="absolute top-3 md:top-4 left-3 md:left-4 z-10">
                        <Badge className="bg-red-500 text-white font-bold shadow-lg text-xs">🔥 {program.badge}</Badge>
                      </div>
                    )}

                    {/* Header with gradient */}
                    <div
                      className={`bg-gradient-to-br ${program.color} p-4 md:p-6 text-white relative overflow-hidden`}
                    >
                      <div className="absolute top-2 right-2 text-2xl md:text-4xl opacity-20">{program.icon}</div>
                      <div className="relative z-10 mt-8">
                        <h3 className="text-lg md:text-xl font-bold mb-2">{program.title}</h3>
                        <p className="text-xs md:text-sm opacity-90">{program.duration}</p>
                      </div>
                    </div>

                    <CardContent className="p-4 md:p-6">
                      <div className="mb-4">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                          <span className="text-2xl md:text-3xl font-black text-purple-600">{program.price}</span>
                          {program.originalPrice && (
                            <span className="text-base md:text-lg text-gray-500 line-through">
                              {program.originalPrice}
                            </span>
                          )}
                        </div>
                        {program.originalPrice && (
                          <span className="text-xs md:text-sm font-bold text-green-600">
                            Economize R${" "}
                            {Number.parseInt(program.originalPrice.replace("R$ ", "")) -
                              Number.parseInt(program.price.replace("R$ ", ""))}
                          </span>
                        )}
                      </div>

                      <p className="text-gray-600 mb-4 text-xs md:text-sm leading-relaxed">{program.description}</p>

                      <div className="space-y-2 mb-6">
                        {program.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs md:text-sm text-gray-700">
                            <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <Button className="w-full btn-primary text-sm md:text-base">Começar agora</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Trainers Grid - MOBILE OPTIMIZED */}
            <section className="mb-12 md:mb-20">
              <div className="text-center mb-8 md:mb-12">
                <div className="inline-flex items-center space-x-2 bg-purple-100 px-3 md:px-4 py-2 rounded-full mb-4 md:mb-6">
                  <Users className="w-3 md:w-4 md:h-4 h-3 text-purple-600" />
                  <span className="text-xs md:text-sm font-semibold text-purple-700">Equipe de elite</span>
                </div>
                <h2 className="heading-lg text-gray-900 mb-4">
                  Conheça nossos
                  <span className="text-purple-600 block">especialistas</span>
                </h2>
                <p className="subheading max-w-3xl mx-auto">
                  Treinadores certificados internacionalmente com anos de experiência e resultados comprovados.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {trainers.map((trainer) => (
                  <Card
                    key={trainer.id}
                    className="border-0 shadow-xl card-hover bg-white rounded-2xl md:rounded-3xl overflow-hidden"
                  >
                    <CardContent className="p-4 md:p-8">
                      {/* Mobile Layout */}
                      <div className="block md:hidden space-y-4">
                        {/* Trainer Image and Basic Info */}
                        <div className="flex items-center space-x-4">
                          <div className="relative flex-shrink-0">
                            <img
                              src={trainer.image || "/placeholder.svg"}
                              alt={trainer.name}
                              className="w-16 h-16 rounded-2xl object-cover shadow-lg"
                            />
                            {trainer.badge && (
                              <div className="absolute -top-1 -right-1 bg-yellow-400 text-yellow-900 text-xs font-bold px-1 py-0.5 rounded-full shadow-lg">
                                {trainer.badge}
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold text-gray-900 mb-1">{trainer.name}</h3>
                            <p className="text-purple-600 font-semibold text-sm mb-2">{trainer.specialty}</p>
                            <div className="text-right">
                              <div className="text-xl font-black text-purple-600">{trainer.price}</div>
                              <div className="text-xs text-gray-600">por sessão</div>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed">{trainer.description}</p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3">
                          <div className="text-center bg-purple-50 p-2 rounded-xl">
                            <div className="text-base font-bold text-purple-600">{trainer.successRate}%</div>
                            <div className="text-xs text-gray-600">Sucesso</div>
                          </div>
                          <div className="text-center bg-teal-50 p-2 rounded-xl">
                            <div className="text-base font-bold text-teal-600">{trainer.completedSessions}</div>
                            <div className="text-xs text-gray-600">Sessões</div>
                          </div>
                          <div className="text-center bg-yellow-50 p-2 rounded-xl">
                            <div className="text-base font-bold text-yellow-600">{trainer.rating}</div>
                            <div className="text-xs text-gray-600">Avaliação</div>
                          </div>
                        </div>

                        {/* Details */}
                        <div className="flex flex-col space-y-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Award className="w-4 h-4 mr-2" />
                            {trainer.experience}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {trainer.location}
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(trainer.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm font-semibold text-gray-700 ml-2">
                            {trainer.rating} ({trainer.reviews} avaliações)
                          </span>
                        </div>

                        {/* Specialties */}
                        <div>
                          <p className="text-sm font-semibold text-gray-700 mb-2">Especialidades:</p>
                          <div className="flex flex-wrap gap-1">
                            {trainer.specialties.map((specialty, idx) => (
                              <Badge key={idx} className="text-xs bg-purple-100 text-purple-700 hover:bg-purple-200">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Certifications */}
                        <div>
                          <p className="text-sm font-semibold text-gray-700 mb-2">Certificações:</p>
                          <div className="flex flex-wrap gap-1">
                            {trainer.certifications.map((cert, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs border-green-200 text-green-700">
                                ✓ {cert}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col space-y-2">
                          <Button className="w-full btn-primary">Agendar sessão</Button>
                          <Button
                            variant="outline"
                            className="w-full btn-outline bg-transparent hover:text-purple-600"
                            onClick={() => handleViewProfile(trainer)}
                          >
                            Ver perfil
                          </Button>
                        </div>
                      </div>

                      {/* Desktop Layout */}
                      <div className="hidden md:block">
                        <div className="flex items-start space-x-6">
                          {/* Trainer Image */}
                          <div className="relative flex-shrink-0">
                            <img
                              src={trainer.image || "/placeholder.svg"}
                              alt={trainer.name}
                              className="w-24 h-24 rounded-2xl object-cover shadow-lg"
                            />
                            {/* {trainer.badge && (
                              <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                                {trainer.badge}
                              </div>
                            )} */}
                          </div>

                          {/* Trainer Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{trainer.name}</h3>
                                <p className="text-purple-600 font-semibold mb-2 w-[90%]">{trainer.specialty}</p>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-black text-purple-600">{trainer.price}</div>
                                <div className="text-sm text-gray-600">por sessão</div>
                              </div>
                            </div>

                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">{trainer.description}</p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-4">
                              <div className="text-center bg-purple-50 p-2 rounded-xl">
                                <div className="text-lg font-bold text-purple-600">{trainer.successRate}%</div>
                                <div className="text-xs text-gray-600">Sucesso</div>
                              </div>
                              <div className="text-center bg-teal-50 p-2 rounded-xl">
                                <div className="text-lg font-bold text-teal-600">{trainer.completedSessions}</div>
                                <div className="text-xs text-gray-600">Sessões</div>
                              </div>
                              <div className="text-center bg-yellow-50 p-2 rounded-xl">
                                <div className="text-lg font-bold text-yellow-600">{trainer.rating}</div>
                                <div className="text-xs text-gray-600">Avaliação</div>
                              </div>
                            </div>

                            {/* Details */}
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                              <div className="flex items-center">
                                <Award className="w-4 h-4 mr-1" />
                                {trainer.experience}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {trainer.location}
                              </div>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center mb-4">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < Math.floor(trainer.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm font-semibold text-gray-700 ml-2">
                                {trainer.rating} ({trainer.reviews} avaliações)
                              </span>
                            </div>

                            {/* Specialties */}
                            <div className="mb-4">
                              <p className="text-sm font-semibold text-gray-700 mb-2">Especialidades:</p>
                              <div className="flex flex-wrap gap-1">
                                {trainer.specialties.map((specialty, idx) => (
                                  <Badge
                                    key={idx}
                                    className="text-xs bg-purple-100 text-purple-700 hover:bg-purple-200"
                                  >
                                    {specialty}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Certifications */}
                            <div className="mb-6">
                              <p className="text-sm font-semibold text-gray-700 mb-2">Certificações:</p>
                              <div className="flex flex-wrap gap-1">
                                {trainer.certifications.map((cert, idx) => (
                                  <Badge
                                    key={idx}
                                    variant="outline"
                                    className="text-xs border-green-200 text-green-700"
                                  >
                                    ✓ {cert}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex space-x-3">
                              <Button className="flex-1 btn-primary">Agendar sessão</Button>
                              <Button
                                variant="outline"
                                className="flex-1 btn-outline bg-transparent hover:text-purple-600"
                                onClick={() => handleViewProfile(trainer)}
                              >
                                Ver perfil
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Final CTA Section - MOBILE OPTIMIZED */}
            <section>
              <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-teal-600 rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16 text-center text-white relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
                  <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float animation-delay-300"></div>
                  <Trophy className="absolute top-20 right-1/4 w-6 h-6 md:w-8 md:h-8 text-yellow-300 animate-pulse opacity-50" />
                  <Star className="absolute bottom-20 left-1/3 w-4 h-4 md:w-6 md:h-6 text-yellow-300 animate-pulse animation-delay-500 opacity-50" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                  <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full mb-6 md:mb-8">
                    <Zap className="w-3 md:w-4 md:h-4 h-3 text-yellow-300" />
                    <span className="text-xs md:text-sm font-semibold">Oferta Especial - Limitada!</span>
                  </div>

                  <h2 className="heading-lg mb-4 md:mb-6">
                    Pronto para ver seu pet
                    <span className="block text-yellow-300">completamente transformado?</span>
                  </h2>

                  <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 opacity-90 leading-relaxed">
                    Junte-se a mais de 1.000 famílias que já viram seus pets se transformarem com nossos métodos
                    comprovados. <strong>Primeira avaliação é totalmente gratuita!</strong>
                  </p>

                  {/* Benefits */}
                  {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-10 max-w-2xl mx-auto text-left">
                    {[
                      "Avaliação comportamental gratuita",
                      "Plano personalizado para seu pet",
                      "Garantia de resultado em 30 dias",
                      "Suporte contínuo durante todo processo",
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2 md:space-x-3">
                        <CheckCircle className="w-4 md:w-5 md:h-5 h-4 text-green-300 flex-shrink-0" />
                        <span className="text-sm md:text-base font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div> */}

                  {/* CTA Buttons */}
                  <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-4 justify-center items-center mb-6 md:mb-8">
                    <Button
                      size="lg"
                      className="w-full md:w-auto bg-white text-purple-600 hover:bg-gray-100 px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group"
                    >
                      <Trophy className="w-4 md:w-5 md:h-5 h-4 mr-2 hidden md:inline" />
                      Agendar avaliação gratuita
                      <ArrowRight className="w-4 md:w-5 md:h-5 h-4 ml-2 group-hover:translate-x-1 transition-transform hidden md:inline" />
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full md:w-auto border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-bold bg-transparent backdrop-blur-sm"
                    >
                      Ver todos os programas
                    </Button>
                  </div>

                  {/* Urgency */}
                  <div className="bg-red-500/20 backdrop-blur-sm border border-red-300/30 rounded-xl md:rounded-2xl p-3 md:p-4 max-w-md mx-auto mb-4 md:mb-6">
                    <p className="text-xs md:text-sm font-bold text-yellow-300">⚡ Últimas 15 vagas desta semana!</p>
                    <p className="text-xs md:text-sm">Não perca a chance de transformar seu pet</p>
                  </div>

                  {/* Social Proof */}
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <div className="flex -space-x-2">
                      {[40, 41, 42, 43, 44].map((i) => (
                        <img
                          key={i}
                          src={`https://randomuser.me/api/portraits/women/${i}.jpg`}
                          alt="Cliente satisfeita"
                          className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white shadow-md"
                        />
                      ))}
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="text-xs md:text-sm font-bold">+1.000 pets transformados</p>
                      <p className="text-xs opacity-75">Seja o próximo caso de sucesso!</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Modal */}
      {selectedTrainer && (
        <TrainerProfileModal trainer={selectedTrainer} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  )
}
