"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    {
      title: "TV el Mismo Día",
      description: "Aprobación rápida y entrega inmediata. Tu familia no puede esperar más.",
      color: "bg-gradient-to-br from-green-400 to-emerald-500",
      textColor: "text-white",
      emoji: "⚡",
    },
    {
      title: "Compra Segura",
      description: "Proceso confiable y protegido. Tu sueño está en buenas manos.",
      color: "bg-gradient-to-br from-purple-500 to-violet-600",
      textColor: "text-white",
      emoji: "🛡️",
    },
    {
      title: "Pagos Cómodos",
      description: "Cuotas semanales que se adaptan a tu presupuesto familiar.",
      color: "bg-gradient-to-br from-amber-400 to-orange-500",
      textColor: "text-white",
      emoji: "💳",
    },
    {
      title: "Proceso Simple",
      description: "Todo desde tu celular. Tan fácil como elegir qué ver en tu nueva TV.",
      color: "bg-gradient-to-br from-cyan-400 to-blue-500",
      textColor: "text-white",
      emoji: "📱",
    },
    {
      title: "Sin Complicaciones",
      description: "Solo necesitas ganas de disfrutar en grande con tu familia.",
      color: "bg-gradient-to-br from-green-500 to-teal-600",
      textColor: "text-white",
      emoji: "✅",
    },
    {
      title: "Como Familia",
      description: "Te acompañamos hasta que tengas tu TV en casa, funcionando perfecta.",
      color: "bg-gradient-to-br from-pink-500 to-rose-600",
      textColor: "text-white",
      emoji: "👨‍👩‍👧‍👦",
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
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white/90 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden"
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-100/50 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-100/50 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                {/* Icon with gradient background and emoji */}
                <div className={`w-20 h-20 rounded-2xl ${benefit.color} flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
                  <div className="flex flex-col items-center">
                    <span className="text-lg">{benefit.emoji}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-purple-900 mb-4 font-heading group-hover:text-purple-700 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-purple-700 leading-relaxed font-body font-semibold group-hover:text-purple-600 transition-colors">
                  {benefit.description}
                </p>
                
                {/* Decorative accent */}
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-purple-400 to-green-400 rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
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
              <div className="relative">
                <Image
                  src="/watching_tv.jpg"
                  alt="Familia mexicana disfrutando televisión"
                  width={140}
                  height={140}
                  className="rounded-full border-4 border-white/30 object-cover shadow-xl"
                />
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
              Miles de familias ya han confiado en nosotros para conseguir 
              <span className="text-green-300 font-bold"> la TV de sus sueños</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => {
                  const phoneNumber = "528124747218"
                  const message = "¡Hola! Me interesa conseguir una TV nueva. ¿Podrían ayudarme con el proceso?"
                  const encodedMessage = encodeURIComponent(message)
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
                  window.open(whatsappUrl, "_blank")
                }}
                className="group bg-white text-purple-600 px-10 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 font-body shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3"
              >
                <span className="text-2xl group-hover:animate-bounce">📺</span>
                Conseguir Mi TV
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
