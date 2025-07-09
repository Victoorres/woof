import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700">
      <div className="container mx-auto px-4 py-6">
        <div className="bg-gray-50 rounded-3xl shadow-2xl overflow-hidden">
          <Header />
          <HeroSection />
          <FeaturesSection />
          {/* <ServicesSection /> */}
          <TestimonialsSection />
          <CTASection />
        </div>
      </div>
    </div>
  )
}
