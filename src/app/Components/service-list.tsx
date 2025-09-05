"use client";

import type React from "react";

import { useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export default function ServicesShowcase({
  services,
}: {
  services: ServiceItem[];
}) {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const { top } = containerRef.current.getBoundingClientRect();
      const y = e.clientY - top;
      setMousePosition({ x: e.clientX, y });
    }
  };

  const handleMouseEnter = (id: string) => {
    setActiveService(id);
  };

  const handleMouseLeave = () => {
    setActiveService(null);
  };

  // Calculate background position based on mouse movement
  const getBackgroundPosition = () => {
    if (!containerRef.current) return { y: 0 };
    const { height } = containerRef.current.getBoundingClientRect();
    const movePercent = (mousePosition.y / height) * 10; 
    return { y: -5 + movePercent }; 
  };

  const backgroundPosition = getBackgroundPosition();

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-white text-gray-900 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 border-b pb-6">
          Our Expertise
        </h2>

      
        {services.map((service) => (
          <div
            key={`bg-${service.id}`}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 pointer-events-none z-0 opacity-0 ${
              activeService === service.id ? "opacity-20" : ""
            }`}
            style={{
              transform: `translateY(${backgroundPosition.y}%)`,
              transition: "transform 0.2s ease-out",
            }}
          >
            <Image
              src={service.image || "/placeholder.svg"}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
        ))}

  
        <div className="relative z-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 py-12 border-b relative transition-all duration-300 hover:bg-gray-50 w-full px-3 "
              onMouseEnter={() => handleMouseEnter(service.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="md:col-span-4">
                <h3 className="text-3xl font-bold">{service.title}</h3>
              </div>
              <div className="md:col-span-7">
                <p className="text-lg">{service.description}</p>
              </div>
              <div className="md:col-span-1 flex items-center justify-end">
                <ArrowUpRight className="w-6 h-6 text-gray-900" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
