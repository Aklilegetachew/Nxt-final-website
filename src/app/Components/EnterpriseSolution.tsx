import Image from "next/image"
import { cn } from "@/lib/utils"

interface EnterpriseSolutionProps {
  title: string
  subtitle?: string
  description: string
  imageSrc: string
  imageAlt: string
  backgroundImageSrc?: string
  className?: string
  companyName?: string
  breakIndex?: number
}

export default function EnterpriseSolution({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  backgroundImageSrc,
  className,
  companyName = "NXT",
  breakIndex,
}: EnterpriseSolutionProps) {
  const processedDescription = description
    .replace(/versavvy/gi, "nxt")
    .replace(/NXT/g, companyName)

  const words = title.split(" ")

  // If no breakIndex provided or invalid, just render normally
  if (!breakIndex || breakIndex < 1 || breakIndex >= words.length) {
    return (
      <section className={cn("section-padding bg-background", className)}>
        <div className="container-grid">
          <h1 className="mb-4 text-hero text-primary">
            {title}
          </h1>
        </div>
      </section>
    )
  }

  const firstLine = words.slice(0, breakIndex).join(" ")
  const secondLine = words.slice(breakIndex).join(" ")

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-background-alt pt-28 pb-20",
        className
      )}
    >
      {/* Decorative blur element */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] bg-secondary/20 opacity-30 pointer-events-none rounded-full blur-3xl"></div>

      <div className="container-grid">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold leading-tight text-primary">
            <span className="block">{firstLine}</span>
            <span className="block text-secondary">{secondLine}</span>
          </h1>
          {subtitle && (
            <p className="text-body-lg text-text-subtle max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Content Grid */}
        <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed text-text-subtle">
              {processedDescription}
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full">
            <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-lg shadow-card-hover">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
          </div>

          {/* Background decorative image */}
          {backgroundImageSrc && (
            <div className="absolute -bottom-10 -left-10 z-0 opacity-10 pointer-events-none">
              <Image
                src={backgroundImageSrc}
                alt="Background illustration"
                width={400}
                height={240}
                className="object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
