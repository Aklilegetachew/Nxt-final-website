// app/layout.tsx
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ReactNode } from "react"

// Load Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// Export static metadata for SEO and SSG
export const metadata: Metadata = {
  title: "NXT Software and Technology – Innovative Solutions from Ethiopia",
  description:
    "NXT Software and Technology offers ERP systems, mobile apps, digital media, and enterprise-grade solutions based in Ethiopia.",
  openGraph: {
    title: "NXT Software and Technology",
    description:
      "ERP, mobile, media, and enterprise solutions for Ethiopian businesses. Powered by NXT Software and Technology.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/NXTSmall.png`,
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NXT Software and Technology",
    description:
      "Ethiopian technology company offering innovative software and media solutions.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/NXTSmall.png`],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NXT Software and Technology",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    logo: `${process.env.NEXT_PUBLIC_SITE_URL}/NXTSmall.png`,
    sameAs: ["https://www.linkedin.com/company/nxt-trading-plc/"],
    description:
      "Ethiopia-based software and technology company offering ERP, mobile applications, digital media, and enterprise solutions.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Addis Ababa",
      addressCountry: "ET",
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
