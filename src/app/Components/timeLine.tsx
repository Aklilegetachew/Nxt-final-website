"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Milestone {
  year: string
  title: string
  description: string
  image: string
}

interface TimelineProps {
  milestones: Milestone[]
}

interface MilestoneItemProps extends Milestone {
  index: number
  isLast: boolean
}

function MilestoneItem({
  year,
  title,
  description,
  image,
  index,
  isLast,
}: MilestoneItemProps) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className="relative mb-24"
    >
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="flex">
          <div className="w-24 text-right pr-6">
            <div className="text-primary text-4xl font-bold">{year}</div>
          </div>

          <div className="relative">
            <div className="w-4 h-4 bg-foreground rounded-full z-10 mt-2" />
            {!isLast && (
              <div className="absolute w-0.5 bg-primary h-32 top-6 left-2" />
            )}
          </div>

          <div className="pl-6 flex-1">
            <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="relative flex items-start">
          {/* Left side content (for even indices) */}
          {isEven ? (
            <>
              <div className="w-[45%] pr-12 text-right">
                <div className="text-primary text-5xl font-bold mb-4">
                  {year}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {title}
                </h3>
                <p className="text-primary/70 mb-4">{description}</p>
                <div className="flex justify-end"></div>
              </div>
              <div className="w-[10%] flex justify-center">
                <div className="relative flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full z-10 mt-2" />
                  {!isLast && (
                    <div className="absolute w-0.5 bg-primary h-64 top-6" />
                  )}
                </div>
              </div>
              <div className="w-[45%] pl-12">
                <div className="relative w-full aspect-square max-w-[240px]">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute -left-8 -top-8 text-8xl text-primary font-bold opacity-20 select-none">
                    {year}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="w-[45%] pr-12">
                <div className="relative w-full aspect-square max-w-[240px] ml-auto">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    fill
                    className="object-cover text-primary"
                  />
                  <div className="absolute -right-8 -top-8 text-8xl text-primary font-bold opacity-20 select-none">
                    {year}
                  </div>
                </div>
              </div>
              <div className="w-[10%] flex justify-center">
                <div className="relative flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full z-10 mt-2" />
                  {!isLast && (
                    <div className="absolute w-0.5 bg-primary h-64 top-6" />
                  )}
                </div>
              </div>
              <div className="w-[45%] pl-12">
                <div className="text-primary text-5xl font-bold mb-4">
                  {year}
                </div>
                <h3 className="text-2xl font-bold text-primarymb-3">{title}</h3>
                <p className="text-primary/70 mb-4">{description}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Timeline({ milestones }: TimelineProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative py-12"
    >
      {/* Desktop central line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#0B032D] transform -translate-x-1/2" />

      {milestones.map((milestone, index) => (
        <MilestoneItem
          key={index}
          {...milestone}
          index={index}
          isLast={index === milestones.length - 1}
        />
      ))}
    </motion.div>
  )
}
