"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Clock, Shield, CreditCard } from "lucide-react"
import Image from "next/image"

export default function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    {
      icon: Clock,
      title: "Acreditación en menos de 48 horas",
      description: "Obtiene tu préstamo de forma rápida y sencilla. No pierdes tiempo.",
    },
    {
      icon: Shield,
      title: "Compra Segura",
      description: "Proceso confiable y protegido. Tu sueño está en buenas manos.",
    },
    {
      icon: CreditCard,
      title: "Pagos Cómodos",
      description: "Cuotas semanales que se adaptan a tu presupuesto familiar.",
    },
  ]

  return (
    <section id="beneficios" ref={ref} className="bg-white py-20">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center lg:gap-16">
          <div className="w-full space-y-12 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl font-semibold text-purple-900 capitalize lg:text-4xl font-heading">
                ¿Por qué confiar en <br /> mi Abuelito?
              </h1>

              <div className="mt-2">
                <span className="inline-block w-40 h-1 bg-green-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 ml-1 bg-green-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 ml-1 bg-green-500 rounded-full"></span>
              </div>
            </motion.div>

            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className="md:flex md:items-start md:-mx-4"
              >
                <span className="inline-block p-2 text-green-600 bg-green-100 rounded-xl md:mx-4 hover:bg-green-200 transition-colors duration-300">
                  <benefit.icon className="w-6 h-6" />
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-xl font-semibold text-purple-900 capitalize font-heading">
                    {benefit.title}
                  </h1>

                  <p className="mt-3 text-purple-700 font-body font-semibold">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-end"
          >
            <div className="flex items-center justify-center">
              <Image
                className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem]"
                src="/abuelito_base.png"
                alt="Mi abuelito te presta - Préstamos para TV"
                width={544}
                height={544}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 relative bg-gradient-to-r from-purple-600 via-purple-700 to-violet-700 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl border-4 border-purple-200 overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-20 -translate-y-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-400/20 rounded-full translate-x-16 translate-y-16 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-yellow-300/50 rounded-full animate-ping"></div>
          <div className="absolute top-1/4 right-1/3 w-4 h-4 bg-green-300/50 rounded-full animate-pulse"></div>

          <div className="relative z-10">
            <div className="flex justify-center mb-8">
              <div className="relative w-96 h-96 overflow-hidden rounded-full border-4 border-white/30 shadow-xl bg-white">
                {/* Imagen dividida diagonalmente */}
                <div className="absolute inset-0 w-full h-full">
                  {/* Lado izquierdo - imagen de TV */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/watching_tv.jpg')",
                      clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)"
                    }}
                  ></div>

                  {/* Lado derecho - logo completo del abuelito */}
                  <div
                    className="absolute inset-0 bg-white flex items-center justify-center"
                    style={{
                      clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)"
                    }}
                  >
                    <Image
                      src="/abuelito_base.png"
                      alt="Mi Abuelito Te Presta Logo"
                      width={220}
                      height={220}
                      className="object-contain ml-36"
                    />
                  </div>

                  {/* Línea divisoria vertical */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/60 transform -translate-x-0.5"></div>
                </div>

                {/* Decorative ring around image */}
                <div className="absolute -inset-2 rounded-full border-2 border-dashed border-white/40 animate-spin-slow"></div>
              </div>
            </div>

            <h3 className="text-3xl md:text-5xl font-bold mb-6 font-heading leading-tight">
              ¿Listo para conseguir
              <span className="block text-transparent bg-gradient-to-r from-yellow-300 to-green-300 bg-clip-text">
                lo que necesitas?
              </span>
            </h3>

            <p className="text-xl md:text-2xl mb-10 opacity-90 font-body font-semibold max-w-2xl mx-auto leading-relaxed">
              Miles de familias ya han confiado en nosotros para cumplir sus sueños
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => {
                  const element = document.getElementById('calculator') || document.querySelector('[data-section="calculator"]')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="group bg-white text-purple-600 px-10 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 font-body shadow-lg hover:shadow-xl hover:scale-105"
              >
                ¡Aplica Ahora!
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
