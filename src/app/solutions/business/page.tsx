"use client"

import PainPointsSection from "@/app/Components/beforeAfter"
import { Footer } from "@/app/Components/footer"
import { Header } from "@/app/Components/header"
import NShapeHero from "@/app/Components/NShapeHero"
import PreviousWorks from "@/app/Components/PreviousWorks"
import ProcessRopeSteps from "@/app/Components/processes"

export default function Bussiness() {
  const projects = [
    {
      title: "ERP System",
      description:
        "A comprehensive platform to streamline finance, HR, inventory, and operations for growing businesses.",
      imageUrl: "/projects/erp.jpg",
      modules: [
        "Procurement Management",
        "Inventory Management",
        "Financial Accounting",
        "Sales & CRM",
      ],
    },
    {
      title: "Hotel Reservation & Booking System",
      description:
        "An intuitive system for hotels to manage room bookings, reservations, payments, and customer communication.",
      imageUrl: "/projects/hotel.jpg",
      modules: [
        "Room Booking Management",
        "Payment & Billing System",
        "Customer Communication Tools",
        "Housekeeping & Maintenance Tracking",
      ],
    },
    {
      title: "Hospital Management System",
      description:
        "A robust solution that handles patient records, appointments, billing, pharmacy, and medical staff management.",
      imageUrl: "/projects/hospitalMagment.jpg",
      modules: [
        "Patient Records Management",
        "Appointment Scheduling",
        "Pharmacy & Inventory System",
        "Medical Billing & Insurance",
      ],
    },
  ]
  return (
    <main className="min-h-screen">
      <Header />
      <NShapeHero />
      <PainPointsSection />
      <ProcessRopeSteps />
      <PreviousWorks projects={projects} />
      <Footer />
    </main>
  )
}
