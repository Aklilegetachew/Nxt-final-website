"use client"

import { Footer } from "@/app/Components/footer"
import { Header } from "@/app/Components/header"
import HeroSection from "@/app/Components/marketing-hero"
import Aboutus from "../Components/Aboutus"
import { Suspense } from "react"

export default function Storage() {
  return (
    <main className="min-h-screen">
      <Suspense>
        <Header />
        <Aboutus />
        <Footer />
      </Suspense>
    </main>
  )
}
