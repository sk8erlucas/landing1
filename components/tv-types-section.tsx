"use client"

import { motion } from "framer-motion"

export default function TvTypesSection() {
  return (
    <section className="py-12 bg-gradient-to-br from-purple-50 via-white to-violet-50 lg:hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-purple-900 mb-4">
            Tipos de TV que puedes conseguir
          </h2>
          <p className="text-purple-700 max-w-2xl mx-auto">
            Desde Smart TV básicas hasta la última tecnología OLED y QLED
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 gap-4 max-w-lg mx-auto"
        >
          <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg p-6 text-center border border-purple-200 hover:shadow-md transition-shadow">
            <div className="text-5xl mb-4">📺</div>
            <span className="text-purple-900 text-lg font-semibold block mb-2">Smart TV</span>
            <p className="text-purple-700 text-sm">32&quot; - 75&quot;</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-6 text-center border border-green-200 hover:shadow-md transition-shadow">
            <div className="text-5xl mb-4">🎬</div>
            <span className="text-purple-900 text-lg font-semibold block mb-2">4K Ultra HD</span>
            <p className="text-purple-700 text-sm">Calidad premium</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg p-6 text-center border border-purple-200 hover:shadow-md transition-shadow">
            <div className="text-5xl mb-4">🎮</div>
            <span className="text-purple-900 text-lg font-semibold block mb-2">Gaming TV</span>
            <p className="text-purple-700 text-sm">Para gamers</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-6 text-center border border-green-200 hover:shadow-md transition-shadow">
            <div className="text-5xl mb-4">✨</div>
            <span className="text-purple-900 text-lg font-semibold block mb-2">OLED/QLED</span>
            <p className="text-purple-700 text-sm">Última tecnología</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-8"
        >
          <div className="bg-white rounded-xl p-6 border border-purple-200 shadow-sm max-w-sm mx-auto">
            <p className="text-purple-700 text-lg">
              Desde <span className="font-bold text-green-600 text-xl">$2,999</span> hasta <span className="font-bold text-green-600 text-xl">$49,999</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
