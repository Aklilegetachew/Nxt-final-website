"use client"

import { Footer } from "@/app/Components/footer"
import { Header } from "@/app/Components/header"
import HeroSection from "@/app/Components/marketing-hero"

export default function DigitalMarketing() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection
        subtitle="DIGITAL MARKETING"
        title="EXPAND YOUR DIGITAL PRESENCE"
        description="Our digital marketing team crafts data-driven strategies to boost your online visibility, engage your audience, and drive measurable business growth across all digital channels."
        buttonText="Get Started"
        secondarySubtitle="OUR APPROACH"
        secondaryTitle="How We Work"
        imageSrc="/services/DigtalMarketingBanner.svg?height=600&width=600"
        imageAlt="Web development illustration"
      />
      <Footer />
    </main>
  )
}
