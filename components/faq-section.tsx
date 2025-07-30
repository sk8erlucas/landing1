"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "¿Qué necesito para conseguir mi TV?",
    answer: "Solo necesitas ser mayor de edad, tener una identificación oficial vigente y comprobar ingresos mínimos de $8,000 mensuales. El proceso es muy sencillo y rápido."
  },
  {
    question: "¿Cuánto tiempo tarda la aprobación?",
    answer: "Nuestro proceso de aprobación es súper rápido. En la mayoría de los casos, puedes tener una respuesta en menos de 30 minutos y tener el dinero disponible para lo que necesites."
  },
  {
    question: "¿Puedo elegir el plazo de pago?",
    answer: "¡Por supuesto! Ofrecemos plazos flexibles desde 3 hasta 24 meses, para que puedas elegir la mensualidad que mejor se adapte a tu presupuesto familiar."
  },
  {
    question: "¿Hay algún enganche o pago inicial?",
    answer: "No necesariamente. Dependiendo de tu perfil crediticio, puedes obtener tu préstamo sin enganche o con un mínimo pago inicial. Evaluamos cada caso de manera personalizada."
  },
  {
    question: "¿Qué pasa si tengo historial crediticio negativo?",
    answer: "Entendemos que todos pasamos por momentos difíciles. Evaluamos cada solicitud de manera integral y tenemos opciones especiales para diferentes situaciones crediticias."
  }
]

function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg border border-purple-200 shadow-sm hover:shadow-md transition-shadow"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-lg"
      >
        <h3 className="text-lg font-semibold text-purple-900 pr-4 font-heading">
          {faq.question}
        </h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-purple-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-purple-600 flex-shrink-0" />
        )}
      </button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-4"
        >
          <p className="text-purple-700 leading-relaxed font-body">
            {faq.answer}
          </p>
        </motion.div>
      )}
    </motion.div>
  )
}

export default function FaqSection() {
  return (
    <section id="preguntas" className="py-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6 font-heading">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-purple-700 max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestro proceso para que puedas conseguir tu TV con total confianza
          </p>
        </motion.div>

        <div className="lg:flex lg:gap-12 lg:items-start max-w-7xl mx-auto">
          {/* FAQ Section */}
          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>

          {/* Image Section - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block lg:w-1/3 lg:sticky lg:top-20"
          >
            <div className="flex justify-center">
              <Image
                src="/abuelito_jumping.png"
                alt="Abuelito saltando de alegría por ayudar con préstamos"
                width={400}
                height={400}
                className="w-80 h-80 xl:w-96 xl:h-96 object-contain"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl p-8 border border-green-200 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              ¿Tienes otra pregunta?
            </h3>
            <p className="text-purple-700 mb-6">
              Nuestro equipo está aquí para ayudarte con cualquier duda que tengas sobre tu nueva TV
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/525512345678?text=Hola, tengo una pregunta sobre las TV"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                💬 Chatear por WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
