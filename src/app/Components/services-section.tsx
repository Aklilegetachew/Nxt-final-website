import ServiceCard from "./service-card"

interface Service {
  title: string
  description: string
  imageSrc: string
  buttonText?: string
  buttonLink?: string
}

interface ServicesProps {
  services: Service[]
}

export default function ServicesSection({ services }: ServicesProps) {
  return (
    <div className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              buttonText={service.buttonText}
              buttonLink={service.buttonLink}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
