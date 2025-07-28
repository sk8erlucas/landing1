"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import LoanCalculator from "./loan-calculator"
import Image from "next/image"

export default function CalculatorSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="calculadora" ref={ref} className="py-20 bg-gradient-to-b from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
            Calcula tu TV soñada
          </h2>
          <p className="text-xl text-purple-800 max-w-3xl mx-auto">
            Descubre cuánto puedes obtener para tu nueva televisión y cuáles serían tus pagos semanales. 
            ¡Tu familia merece entretenimiento de calidad!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/calculator.jpeg"
              alt="Familia calculando préstamo"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <LoanCalculator />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
