'use client';

import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Star, ShoppingCart, Search, Filter, Heart, Zap, ArrowRight, CheckCircle, Award, Trophy } from 'lucide-react';
import { useState, useMemo } from 'react';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const categories = [
    { name: 'Todos', count: 139, icon: '🛍️' },
    { name: 'Ração e Petiscos', count: 45, icon: '🥘' },
    { name: 'Brinquedos', count: 32, icon: '🎾' },
    { name: 'Acessórios', count: 28, icon: '🎀' },
    { name: 'Saúde e Cuidados', count: 19, icon: '💊' },
    { name: 'Adestramento', count: 15, icon: '🎯' },
  ];

  const allProducts = [
    {
      id: 1,
      name: 'Ração Premium Royal Canin',
      category: 'Ração e Petiscos',
      price: 89.99,
      originalPrice: 109.99,
      rating: 4.8,
      reviews: 124,
      image:
        'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      badge: 'Mais Vendido',
      description: 'Nutrição científica premium para cães adultos',
      features: ['Rico em proteínas', 'Digestão fácil', 'Pelagem brilhante'],
    },
    {
      id: 2,
      name: 'Brinquedo Quebra-Cabeça Kong',
      category: 'Brinquedos',
      price: 49.99,
      rating: 4.6,
      reviews: 89,
      image:
        'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      badge: 'Novo',
      description: 'Estimulação mental e entretenimento duradouro',
      features: ['Material resistente', 'Estimula inteligência', 'Reduz ansiedade'],
    },
    {
      id: 3,
      name: 'Cama Ortopédica Memory Foam',
      category: 'Acessórios',
      price: 159.99,
      rating: 4.9,
      reviews: 156,
      image:
        'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Suporte ortopédico premium para melhor sono',
      features: ['Memory foam', 'Capa removível', 'Anti-alérgico'],
    },
    {
      id: 4,
      name: 'Shampoo Natural Orgânico',
      category: 'Saúde e Cuidados',
      price: 37.99,
      rating: 4.7,
      reviews: 67,
      image:
        'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Fórmula natural para pele sensível',
      features: ['100% natural', 'Sem parabenos', 'pH balanceado'],
    },
    {
      id: 5,
      name: 'Kit Clicker Profissional',
      category: 'Adestramento',
      price: 25.99,
      rating: 4.5,
      reviews: 43,
      image:
        'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Kit completo para treinamento positivo',
      features: ['Som consistente', 'Ergonômico', 'Guia incluso'],
    },
    {
      id: 6,
      name: 'Arranhador Torre Premium',
      category: 'Acessórios',
      price: 69.99,
      rating: 4.4,
      reviews: 78,
      image:
        'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Torre de arranhador com múltiplos níveis',
      features: ['Sisal natural', 'Base estável', 'Múltiplos níveis'],
    },
  ];

  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    if (selectedCategory !== 'Todos') {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [selectedCategory, searchTerm, sortBy]);

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
                <div className="inline-flex items-center space-x-2 bg-purple-100 px-3 md:px-4 py-2 rounded-full mb-4 md:mb-6">
                  <ShoppingCart className="w-3 md:w-4 md:h-4 h-3 text-purple-600" />
                  <span className="text-xs md:text-sm font-semibold text-purple-700">
                    Produtos premium selecionados
                  </span>
                </div>

                <h1 className="heading-xl text-gray-900 mb-4 md:mb-6">
                  Tudo para seu pet
                  <span className="text-gradient block pb-2">em um só lugar</span>
                </h1>

                <p className="subheading max-w-4xl mx-auto mb-6 md:mb-8">
                  Produtos cuidadosamente selecionados pelos nossos especialistas. Qualidade premium, preços justos e
                  entrega rápida para manter seu pet sempre feliz e saudável.
                </p>
              </div>
            </section>

            {/* Search and Filter Bar */}
            <div className="mb-8 bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Buscar produtos incríveis..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 h-14 border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-2xl text-lg"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Filter className="h-5 w-5 text-gray-600" />
                    <span className="font-medium text-gray-700">Ordenar:</span>
                  </div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 border border-gray-200 rounded-xl focus:border-purple-500 focus:ring-purple-500 font-medium"
                  >
                    <option value="name">Nome</option>
                    <option value="price-low">Menor Preço</option>
                    <option value="price-high">Maior Preço</option>
                    <option value="rating">Melhor Avaliação</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {/* Categories Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-3xl p-6 shadow-xl sticky top-8 border border-gray-100">
                  <h3 className="heading-sm text-gray-900 mb-6">Categorias</h3>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedCategory(category.name)}
                        className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 text-left group ${
                          selectedCategory === category.name
                            ? 'bg-gradient-to-r from-purple-500 to-teal-500 text-white shadow-lg'
                            : 'hover:bg-purple-50 text-gray-700 hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-xl">{category.icon}</span>
                          <span className="font-semibold">{category.name}</span>
                        </div>
                        <Badge
                          className={
                            selectedCategory === category.name
                              ? 'bg-white/20 text-white border-white/30'
                              : 'bg-purple-100 text-purple-700'
                          }
                        >
                          {category.name === 'Todos' ? allProducts.length : category.count}
                        </Badge>
                      </button>
                    ))}
                  </div>

                  {/* Filter Summary */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="bg-gradient-to-r from-purple-50 to-teal-50 p-4 rounded-2xl">
                      <p className="font-bold text-gray-900 mb-2">{filteredProducts.length} produtos encontrados</p>
                      {selectedCategory !== 'Todos' && (
                        <p className="text-sm text-purple-600 mb-1">📂 {selectedCategory}</p>
                      )}
                      {searchTerm && <p className="text-sm text-teal-600">🔍 "{searchTerm}"</p>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="lg:col-span-3">
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-20">
                    <div className="w-32 h-32 bg-gradient-to-r from-purple-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search className="w-16 h-16 text-gray-400" />
                    </div>
                    <h3 className="heading-sm text-gray-900 mb-4">Ops! Nenhum produto encontrado</h3>
                    <p className="subheading mb-6">Que tal tentar outros filtros ou termos de busca?</p>
                    <Button
                      onClick={() => {
                        setSelectedCategory('Todos');
                        setSearchTerm('');
                      }}
                      className="btn-primary"
                    >
                      Limpar Filtros
                    </Button>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-6">
                    {filteredProducts.map((product) => (
                      <Card
                        key={product.id}
                        className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group card-hover bg-white rounded-3xl overflow-hidden"
                      >
                        <CardHeader className="p-0 relative">
                          <div className="relative overflow-hidden">
                            <img
                              src={product.image || '/placeholder.svg'}
                              alt={product.name}
                              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {product.badge && (
                              <Badge
                                className={`absolute top-4 left-4 ${
                                  product.badge === 'Mais Vendido'
                                    ? 'bg-red-500 hover:bg-red-600 text-white'
                                    : 'bg-green-500 hover:bg-green-600 text-white'
                                } shadow-lg`}
                              >
                                {product.badge === 'Mais Vendido' ? '🔥' : '✨'} {product.badge}
                              </Badge>
                            )}

                            <div className="absolute top-4 right-4 flex space-x-2">
                              <Button
                                size="sm"
                                className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 text-gray-700 hover:bg-white hover:text-red-500 rounded-full w-10 h-10 p-0"
                              >
                                <Heart className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 text-gray-700 hover:bg-white hover:text-purple-600 rounded-full w-10 h-10 p-0"
                              >
                                <ShoppingCart className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="p-6">
                          <div className="mb-3">
                            <Badge
                              variant="outline"
                              className="text-xs font-semibold bg-purple-50 text-purple-700 border-purple-200"
                            >
                              {product.category}
                            </Badge>
                          </div>

                          <CardTitle className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                            {product.name}
                          </CardTitle>

                          <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                            {product.description}
                          </CardDescription>

                          {/* Features */}
                          {product.features && (
                            <div className="mb-4">
                              <div className="flex flex-wrap gap-1">
                                {product.features.slice(0, 2).map((feature, idx) => (
                                  <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                    ✓ {feature}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Rating */}
                          <div className="flex items-center mb-4">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm font-semibold text-gray-700 ml-2">{product.rating}</span>
                            <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                          </div>

                          {/* Price and CTA */}
                          <div className="flex items-center justify-between">
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                <span className="text-2xl font-black text-purple-600">R$ {product.price}</span>
                                {product.originalPrice && (
                                  <span className="text-sm text-gray-500 line-through">R$ {product.originalPrice}</span>
                                )}
                              </div>
                              {/* {product.originalPrice && (
                                <span className="text-xs font-semibold text-green-600">
                                  Economize R$ {(product.originalPrice - product.price).toFixed(2)}
                                </span>
                              )} */}
                            </div>
                            <Button className="btn-primary text-sm px-6 py-2">
                              <ShoppingCart className="w-4 h-4 mr-1" />
                              Comprar
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-20 bg-gradient-to-r from-purple-600 to-teal-600 rounded-3xl p-12 text-center text-white">
              <h3 className="heading-md mb-4">Não Encontrou o Que Procura?</h3>
              <p className="text-xl mb-8 opacity-90">
                Nossa equipe de especialistas pode ajudar você a encontrar o produto perfeito para seu pet!
              </p>
              <Button className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg">
                <Zap className="w-5 h-5 mr-2" />
                Falar com Especialista
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
