import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServicesSection from "./services-section"

interface Service {
  title: string
  description: string
  imageSrc: string
  buttonText?: string
  buttonLink?: string
}

interface HeroSectionProps {
  subtitle?: string
  title: string
  description?: string
  buttonText?: string
  buttonLink?: string
  secondaryTitle?: string
  secondarySubtitle?: string
  imageSrc?: string
  imageAlt?: string
  className?: string
  services?: Service[]
}

export default function HeroSection({
  subtitle = "DIGITAL MARKETING",
  title = "Expand Your Digital Presence",
  description,
  buttonText = "Contact Now",
  buttonLink = "/contact",
  secondaryTitle = "What We Do?",
  secondarySubtitle = "OUR SERVICES",
  imageSrc = "/placeholder.svg?height=600&width=600",
  imageAlt = "Digital marketing illustration",
  className = "",
  services = defaultServices,
}: HeroSectionProps) {
  return (
    <section className={`w-full overflow-hidden bg-secondary ${className}`}>
      {/* Main hero section */}
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute left-10 top-20 h-16 w-16 rotate-45 rounded-md bg-primary/10"></div>
        <div className="absolute right-1/4 top-10 h-10 w-10 rounded-full bg-primary/10"></div>
        <div className="absolute left-1/3 bottom-20 h-8 w-8 rounded-full bg-primary/10"></div>

        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="max-w-xl">
              <p className="mb-3 text-sm font-medium tracking-widest text-primary">
                {subtitle}
              </p>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary md:text-5xl">
                {title}
              </h1>
              {description && (
                <p className="mb-8 text-lg text-primary/80">{description}</p>
              )}
              <Button
                asChild
                className="rounded-md bg-primary px-8 py-6 text-base font-medium text-white hover:bg-primary/90"
              >
                <Link href={buttonLink}>{buttonText}</Link>
              </Button>
            </div>
            <div className="relative h-[400px] w-full md:h-[500px]">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={imageAlt}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Secondary section */}
      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2 text-sm font-medium tracking-widest text-primary">
            {secondarySubtitle}
          </p>
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            {secondaryTitle}
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-primary"></div>
        </div>
      </div>

      {/* Services section */}
      {services && services.length > 0 && (
        <ServicesSection services={services} />
      )}
    </section>
  )
}

const defaultServices: Service[] = [
  {
    title: "Search Engine Optimization",
    description:
      "Search engine optimization (SEO) is the art and science of getting pages to rank higher in search engines such as Google. Our SEO tools and implementation leads to an increase in traffic to our clients websites.",
    imageSrc: "/services/seo2.svg",
    buttonText: "Learn More",
    buttonLink: "services/seo2.svg",
  },
  {
    title: "Graphic Design",
    description:
      "It is important that your logo portrays your business in the correct way, leaving a lasting impression and engaging your audience. As a graphic design agency, our team of creative experts will also design all supporting graphics.",
    imageSrc: "/services/Graphic1.svg",
    buttonText: "View Designs",
    buttonLink: "/services/Graphic1.svg",
  },
  {
    title: "Social Media Activation",
    description:
      "Social media activation is a creative approach to how we bring experiences to our clients target audiences. We move beyond the traditional approach and create a valuable, customized social media experience and build lasting relationships.",
    imageSrc: "/services/socialMedia.svg",
    buttonText: "Activate Now",
    buttonLink: "/services/socialMedia.svg",
  },
  {
    title: "Video Production",
    description:
      "We’re a full-service digital marketing and video production agency. Any equipment or talent we don’t have immediate access to, we source for you. Tell us what you need – on-location camera crew, post-production assistance, directorial assistance, scripts – and leave the rest to us.",
    imageSrc: "/services/videoPro.svg",
    buttonText: "Get a Quote",
    buttonLink: "/services/videoPro.svg",
  },
]
