"use client";

import EnterpriseSolution from "@/app/Components/EnterpriseSolution";
import EnterpriseLeft from "@/app/Components/EnterpriseSolutionLeft";
import { Footer } from "@/app/Components/footer";
import { Header } from "@/app/Components/header";
import HeroSection from "@/app/Components/marketing-hero";
import Aboutus from "../Components/Aboutus";



export default function Storage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Aboutus />
      <Footer />
    </main>
  );
}
