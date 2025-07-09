import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Eye, Mail, Lock, User, Phone, Heart, CheckCircle, Star, Gift, Sparkles } from "lucide-react"

export default function Register() {
  const benefits = [
    "Primeira consulta 100% gratuita",
    "Desconto de 20% no primeiro serviço",
    "Acesso prioritário aos especialistas",
    "Relatórios detalhados por WhatsApp",
    "Suporte 24/7 exclusivo",
  ]

  const socialProof = [
    { name: "Maria S.", text: "Melhor decisão que tomei para meu Rex!" },
    { name: "João P.", text: "Profissionais incríveis, super recomendo!" },
    { name: "Ana L.", text: "Minha Luna adora os cuidadores do Woof!" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700">
      <div className="container mx-auto px-4 py-6">
        <div className="bg-gray-50 rounded-3xl shadow-2xl overflow-hidden min-h-screen">
          <Header />

          <main className="px-8 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Benefits */}
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-6">
                    <Gift className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-700">Oferta Especial para Novos Clientes</span>
                  </div>

                  <h1 className="heading-lg text-gray-900 mb-6">
                    Junte-se ao Woof e<span className="text-gradient block">Transforme a Vida do Seu Pet</span>
                  </h1>

                  <p className="subheading mb-8">
                    Mais de 500 famílias já descobriram o segredo para ter um pet mais feliz, saudável e bem cuidado.
                    Seja a próxima história de sucesso!
                  </p>
                </div>

                {/* Benefits List */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <h3 className="heading-sm text-gray-900 mb-6">🎁 Benefícios Exclusivos Para Você:</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Proof */}
                <div className="bg-gradient-to-r from-purple-50 to-teal-50 p-8 rounded-3xl">
                  <h4 className="font-bold text-gray-900 mb-4">💬 O que nossos clientes dizem:</h4>
                  <div className="space-y-4">
                    {socialProof.map((testimonial, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <img
                          src={`https://randomuser.me/api/portraits/women/${30 + index}.jpg`}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full object-cover shadow-md"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900">"{testimonial.text}"</p>
                          <p className="text-xs text-gray-600">- {testimonial.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700 ml-2">4.9/5</span>
                    <span className="text-sm text-gray-600 ml-2">(500+ avaliações)</span>
                  </div>
                </div>

                {/* Urgency */}
                <div className="bg-red-50 border-2 border-red-200 p-6 rounded-3xl">
                  <div className="flex items-center space-x-2 mb-3">
                    <Sparkles className="w-5 h-5 text-red-600" />
                    <span className="font-bold text-red-700">⚡ Oferta Limitada!</span>
                  </div>
                  <p className="text-red-700 font-medium">
                    Apenas os primeiros 50 cadastros desta semana ganham desconto de 20% no primeiro serviço.
                    <strong> Restam apenas 12 vagas!</strong>
                  </p>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="max-w-md mx-auto w-full">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="heading-md text-gray-900 mb-2">Criar Conta Gratuita</h2>
                  <p className="text-gray-600">Comece sua jornada de cuidado premium hoje mesmo!</p>
                </div>

                <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-teal-50 pb-8">
                    <CardTitle className="text-2xl text-center text-gray-900">Cadastro Rápido</CardTitle>
                    <CardDescription className="text-center">
                      Preencha os dados abaixo e ganhe acesso imediato aos benefícios
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-8 space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="font-semibold">
                          Nome *
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <Input
                            id="firstName"
                            type="text"
                            placeholder="João"
                            className="pl-12 h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-xl"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="font-semibold">
                          Sobrenome *
                        </Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Silva"
                          className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-semibold">
                        E-mail *
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          className="pl-12 h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-semibold">
                        WhatsApp *
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(11) 99999-9999"
                          className="pl-12 h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="font-semibold">
                        Senha *
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="••••••••"
                          className="pl-12 pr-12 h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-xl"
                        />
                        <button className="absolute right-3 top-3 text-gray-400 hover:text-gray-600">
                          <Eye className="h-5 w-5" />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="font-semibold">
                        Confirmar Senha *
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="••••••••"
                          className="pl-12 pr-12 h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-xl"
                        />
                        <button className="absolute right-3 top-3 text-gray-400 hover:text-gray-600">
                          <Eye className="h-5 w-5" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="terms"
                        className="mt-1 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                        Concordo com os{" "}
                        <Link href="#" className="text-purple-600 hover:text-purple-700 font-medium">
                          Termos de Uso
                        </Link>{" "}
                        e{" "}
                        <Link href="#" className="text-purple-600 hover:text-purple-700 font-medium">
                          Política de Privacidade
                        </Link>
                      </Label>
                    </div>

                    <Button className="w-full h-14 btn-primary text-lg font-bold group">
                      <Gift className="w-5 h-5 mr-2" />
                      Criar Conta e Ganhar Benefícios
                      <Sparkles className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                    </Button>

                    <div className="relative">
                      <Separator />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-white px-4 text-sm text-gray-500 font-medium">ou continue com</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        variant="outline"
                        className="h-12 border-gray-200 hover:bg-gray-50 bg-transparent rounded-xl"
                      >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="currentColor"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="currentColor"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          />
                          <path
                            fill="currentColor"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          />
                        </svg>
                        Google
                      </Button>
                      <Button
                        variant="outline"
                        className="h-12 border-gray-200 hover:bg-gray-50 bg-transparent rounded-xl"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        Facebook
                      </Button>
                    </div>

                    <div className="text-center">
                      <span className="text-sm text-gray-600">
                        Já tem uma conta?{" "}
                        <Link href="/auth/login" className="text-purple-600 hover:text-purple-700 font-semibold">
                          Entrar agora
                        </Link>
                      </span>
                    </div>

                    {/* Security Badge */}
                    <div className="bg-green-50 p-4 rounded-xl text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">100% Seguro e Protegido</span>
                      </div>
                      <p className="text-xs text-green-600">
                        Seus dados estão protegidos com criptografia de nível bancário
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
