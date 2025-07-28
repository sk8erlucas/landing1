"use client"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import CalculatorSection from "@/components/calculator-section"
import BenefitsSection from "@/components/benefits-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import WhatsAppButton from "@/components/whatsapp-button"
import Navbar from "@/components/navbar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CalculatorSection />
        <BenefitsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <WhatsAppButton />
    </div>
  )
}
