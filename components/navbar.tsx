"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image
            src="/abuelito_base.png"
            alt="Tu Abuelito Te La Presta Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-xl font-bold text-purple-900 font-heading">Tu Abuelito Te La Presta</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#inicio" className="text-purple-700 hover:text-purple-600 transition-colors font-medium font-body">
            Inicio
          </a>
          <a href="#beneficios" className="text-purple-700 hover:text-purple-600 transition-colors font-medium font-body">
            Beneficios
          </a>
          <a href="#testimonios" className="text-purple-700 hover:text-purple-600 transition-colors font-medium font-body">
            Testimonios
          </a>
          <a href="#preguntas" className="text-purple-700 hover:text-purple-600 transition-colors font-medium font-body">
            Preguntas
          </a>
          <a href="#contacto" className="text-purple-700 hover:text-purple-600 transition-colors font-medium font-body">
            Contacto
          </a>
          <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-md">
            Solicitar TV Ahora
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}
