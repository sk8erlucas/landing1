"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Clock } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/hero2.jpg"
          alt="Familia disfrutando su nueva televisión"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-blue-800/20 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-blue-900"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold leading-tight mb-6"
            >
              ¡Cumple tu sueño de
              <span className="block text-blue-600 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">tener esa TV!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-blue-800 leading-relaxed"
            >
              Como un abuelo cariñoso, te ayudamos a conseguir la televisión que tanto deseas.
              <span className="block mt-2 text-blue-600 font-semibold">¡Tu familia se lo merece!</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-lg px-8 py-4 shadow-lg">
                Conseguir Mi TV
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-blue-600 border-blue-300 hover:bg-blue-50 hover:text-blue-700 text-lg px-8 py-4 bg-white/80 backdrop-blur-sm"
              >
                Calcular Cuotas
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-500" />
                <span className="text-sm text-blue-800">Aprobación en minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-500" />
                <span className="text-sm text-blue-800">100% seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-500" />
                <span className="text-sm text-blue-800">TV el mismo día</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200 shadow-xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Tipos de TV que puedes conseguir</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center border border-blue-200 hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-3">📺</div>
                  <span className="text-blue-900 text-sm font-semibold">Smart TV</span>
                  <p className="text-blue-700 text-xs mt-1">32&quot; - 75&quot;</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center border border-blue-200 hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-3">�️</div>
                  <span className="text-blue-900 text-sm font-semibold">4K Ultra HD</span>
                  <p className="text-blue-700 text-xs mt-1">Calidad premium</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center border border-blue-200 hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-3">�</div>
                  <span className="text-blue-900 text-sm font-semibold">Gaming TV</span>
                  <p className="text-blue-700 text-xs mt-1">Para gamers</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center border border-blue-200 hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-3">✨</div>
                  <span className="text-blue-900 text-sm font-semibold">OLED/QLED</span>
                  <p className="text-blue-700 text-xs mt-1">Última tecnología</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-blue-700 text-sm">Desde <span className="font-bold text-blue-900">$2,999</span> hasta <span className="font-bold text-blue-900">$49,999</span></p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-blue-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
