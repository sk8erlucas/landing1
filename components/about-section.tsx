"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Users, Award, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-purple-50 to-violet-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/abuelito_idea.png"
              alt="Abuelito ayudando a la familia a conseguir su TV"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
              Como el amor de tu
              <span className="text-green-600 block bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">abuelito</span>
            </h2>

            <p className="text-xl text-purple-800 mb-8 leading-relaxed">
              Sabemos lo importante que es tener esa televisión que tanto deseas para tu hogar. Como un abuelito 
              cariñoso que quiere ver a su familia feliz, estamos aquí para hacer realidad tu sueño de tener 
              la TV perfecta.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-purple-900 mb-2">Con Amor</h3>
                <p className="text-sm text-purple-700">Cumplimos sueños como un abuelo cariñoso</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-purple-900 mb-2">Familias Felices</h3>
                <p className="text-sm text-purple-700">Miles de hogares ya tienen su TV soñada</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center"
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-purple-900 mb-2">Confianza</h3>
                <p className="text-sm text-purple-700">Expertos en hacer realidad deseos</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-center"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-purple-900 mb-2">Sueños Cumplidos</h3>
                <p className="text-sm text-purple-700">Tu TV nueva mejorará tu calidad de vida</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
