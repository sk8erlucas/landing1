"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function SuccessStep() {
  return (
    <div className="text-center py-6 space-y-6">
      <div className="flex justify-center">
        <CheckCircle2 className="h-16 w-16 text-green-500" />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-800">¡Solicitud Enviada!</h2>
        <p className="text-gray-600">Hemos recibido tu solicitud de préstamo correctamente.</p>
      </div>

      <div className="bg-green-50 p-4 rounded-lg border border-green-100 text-left">
        <h3 className="font-medium text-green-800 mb-2">Próximos pasos:</h3>
        <ol className="list-decimal pl-5 text-sm text-gray-700 space-y-1">
          <li>Revisaremos tu información en las próximas 24 horas</li>
          <li>Recibirás un SMS con el estatus de tu solicitud</li>
          <li>
            En caso de aprobación, te enviaremos un enlace para firmar el contrato digitalmente
            <span className="block text-xs text-gray-500 mt-1">(El enlace será válido por 48 horas)</span>
          </li>
        </ol>
      </div>

      <div className="pt-4">
        <p className="text-sm text-gray-500 mb-4">¿Tienes alguna pregunta? Contáctanos al 800-123-4567</p>
        <Button onClick={() => window.location.reload()} className="bg-green-600 hover:bg-green-700">
          Iniciar nueva solicitud
        </Button>
      </div>
    </div>
  )
}
