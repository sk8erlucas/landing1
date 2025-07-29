"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Clock, Shield, CreditCard, Smartphone, CheckCircle, Users } from "lucide-react"
import Image from "next/image"

export default function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    {
      icon: Clock,
      title: "TV el Mismo Día",
      description: "Aprobación rápida y entrega inmediata. Tu familia no puede esperar más.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Shield,
      title: "Compra Segura",
      description: "Proceso confiable y protegido. Tu sueño está en buenas manos.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: CreditCard,
      title: "Pagos Cómodos",
      description: "Cuotas semanales que se adaptan a tu presupuesto familiar.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Smartphone,
      title: "Proceso Simple",
      description: "Todo desde tu celular. Tan fácil como elegir qué ver en tu nueva TV.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: CheckCircle,
      title: "Sin Complicaciones",
      description: "Solo necesitas ganas de disfrutar en grande con tu familia.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Users,
      title: "Como Familia",
      description: "Te acompañamos hasta que tengas tu TV en casa, funcionando perfecta.",
      color: "bg-purple-100 text-purple-600",
    },
  ]

  return (
    <section id="beneficios" ref={ref} className="py-20 bg-gradient-to-br from-purple-50 to-violet-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6 font-heading">¿Por qué elegir tu TV con abuelito?</h2>
          <p className="text-xl text-purple-700 max-w-3xl mx-auto">
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
              className="bg-white/80 backdrop-blur-sm border border-purple-100 rounded-2xl p-8 hover:shadow-xl hover:bg-white transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-full ${benefit.color} flex items-center justify-center mb-6`}>
                <benefit.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-4 font-heading">{benefit.title}</h3>
              <p className="text-purple-700 leading-relaxed font-body font-semibold">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-purple-600 via-purple-700 to-violet-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl border-4 border-purple-200"
        >
          <div className="flex justify-center mb-6">
            <Image
              src="/watching_tv.jpg"
              alt="Familia mexicana disfrutando televisión"
              width={360}
              height={360}
              className="rounded-full border-4 border-white/20 object-cover"
            />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 font-heading">¿Listo para conseguir lo que necesitas?</h3>
          <p className="text-xl mb-8 opacity-90 font-body font-semibold">Miles de familias ya han confiado en nosotros para conseguir la TV de sus sueños</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const phoneNumber = "+5218125961512"
                const message = "¡Hola! Me interesa conseguir una TV nueva. ¿Podrían ayudarme con el proceso?"
                const encodedMessage = encodeURIComponent(message)
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
                window.open(whatsappUrl, "_blank")
              }}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors font-body"
            >
              Conseguir Mi TV
            </button>
            <button
              onClick={() => {
                const phoneNumber = "+5218125961512"
                const message = "¡Hola! Tengo preguntas sobre los préstamos para TV. ¿Me pueden ayudar?"
                const encodedMessage = encodeURIComponent(message)
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
                window.open(whatsappUrl, "_blank")
              }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors font-body"
            >
              Hablar por WhatsApp
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
