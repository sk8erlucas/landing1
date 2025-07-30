"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

// Función para abrir WhatsApp
const openWhatsApp = (message: string) => {
    const phoneNumber = "5218124747218" // +52 81 2474 7218
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
}

// Componente de animación reutilizable
const AnimatedSection = ({
    children,
    animation = "fade-up",
    delay = 0
}: {
    children: React.ReactNode
    animation?: "fade-up" | "fade-left"
    delay?: number
}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    const variants = {
        "fade-up": {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 }
        },
        "fade-left": {
            initial: { opacity: 0, x: 30 },
            animate: { opacity: 1, x: 0 }
        }
    }

    return (
        <motion.div
            ref={ref}
            initial={variants[animation].initial}
            animate={isInView ? variants[animation].animate : variants[animation].initial}
            transition={{ duration: 0.6, delay: delay / 1000 }}
        >
            {children}
        </motion.div>
    )
}

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4 lg:px-6">
                <AnimatedSection animation="fade-up">
                    <div className="grid md:grid-cols-4 gap-12">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-3">
                                <Image
                                    src="/icon0.svg"
                                    alt="Mi Abuelito Te Presta Logo"
                                    width={40}
                                    height={40}
                                    className="rounded-full hover:scale-110 transition-transform duration-300"
                                />
                                <div>
                                    <span className="text-xl font-bold">Mi Abuelito te presta</span>
                                </div>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                Más que una institución financiera, somos una familia que entiende tus necesidades y te acompaña en tu
                                crecimiento económico.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold">Préstamos</h3>
                            <ul className="space-y-3 text-gray-400">
                                {["$12,000", "$15,000", "$18,000", "$21,000"].map((amount, index) => (
                                    <AnimatedSection key={amount} animation="fade-left" delay={index * 100}>
                                        <li>
                                            <button
                                                onClick={() => openWhatsApp(`Hola, me interesa el préstamo de ${amount} pesos`)}
                                                className="hover:text-green-400 transition-all duration-300 text-left hover:translate-x-2"
                                            >
                                                Préstamo {amount}
                                            </button>
                                        </li>
                                    </AnimatedSection>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold">Links</h3>
                            <ul className="space-y-3 text-gray-400">
                                {[
                                    { text: "Inicio", id: "hero" },
                                    { text: "Beneficios", id: "benefits" },
                                    { text: "Testimonios", id: "testimonials" },
                                    { text: "Preguntas Frecuentes", id: "faq" },
                                    { text: "Calculadora", id: "calculator" },
                                ].map((item, index) => (
                                    <AnimatedSection key={item.text} animation="fade-left" delay={index * 100}>
                                        <li>
                                            <button
                                                onClick={() => {
                                                    const element = document.getElementById(item.id) || document.querySelector(`[data-section="${item.id}"]`)
                                                    if (element) {
                                                        element.scrollIntoView({ behavior: 'smooth' })
                                                    }
                                                }}
                                                className="hover:text-green-400 transition-all duration-300 text-left hover:translate-x-2"
                                            >
                                                {item.text}
                                            </button>
                                        </li>
                                    </AnimatedSection>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold">Contacto</h3>
                            <div className="space-y-4">
                                {[
                                    { icon: MapPin, text: "Mexicali, BC", subtext: "Av. Francisco I. Madero #2063" },
                                    { icon: MapPin, text: "Monterrey, NL", subtext: "Área Metropolitana" },
                                ].map((location, index) => (
                                    <AnimatedSection key={location.text} animation="fade-left" delay={index * 100}>
                                        <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
                                            <location.icon className="h-5 w-5 text-green-400" />
                                            <div>
                                                <div className="font-medium">{location.text}</div>
                                                <div className="text-sm text-gray-400">{location.subtext}</div>
                                            </div>
                                        </div>
                                    </AnimatedSection>
                                ))}

                                <AnimatedSection animation="fade-left" delay={200}>
                                    <button
                                        onClick={() => openWhatsApp("Hola, me gustaría hablar por teléfono con un asesor")}
                                        className="flex items-center space-x-3 hover:text-green-400 transition-all duration-300 hover:translate-x-2"
                                    >
                                        <Phone className="h-5 w-5 text-green-400" />
                                        <span>+52 81 2474 7218</span>
                                    </button>
                                </AnimatedSection>

                                <AnimatedSection animation="fade-left" delay={300}>
                                    <button
                                        onClick={() => openWhatsApp("Hola, me comunico desde la página web")}
                                        className="flex items-center space-x-3 hover:text-green-400 transition-all duration-300 hover:translate-x-2"
                                    >
                                        <Mail className="h-5 w-5 text-green-400" />
                                        <span>hola@miabuelitotepresta.mx</span>
                                    </button>
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={400}>
                    <div className="border-t border-gray-800 mt-12 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <p className="text-gray-400 text-sm">
                                &copy; {new Date().getFullYear()} Mi Abuelito te presta. Todos los derechos reservados.
                            </p>
                            <div className="flex items-center space-x-6 text-sm text-gray-400">
                                <span className="hover:text-green-400 transition-colors duration-300">Empresa 100% Mexicana</span>
                                <span>•</span>
                                <span className="hover:text-green-400 transition-colors duration-300">Regulada por CNBV</span>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </footer>
    )
}
