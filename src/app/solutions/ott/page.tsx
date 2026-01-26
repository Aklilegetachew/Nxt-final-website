"use client"

import EnterpriseSolution from "@/app/Components/EnterpriseSolution"
import { Footer } from "@/app/Components/footer"
import { Header } from "@/app/Components/header"
import { Suspense } from "react"

export default function Ott() {
  return (
    <main className="min-h-screen">
      <Suspense>
        <Header />
        <EnterpriseSolution
          className="mb-16"
          title="Live Streaming"
          subtitle="VOD | IPTV | OTT"
          description="Today's viewers expect to access both live streaming and previously-aired episodes, at any time and on any device. Targeted advertising can unleash additional revenue streams by selling advertising space inside the user interface. NXT can help you deploy ad decision services based on your user demographics, so users are presented ads based on their interests and needs.

Our infrastructure consultancy is aimed at identifying the end-customer journey and the different touch points.

We will work with you and investigate all the workflows and objectives required to craft a solution that identifies with your organizational goals and customers expectations. We set you up for long-term success by having open and unbiased partnerships with a wide range of technology providers, enabling you to scale and customize your offering as the market evolves."
          imageSrc="/ott/ott.jpg"
          imageAlt="Cloud server infrastructure"
          backgroundImageSrc="/ott/icons.png"
          companyName="CloudTech"
          breakIndex={1}
        />

        <Footer />
      </Suspense>
    </main>
  )
}
