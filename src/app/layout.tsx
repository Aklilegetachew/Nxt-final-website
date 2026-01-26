// app/layout.tsx
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ReactNode } from "react"
import Script from "next/script"
import AnalyticsTracker from "./Components/AnalyticsTracker"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Suspense } from "react"

// Load Inter font as primary (per design guide - clean, legible sans-serif)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
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
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/NXTNoBg.png`,
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
    logo: `${process.env.NEXT_PUBLIC_SITE_URL}/NXTNoBg.png`,
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D7N7QT3PYW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D7N7QT3PYW', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <AnalyticsTracker />
            {children}
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
