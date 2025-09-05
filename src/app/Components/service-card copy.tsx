import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function ServiceCard({
  title,
  description,
  imageSrc,
  buttonText,
  buttonLink,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-6 h-[180px] w-[220px]">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="mb-4 text-xl font-bold text-teal-900">{title}</h3>
      <p className="mb-6 text-gray-600">{description}</p>
      {buttonText && buttonLink && (
        <Button
          asChild
          className="rounded-md bg-teal-800 px-6 py-2 text-white hover:bg-teal-700"
        >
          {/* <a href={buttonLink}>{buttonText}</a> */}
        </Button>
      )}
    </div>
  );
}
