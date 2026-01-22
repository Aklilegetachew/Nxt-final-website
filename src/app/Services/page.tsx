"use client"

import EnterpriseSolution from "@/app/Components/EnterpriseSolution"
import EnterpriseLeft from "@/app/Components/EnterpriseSolutionLeft"
import { Footer } from "@/app/Components/footer"
import { Header } from "@/app/Components/header"

export default function Services() {
  return (
    <main className="min-h-screen">
      <Header />
      <EnterpriseSolution
        title="Cloud Storage Solutions"
        subtitle="Public | Private | Hybrid"
        description="Modern businesses need flexible cloud storage solutions that scale with their needs. Our cloud storage options provide the perfect balance of performance, accessibility, and cost-effectiveness. Whether you need public cloud flexibility, private cloud security, or a hybrid approach, our team can design and implement the ideal solution for your organization's specific requirements."
        imageSrc="/4.jpg"
        imageAlt="Cloud server infrastructure"
        backgroundImageSrc="/server1.png"
        companyName="CloudTech"
        breakIndex={1}
      />

      <EnterpriseLeft
        title="Digital Asset Management"
        subtitle="MAM | DRM | Archiving"
        description="Organizations that work daily with digital content development and distribution are in need of solutions that make workflows easier and digital asset delivery more efficient. For businesses, the importance of DAM comes down to practical business benefits and considerations."
        imageSrc="/3.jpg"
        imageAlt="Cloud server infrastructure"
        backgroundImageSrc="/cloud.png"
        companyName="CloudTech"
        breakIndex={1}
      />

      <EnterpriseSolution
        className="mb-0"
        title="Virtualized Data Center Solutions"
        subtitle="SDC | SDN | SDS"
        description="For telcos and communications service providers, NXT works with leading data center technologies that enable our clients to expand market reach into new areas. As demand for more efficient networks arise, we realize that our clients are pressed to shift their business models and focus on new pricing and delivery models. As software-defined data centers become more sophisticated, and in the process replace legacy hardware devices, our goal is strengthen your business by enabling infrastructure advancements in networking, storage, processing and security as flexible and scalable virtualized services."
        imageSrc="/2.jpg"
        imageAlt="Cloud server infrastructure"
        backgroundImageSrc="/cloud.png"
        companyName="CloudTech"
        breakIndex={1}
      />

      <Footer />
    </main>
  )
}
