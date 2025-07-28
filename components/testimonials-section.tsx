"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      name: "María González",
      location: "Monterrey, NL",
      rating: 5,
      text: "Necesitaba una lavadora urgente y el abuelito me ayudó súper rápido. En menos de 2 horas ya tenía el dinero en mi cuenta. ¡Increíble!",
      purchase: "Lavadora Samsung",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Carlos Ramírez",
      location: "Mexicali, BC",
      rating: 5,
      text: "Mi hijo necesitaba una computadora para la escuela. El proceso fue súper fácil y los pagos semanales se ajustan perfecto a mi presupuesto.",
      purchase: "Laptop HP",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Ana Martínez",
      location: "Monterrey, NL",
      rating: 5,
      text: "La televisión de la sala se descompuso justo para la final del fútbol. Gracias al abuelito, pudimos ver el partido en una pantalla nueva.",
      purchase: 'Smart TV 55"',
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Roberto Silva",
      location: "Mexicali, BC",
      rating: 5,
      text: "Excelente servicio. Me ayudaron a conseguir el refrigerador que necesitaba para mi negocio. Muy recomendable, son de confianza.",
      purchase: "Refrigerador comercial",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section id="testimonios" ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Lo que dice nuestra familia</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Miles de familias mexicanas ya han confiado en nosotros para conseguir lo que necesitan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <Quote className="h-8 w-8 text-amber-200" />
              </div>

              <p className="text-gray-700 leading-relaxed mb-4 italic">"{testimonial.text}"</p>

              <div className="bg-amber-50 rounded-lg p-3">
                <p className="text-sm text-amber-700 font-medium">Compró: {testimonial.purchase}</p>
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
