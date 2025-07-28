"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const openWhatsApp = () => {
    const phoneNumber = "528124747218"
    const message = "📺 ¡Hola! Me interesa conseguir la TV de mis sueños. ¿Me pueden ayudar con los pagos?"
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={openWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-colors duration-300"
      >
        <MessageCircle className="h-8 w-8" />
      </motion.button>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap flex flex-col justify-center"
      >
        <div className="text-sm font-medium">📺 ¡Tu TV te espera!</div>
        <div className="text-xs text-gray-600">Chatea para conseguirla</div>
        <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
      </motion.div>
    </motion.div>
  )
}
