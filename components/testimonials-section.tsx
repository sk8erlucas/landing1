"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      name: "María González",
      location: "Guadalajara, JAL",
      rating: 5,
      text: "Siempre soñé con tener una Smart TV grande para ver películas con mis hijos. El abuelito hizo mi sueño realidad en solo 2 horas. ¡Ahora disfrutamos nuestras noches de película!",
      purchase: 'Smart TV Samsung 65"',
      image: "https://images.unsplash.com/photo-1559941089-d7a5552c7f96?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Carlos Ramírez",
      location: "Puebla, PUE",
      rating: 5,
      text: "Mi hijo quería una TV 4K para sus videojuegos. Los pagos semanales se ajustan perfecto a mi presupuesto y ver su sonrisa no tiene precio.",
      purchase: "TV 4K LG 55\" Gaming",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Ana Martínez",
      location: "Monterrey, NL",
      rating: 5,
      text: "La TV de la sala se descompuso justo para las fiestas navideñas. Gracias al abuelito, toda la familia pudo reunirse a ver películas en una pantalla increíble.",
      purchase: 'Smart TV OLED 55"',
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Roberto Silva",
      location: "Tijuana, BC",
      rating: 5,
      text: "Quería sorprender a mi esposa con la TV de sus sueños para nuestro aniversario. El servicio fue excelente y la entrega súper rápida. ¡Misión cumplida!",
      purchase: 'TV Premium 75" Samsung',
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
  ]

  return (
    <section id="testimonios" ref={ref} className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">Familias que cumplieron su sueño</h2>
          <p className="text-xl text-purple-700 max-w-3xl mx-auto">
            Miles de familias mexicanas ya disfrutan de la TV de sus sueños gracias al abuelito
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm border border-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-green-400 text-green-400" />
                    ))}
                  </div>
                </div>
                <Quote className="h-8 w-8 text-purple-200" />
              </div>

              <p className="text-gray-700 leading-relaxed mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>

              <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                <p className="text-sm text-purple-700 font-medium">📺 Compró: {testimonial.purchase}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <div className="flex items-center justify-center gap-8 mb-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">5,000+</div>
                <div className="text-sm text-gray-600">Familias atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">4.9</div>
                <div className="text-sm text-gray-600">Calificación promedio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">98%</div>
                <div className="text-sm text-gray-600">Clientes satisfechos</div>
              </div>
            </div>
            <p className="text-gray-600">Únete a la familia que ya confía en el abuelito</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
