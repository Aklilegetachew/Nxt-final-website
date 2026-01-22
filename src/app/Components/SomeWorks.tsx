"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { ExternalLink } from "lucide-react"

interface PortfolioItem {
  id: number
  title: string
  author: string
  authorAvatar: string
  image: string
  tags: string[]
  category: string
  size: "small" | "medium" | "large" | "defualt"
  gradient?: string
  link?: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Tomoca Mobile App",
    author: "NXT Softwares",
    authorAvatar: "/placeholder.svg?height=32&width=32",
    image: "/projects/tomocaApp.png",
    tags: ["Mobile", "E-Commerce"],
    category: "Mobile App",
    size: "medium",
    link: "https://www.tomocacoffee.com",
  },
  {
    id: 3,
    title: "50+ Digital Projects",
    author: "NXT Softwares",
    authorAvatar: "/placeholder.svg?height=32&width=32",
    image: "/projects/allin1.png",
    tags: ["Branding", "Strategy"],
    category: "Digital Strategy",
    size: "large",
    link: "#",
  },
  {
    id: 2,
    title: "Referral Tracking System",
    author: "NXT Softwares",
    authorAvatar: "/placeholder.svg?height=32&width=32",
    image: "/projects/referal.png",
    tags: ["Analytics", "Marketing"],
    category: "Web Application",
    size: "medium",
    link: "#",
  },
]

function PortfolioCard({
  item,
  index,
}: {
  item: PortfolioItem
  index: number
}) {
  const [isHovered, setIsHovered] = useState(false)

  const getCardSize = () => {
    switch (item.size) {
      case "large":
        return "md:col-span-2 md:row-span-2"
      case "medium":
        return "md:col-span-1 md:row-span-1"
      case "small":
        return "md:col-span-1 md:row-span-1"
      case "defualt":
        return "md:col-span-2 md:row-span-2"
      default:
        return "md:col-span-2 md:row-span-2"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden rounded-lg shadow-card hover:shadow-card-hover transition-all duration-200 ${getCardSize()}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        {item.gradient ? (
          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
        ) : (
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {/* Category Tag */}
          <div className="mb-3">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary/90 text-primary rounded-sm">
              {item.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-white text-lg font-semibold mb-2 line-clamp-2">
            {item.title}
          </h3>

          {/* Author Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary text-white text-sm font-medium">
              N
            </div>
            <span className="text-white/80 text-sm">
              {item.author}
            </span>
          </div>
        </div>

        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-primary/40 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
              scale: isHovered ? 1 : 0.9,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-sm font-semibold hover:bg-secondary hover:text-primary transition-colors duration-200 shadow-lg"
            onClick={() => window.open(`${item.link}`, "_blank")}
          >
            View Project
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function SomeOfWorkCard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {portfolioItems.map((item, index) => (
        <PortfolioCard key={item.id} item={item} index={index} />
      ))}
    </motion.div>
  )
}
