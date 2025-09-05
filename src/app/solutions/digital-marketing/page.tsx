"use client"

import { Footer } from "@/app/Components/footer"
import { Header } from "@/app/Components/header"
import HeroSection from "@/app/Components/marketing-hero"

export default function Bussiness() {
  const projects = [
    {
      title: "ERP System",
      description:
        "A comprehensive platform to streamline finance, HR, inventory, and operations for growing businesses.",
      imageUrl: "/images/erp-system.jpg",
      modules: ["Microsoft", "Amazon", "IBM", "Oracle"],
    },
    {
      title: "Hotel Reservation & Booking System",
      description:
        "An intuitive system for hotels to manage room bookings, reservations, payments, and customer communication.",
      imageUrl: "/images/hotel-booking.jpg",
      modules: ["Marriott", "Hilton", "Hyatt", "Four Seasons"],
    },
    {
      title: "Hospital Management System",
      description:
        "A robust solution that handles patient records, appointments, billing, pharmacy, and medical staff management.",
      imageUrl: "/images/hospital-management.jpg",
      modules: [
        "Mayo Clinic",
        "Cleveland Clinic",
        "Johns Hopkins",
        "Mount Sinai",
      ],
    },
  ]
  return (
    <main className="min-h-screen text-primary ">
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
