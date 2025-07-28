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
    <section ref={ref} className="py-20 bg-gradient-to-br from-purple-900 to-violet-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">¿Listo para tu TV soñada?</h2>
          <p className="text-xl text-green-200 max-w-3xl mx-auto">
            Contáctanos y en menos de 2 horas podrás estar disfrutando de tu nueva TV. Tu abuelito te está esperando.
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
                  <p className="text-green-200">+52 812 474 7218</p>
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
              <h4 className="font-bold text-lg mb-2">📺 ¡Tu TV te está esperando!</h4>
              <p className="mb-4">Escríbenos por WhatsApp y en 2 horas tendrás tu TV soñada</p>
              <Button className="bg-white text-green-600 hover:bg-gray-100 font-semibold">Chatear ahora</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/95 backdrop-blur-sm border border-purple-100 rounded-2xl p-8 text-gray-800">
              <h3 className="text-2xl font-bold mb-6">Solicita tu TV soñada</h3>

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
                  <label className="block text-sm font-medium mb-2">¿Qué TV quieres?</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                    <option>Smart TV 32&quot;</option>
                    <option>Smart TV 43&quot;</option>
                    <option>Smart TV 55&quot;</option>
                    <option>Smart TV 65&quot;</option>
                    <option>TV 4K Gaming</option>
                    <option>TV OLED Premium</option>
                    <option>TV 75&quot; o más grande</option>
                    <option>No estoy seguro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Cuéntanos tu sueño</label>
                  <Textarea placeholder="¿Para qué quieres tu TV? ¿Películas familiares, gaming, deportes? Cuéntanos..." rows={4} />
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 font-semibold">🚀 Solicitar mi TV ahora</Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
