import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Eye, Mail, Lock, Heart, ArrowRight, CheckCircle, Zap } from "lucide-react"

export default function Login() {
  const quickStats = [
    { number: "500+", label: "Pets Felizes" },
    { number: "4.9★", label: "Avaliação" },
    { number: "24/7", label: "Suporte" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700">
      <div className="container mx-auto px-4 py-6">
        <div className="bg-gray-50 rounded-3xl shadow-2xl overflow-hidden min-h-screen">
          <Header />

          <main className="px-8 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Welcome Back */}
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
                    <Heart className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-semibold text-purple-700">Bem-vindo de volta!</span>
                  </div>

                  <h1 className="heading-lg text-gray-900 mb-6">
                    Que Bom Te Ver
                    <span className="text-gradient block">Novamente! 🐾</span>
                  </h1>

                  <p className="subheading mb-8">
                    Acesse sua conta e continue cuidando do seu pet com os melhores profissionais. Seu melhor amigo está
                    esperando por você!
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <h3 className="heading-sm text-gray-900 mb-6 text-center">🏆 Conquistas da Nossa Comunidade</h3>
                  <div className="grid grid-cols-3 gap-6">
                    {quickStats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-black text-purple-600 mb-2">{stat.number}</div>
                        <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-gradient-to-r from-teal-50 to-purple-50 p-8 rounded-3xl">
                  <h4 className="font-bold text-gray-900 mb-4">📈 Atividade Recente:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-700">15 pets atendidos hoje</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-700">8 novos agendamentos</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-700">12 avaliações 5 estrelas</span>
                    </div>
                  </div>
                </div>

                {/* Quick Access */}
                <div className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-3xl">
                  <div className="flex items-center space-x-2 mb-3">
                    <Zap className="w-5 h-5 text-yellow-600" />
                    <span className="font-bold text-yellow-700">⚡ Acesso Rápido</span>
                  </div>
                  <p className="text-yellow-700 font-medium">
                    Faça login e agende um serviço em menos de 2 minutos.
                    <strong> Seus pets estão esperando!</strong>
                  </p>
                </div>
              </div>

              {/* Right Side - Login Form */}
              <div className="max-w-md mx-auto w-full">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="heading-md text-gray-900 mb-2">Entrar na Conta</h2>
                  <p className="text-gray-600">Acesse sua conta e continue cuidando do seu pet</p>
                </div>

                <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-teal-50 pb-8">
                    <CardTitle className="text-2xl text-center text-gray-900">Login Rápido</CardTitle>
                    <CardDescription className="text-center">
                      Digite suas credenciais para acessar sua conta
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-8 space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-semibold">
                        E-mail
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
                      <Label htmlFor="password" className="font-semibold">
                        Senha
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

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="remember"
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <Label htmlFor="remember" className="text-sm text-gray-600 font-medium">
                          Lembrar de mim
                        </Label>
                      </div>
                      <Link href="#" className="text-sm text-purple-600 hover:text-purple-700 font-semibold">
                        Esqueceu a senha?
                      </Link>
                    </div>

                    <Button className="w-full h-14 btn-primary text-lg font-bold group">
                      <Heart className="w-5 h-5 mr-2" />
                      Entrar na Minha Conta
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
                        Não tem uma conta?{" "}
                        <Link href="/auth/register" className="text-purple-600 hover:text-purple-700 font-semibold">
                          Cadastre-se grátis
                        </Link>
                      </span>
                    </div>

                    {/* Security Badge */}
                    <div className="bg-green-50 p-4 rounded-xl text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">Login Seguro</span>
                      </div>
                      <p className="text-xs text-green-600">Conexão protegida com criptografia SSL</p>
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
