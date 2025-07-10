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
        <Link href="/" className="flex items-center">
          <img
            src="/woof-logo.png"
            alt="Woof Logo"
            className="w-full h-10 md:w-full md:h-22 object-contain"
          />
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
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 rounded-full"></div>
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <Link href="/auth/register">
          <Button className="hidden md:flex btn-primary">
            Começar agora
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
                Começar agora
                <Sparkles className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
