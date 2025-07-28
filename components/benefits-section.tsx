"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Clock, Shield, CreditCard, Smartphone, CheckCircle, Users } from "lucide-react"

export default function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    {
      icon: Clock,
      title: "TV el Mismo Día",
      description: "Aprobación rápida y entrega inmediata. Tu familia no puede esperar más.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Shield,
      title: "Compra Segura",
      description: "Proceso confiable y protegido. Tu sueño está en buenas manos.",
      color: "bg-sky-100 text-sky-600",
    },
    {
      icon: CreditCard,
      title: "Pagos Cómodos",
      description: "Cuotas semanales que se adaptan a tu presupuesto familiar.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Smartphone,
      title: "Proceso Simple",
      description: "Todo desde tu celular. Tan fácil como elegir qué ver en tu nueva TV.",
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      icon: CheckCircle,
      title: "Sin Complicaciones",
      description: "Solo necesitas ganas de disfrutar en grande con tu familia.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Users,
      title: "Como Familia",
      description: "Te acompañamos hasta que tengas tu TV en casa, funcionando perfecta.",
      color: "bg-sky-100 text-sky-600",
    },
  ]

  return (
    <section id="beneficios" ref={ref} className="py-20 bg-gradient-to-br from-sky-50 to-blue-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">¿Por qué elegir tu TV con abuelito?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Te ayudamos a conseguir la TV de tus sueños con la confianza y facilidad que tu familia merece
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm border border-sky-100 rounded-2xl p-8 hover:shadow-xl hover:bg-white transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-full ${benefit.color} flex items-center justify-center mb-6`}>
                <benefit.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para conseguir lo que necesitas?</h3>
          <p className="text-xl mb-8 opacity-90">Miles de familias ya han confiado en nosotros para mejorar su hogar</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Solicitar Préstamo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors">
              Hablar por WhatsApp
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
