"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b shadow-lg ${
        isScrolled 
          ? "bg-white border-gray-200" 
          : "bg-white/80 backdrop-blur-md border-white/20"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image
            src="/abuelito_base.png"
            alt="Mi Abuelito Te Presta Logo"
            width={60}
            height={60}
            className="rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110"
          />
          <span className="text-xl font-bold text-purple-900 font-heading">Mi abuelito te presta</span>
        </div>
        <Button
          onClick={() => {
            const element = document.getElementById('calculator') || document.querySelector('[data-section="calculator"]') || document.querySelector('.contact-section')
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }}
          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-md rounded-full px-6 py-2"
        >
          Solicitar Préstamo
        </Button>
      </div>
    </motion.nav>
  )
}
