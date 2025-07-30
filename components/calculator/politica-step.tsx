"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, AlertCircle } from "lucide-react"

interface DocumentUploadStepProps {
  onNext: () => void
  onPrev: () => void
}

export default function PoliticaStep({ onNext, onPrev }: DocumentUploadStepProps) {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!acceptedTerms) {
      setError("Debes aceptar los términos y condiciones para continuar")
      return
    }

    setError(null)
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      onNext()
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Términos y Condiciones</h3>
        <p className="text-gray-600">Acepta nuestros términos para finalizar tu solicitud</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg max-h-60 overflow-y-auto">
          <h4 className="font-semibold mb-3">Términos y Condiciones del Préstamo</h4>
          <div className="text-sm text-gray-700 space-y-2">
            <p>Al solicitar este préstamo, acepto que:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>He proporcionado información veraz y completa</li>
              <li>Autorizo la verificación de mi información crediticia</li>
              <li>Acepto las tasas de interés y términos del préstamo</li>
              <li>Me comprometo a realizar los pagos en las fechas acordadas</li>
              <li>Entiendo las consecuencias del incumplimiento de pago</li>
            </ul>
            <p className="mt-3">
              <strong>Tasa de interés:</strong> La tasa aplicable será del 75.5% anual.
            </p>
            <p>
              <strong>Plazo:</strong> 26 semanas (6 meses)
            </p>
            <p>
              <strong>Comisiones:</strong> Sin comisión por apertura. Comisión por pago tardío del 3%.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Checkbox
            id="terms"
            checked={acceptedTerms}
            onCheckedChange={(checked: boolean) => setAcceptedTerms(checked)}
            className="mt-1"
          />
          <label htmlFor="terms" className="text-sm text-gray-700 leading-5">
            He leído y acepto los términos y condiciones del préstamo. Autorizo el procesamiento 
            de mis datos personales conforme a la Ley Federal de Protección de Datos Personales.
          </label>
        </div>

        {error && (
          <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <span className="text-red-700 text-sm">{error}</span>
          </div>
        )}

        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={onPrev}
            className="flex-1"
            disabled={isLoading}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Anterior
          </Button>
          
          <Button
            type="submit"
            className="flex-1 bg-green-600 hover:bg-green-700"
            disabled={!acceptedTerms || isLoading}
          >
            {isLoading ? "Procesando..." : "Finalizar Solicitud"}
          </Button>
        </div>
      </form>
    </div>
  )
}