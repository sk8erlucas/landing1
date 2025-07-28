"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

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
    answer: "Nuestro proceso de aprobación es súper rápido. En la mayoría de los casos, puedes tener una respuesta en menos de 30 minutos y llevar tu TV el mismo día."
  },
  {
    question: "¿Qué marcas de televisiones manejan?",
    answer: "Trabajamos con las mejores marcas del mercado: Samsung, LG, Sony, TCL, Hisense y más. Tenemos opciones desde Smart TV básicas hasta tecnología OLED y QLED de última generación."
  },
  {
    question: "¿Puedo elegir el plazo de pago?",
    answer: "¡Por supuesto! Ofrecemos plazos flexibles desde 3 hasta 24 meses, para que puedas elegir la mensualidad que mejor se adapte a tu presupuesto familiar."
  },
  {
    question: "¿Hay algún enganche o pago inicial?",
    answer: "No necesariamente. Dependiendo de tu perfil crediticio, puedes obtener tu TV sin enganche o con un mínimo pago inicial. Evaluamos cada caso de manera personalizada."
  },
  {
    question: "¿Incluye garantía y servicio técnico?",
    answer: "Sí, todas nuestras televisiones incluyen la garantía completa del fabricante y servicio técnico especializado. Tu tranquilidad es nuestra prioridad."
  },
  {
    question: "¿Qué pasa si tengo historial crediticio negativo?",
    answer: "Entendemos que todos pasamos por momentos difíciles. Evaluamos cada solicitud de manera integral y tenemos opciones especiales para diferentes situaciones crediticias."
  },
  {
    question: "¿Hacen entregas a domicilio?",
    answer: "Sí, realizamos entregas gratuitas en la zona metropolitana. También ofrecemos instalación profesional para que disfrutes tu nueva TV desde el primer momento."
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

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
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
              <a
                href="#contacto"
                className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Contactar por teléfono
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
