import ServiceCard from "@/components/service-card"

export default function ServicesSection() {
  return (
    <section className="px-4 md:px-8 pb-12 md:pb-16">
      <div className="bg-gray-800 rounded-2xl md:rounded-3xl p-4 md:p-8 animate-fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <ServiceCard
            image="/placeholder.svg?height=120&width=120"
            title="Filhotes"
            description="Cuidado especializado para filhotes com muito amor e atenção"
            linkText="Saiba mais →"
            variant="dark"
          />

          <ServiceCard
            image="/placeholder.svg?height=120&width=120"
            title="Super Cão"
            description="Treinamento especializado para cães de todas as idades"
            linkText="Saiba mais →"
            variant="dark"
          />

          <ServiceCard
            image="/placeholder.svg?height=120&width=120"
            title="Alimentar com Amor"
            description="Alimente seu pet com carinho e anime-o com brinquedos"
            variant="purple"
          />

          <ServiceCard
            image="/placeholder.svg?height=120&width=120"
            title="Histórias Pet"
            description="Descubra histórias incríveis de pets e seus donos"
            badge="55+"
            badgeText="histórias"
            linkText="Ler histórias →"
            variant="teal"
          />
        </div>
      </div>
    </section>
  )
}
