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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className="relative mb-20"
    >
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="flex">
          <div className="w-20 text-right pr-4">
            <div className="text-secondary text-3xl font-bold">{year}</div>
          </div>

          <div className="relative">
            <div className="w-4 h-4 bg-secondary rounded-full z-10 mt-2" />
            {!isLast && (
              <div className="absolute w-0.5 bg-border h-28 top-6 left-[7px]" />
            )}
          </div>

          <div className="pl-4 flex-1">
            <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
            <p className="text-text-subtle text-sm">{description}</p>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="relative flex items-start">
          {isEven ? (
            <>
              {/* Left side content */}
              <div className="w-[45%] pr-12 text-right">
                <div className="text-secondary text-4xl font-bold mb-3">
                  {year}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {title}
                </h3>
                <p className="text-text-subtle">{description}</p>
              </div>
              
              {/* Center line */}
              <div className="w-[10%] flex justify-center">
                <div className="relative flex flex-col items-center">
                  <div className="w-5 h-5 bg-secondary rounded-full z-10 mt-2 border-4 border-white shadow-md" />
                  {!isLast && (
                    <div className="absolute w-0.5 bg-border h-56 top-7" />
                  )}
                </div>
              </div>
              
              {/* Right side image */}
              <div className="w-[45%] pl-12">
                <div className="relative w-full aspect-square max-w-[200px] rounded-lg overflow-hidden shadow-card">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Left side image */}
              <div className="w-[45%] pr-12">
                <div className="relative w-full aspect-square max-w-[200px] ml-auto rounded-lg overflow-hidden shadow-card">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
              </div>
              
              {/* Center line */}
              <div className="w-[10%] flex justify-center">
                <div className="relative flex flex-col items-center">
                  <div className="w-5 h-5 bg-secondary rounded-full z-10 mt-2 border-4 border-white shadow-md" />
                  {!isLast && (
                    <div className="absolute w-0.5 bg-border h-56 top-7" />
                  )}
                </div>
              </div>
              
              {/* Right side content */}
              <div className="w-[45%] pl-12">
                <div className="text-secondary text-4xl font-bold mb-3">
                  {year}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {title}
                </h3>
                <p className="text-text-subtle">{description}</p>
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
      transition={{ duration: 0.6 }}
      className="relative py-12"
    >
      {/* Desktop central line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2" />

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
