"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import LoanApplicationForm from "@/components/calculator/loan-application-form"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-purple-900 to-violet-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">¡Calcula tu Préstamo!</h2>
          <p className="text-xl text-green-200 max-w-3xl mx-auto">
            Descubre cuánto puedes solicitar y cuáles serían tus pagos semanales. ¡Tus sueños están al alcance de tu mano!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8">Información de contacto</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">WhatsApp</h4>
                  <p className="text-green-200">+52 1 81 3110 1218</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-green-200">contacto@tuabuelitotelpresta.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Ubicación</h4>
                  <p className="text-green-200">Mexicali, BC y Monterrey, NL</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Horarios</h4>
                  <p className="text-green-200">Lunes a Viernes: 9:00 AM - 7:00 PM</p>
                  <p className="text-green-200">Sábados: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-green-500 rounded-2xl">
              <h4 className="font-bold text-lg mb-2">¡Tu préstamo te está esperando!</h4>
              <p className="mb-4">¡Completa el formulario y tu préstamo se acreditará en menos de 48 horas!</p>
              <Button 
                onClick={() => {
                  const phoneNumber = "+5218131101218"
                  const message = "¡Hola! Me interesa conseguir una TV nueva. ¿Podrían ayudarme con información?"
                  const encodedMessage = encodeURIComponent(message)
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
                  window.open(whatsappUrl, "_blank")
                }}
                className="bg-white text-green-600 hover:bg-gray-100 font-semibold"
              >
                ¡Aplica ahora!
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <LoanApplicationForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
