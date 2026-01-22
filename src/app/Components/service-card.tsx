import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  imageSrc: string
  buttonText?: string
  buttonLink?: string
}

export default function ServiceCard({
  title,
  description,
  imageSrc,
  buttonText,
  buttonLink,
}: ServiceCardProps) {
  return (
    <div className="card-service p-6 rounded-lg bg-white border border-border hover:border-secondary transition-all duration-200 group">
      {/* Image Container */}
      <div className="relative mb-6 h-[180px] w-full overflow-hidden rounded-md bg-background-alt">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      
      {/* Content */}
      <h3 className="mb-3 text-card-title font-semibold text-primary">{title}</h3>
      <p className="mb-6 text-text-subtle text-sm leading-relaxed">{description}</p>
      
      {/* Button */}
      {buttonText && buttonLink && (
        <Button asChild variant="outline" size="sm" className="group/btn">
          <a href={buttonLink} className="flex items-center gap-2">
            {buttonText}
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
          </a>
        </Button>
      )}
    </div>
  )
}
