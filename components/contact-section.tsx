"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Tienes dudas? Contáctanos</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos aquí para ayudarte en todo momento. Tu abuelito siempre tiene tiempo para ti.
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
                <div className="bg-amber-600 w-12 h-12 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">WhatsApp</h4>
                  <p className="text-gray-300">+52 812 474 7218</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-amber-600 w-12 h-12 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-300">contacto@tuabuelitotelpresta.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-amber-600 w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Ubicación</h4>
                  <p className="text-gray-300">Mexicali, BC y Monterrey, NL</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-amber-600 w-12 h-12 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Horarios</h4>
                  <p className="text-gray-300">Lunes a Viernes: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-300">Sábados: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-amber-600 rounded-2xl">
              <h4 className="font-bold text-lg mb-2">¿Necesitas ayuda inmediata?</h4>
              <p className="mb-4">Escríbenos por WhatsApp y te respondemos al instante</p>
              <Button className="bg-white text-amber-600 hover:bg-gray-100">Chatear ahora</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl p-8 text-gray-800">
              <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nombre</label>
                    <Input placeholder="Tu nombre completo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Teléfono</label>
                    <Input placeholder="Tu número de WhatsApp" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="tu@email.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">¿Qué necesitas?</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Televisor</option>
                    <option>Computadora/Laptop</option>
                    <option>Electrodoméstico</option>
                    <option>Celular</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Mensaje</label>
                  <Textarea placeholder="Cuéntanos más detalles sobre lo que necesitas..." rows={4} />
                </div>

                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3">Enviar mensaje</Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
