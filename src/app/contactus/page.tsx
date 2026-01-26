import ContactUs from "../Components/contactus"
import { Footer } from "../Components/footer"
import { Header } from "../Components/header"
import { Suspense } from "react"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Suspense>
        <Header />
        <ContactUs />
        <Footer />
      </Suspense>
    </main>
  )
}
