import { Metadata } from "next"
import BackgroundPaths from "./Components/BackgroundPath"
import { Footer } from "./Components/footer"
import { Header } from "./Components/header"
import { HeroSection } from "./Components/heroSection"
import { Partners } from "./Components/partners"
import PortfolioCards from "./Components/portfolioCard"
import Timeline from "./Components/timeLine"

export const metadata: Metadata = {
  title: "NXT Softwares – Innovative Ethiopian Software & Media Solutions",
  description:
    "Ethiopia-based NXT Softwares offers ERP, mobile apps, digital media, broadcasting, and business software solutions.",
  openGraph: {
    title: "NXT Softwares – Ethiopian Software & Media Solutions",
    description:
      "ERP, mobile apps, digital media, broadcasting, and business software tailored for Ethiopian enterprises.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-home.png`,
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/og-home.png`],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
}

export default function Home() {
  const milestones = [
    {
      year: "2015",
      title: "Launched Consulting & Technology Services",
      description:
        "Launched our consulting and technology services in a 40 SQM office in Addis Ababa.",
      image: "/step1.svg?height=240&width=240",
    },
    {
      year: "2020",
      title: "Major Project Deployment",
      description:
        "Deployed Health Network Signage and Website System for leading Ethiopian Pharmacy Network.",
      image: "/step2.svg?height=240&width=240",
    },
    {
      year: "2023",
      title: "Company Expansion",
      description:
        "Moved to new company headquarters with infrastructure to support increased software development.",
      image: "/step3.svg?height=240&width=240",
    },
    {
      year: "2025",
      title: "Digital Platform Launch",
      description:
        "Launched digital e-commerce and booking platform for two world-renowned Ethiopian companies.",
      image: "/lastStep.svg?height=240&width=240",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      
      {/* Our Story Section */}
      <section
        aria-labelledby="our-story"
        className="section-padding bg-background"
      >
        <div className="container-grid">
          <div className="text-center mb-16">
            <span className="text-label text-secondary mb-4 block">OUR JOURNEY</span>
            <h2 className="text-section text-primary mb-6">Our Story</h2>
            <p className="text-body-lg text-text-subtle max-w-3xl mx-auto">
              We&apos;re a software development firm that helps our clients succeed
              with innovative, software-centric solutions. We design, integrate,
              and support cutting-edge media and communication technologies for a
              connected world.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <Timeline milestones={milestones} />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="Explore" className="section-padding bg-background-alt">
        <div className="container-grid">
          <div className="text-center mb-16">
            <span className="text-label text-secondary mb-4 block">OUR WORK</span>
            <h2 className="text-section text-primary mb-6">Our Portfolio</h2>
            <p className="text-body-lg text-text-subtle max-w-2xl mx-auto">
              Discover our latest projects and creative solutions that have
              helped businesses transform digitally.
            </p>
          </div>
          <PortfolioCards />
        </div>
      </section>
      
      <Partners />
      <BackgroundPaths />
      <Footer />
    </main>
  )
}
