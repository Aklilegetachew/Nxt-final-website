"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export default function AnalyticsTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "")

    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("config", "G-D7N7QT3PYW", {
        page_path: url,
      })
    }
  }, [pathname, searchParams])

  return null
}
