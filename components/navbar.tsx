"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="text-xl font-bold text-gray-800">Tu Abuelito Te La Presta</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#inicio" className="text-gray-600 hover:text-amber-600 transition-colors">
            Inicio
          </a>
          <a href="#calculadora" className="text-gray-600 hover:text-amber-600 transition-colors">
            Calculadora
          </a>
          <a href="#beneficios" className="text-gray-600 hover:text-amber-600 transition-colors">
            Beneficios
          </a>
          <a href="#testimonios" className="text-gray-600 hover:text-amber-600 transition-colors">
            Testimonios
          </a>
          <Button className="bg-amber-600 hover:bg-amber-700">Solicitar Préstamo</Button>
        </div>
      </div>
    </motion.nav>
  )
}
