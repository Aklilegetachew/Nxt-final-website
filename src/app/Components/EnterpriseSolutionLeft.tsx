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

export default function EnterpriseLeft({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  backgroundImageSrc,
  className,
  companyName,
  breakIndex,
}: EnterpriseSolutionProps) {
  const processedDescription = description.replace("NXT", companyName || "NXT")

  const words = title.split(" ")

  // If no breakIndex provided or invalid, just render normally
  if (!breakIndex || breakIndex < 1 || breakIndex >= words.length) {
    return (
      <h1 className="mb-4 text-4xl font-extrabold leading-tight text-{#341C1C} md:text-5xl lg:text-6xl">
        {title}
      </h1>
    )
  }

  const firstLine = words.slice(0, breakIndex).join(" ")
  const secondLine = words.slice(breakIndex).join(" ")

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-secondary pt-20 md:pt-28 lg:pt-32",
        className
      )}
    >
      <div className="absolute left-0 top-0 h-[300px] w-[300px] bg-primary opacity-30 pointer-events-none rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="mb-20 text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-primary md:text-5xl lg:text-6xl">
            <span className="block">{firstLine}</span>
            <span className="block">{secondLine}</span>
          </h1>
          ;
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="relative grid gap-14 md:grid-cols-2 md:gap-16 lg:gap-20 items-center">
          <div className="relative w-full">
            <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-tl-[8rem] rounded-br-[8rem] shadow-lg">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
              {processedDescription}
            </p>
          </div>

          {backgroundImageSrc && (
            <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
              <Image
                src={backgroundImageSrc}
                alt="Background illustration"
                width={400}
                height={200}
                className="object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
