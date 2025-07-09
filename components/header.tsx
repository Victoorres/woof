"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Início" },
    { href: "/about", label: "Sobre" },
    { href: "/services", label: "Serviços" },
    { href: "/products", label: "Produtos" },
    { href: "/trainer", label: "Treinadores" },
  ]

  return (
    <header className="px-8 py-6 bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <nav className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <span className="text-white text-xl font-bold">🐾</span>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
              <Sparkles className="w-2 h-2 text-yellow-800" />
            </div>
          </div>
          <div>
            <span className="text-2xl font-black text-gradient">Woof</span>
            <p className="text-xs text-gray-500 -mt-1">Pet Care Premium</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-semibold transition-all duration-300 relative ${
                pathname === item.href ? "text-purple-600" : "text-gray-700 hover:text-purple-600"
              }`}
            >
              {item.label}
              {pathname === item.href && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full"></div>
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <Link href="/auth/register">
          <Button className="hidden md:flex btn-primary">
            Começar Agora
            <Sparkles className="w-4 h-4 ml-2" />
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-200 animate-slide-up">
          <div className="flex flex-col space-y-4 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-semibold transition-colors ${
                  pathname === item.href ? "text-purple-600" : "text-gray-700 hover:text-purple-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/auth/register">
              <Button className="btn-primary w-fit">
                Começar Agora
                <Sparkles className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
