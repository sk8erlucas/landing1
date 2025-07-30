"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { CreditCard } from 'lucide-react'
import toast from 'react-hot-toast'

interface LoanAmountStepProps {
  initialAmount?: number
  onNext: (data: { amount: number, motivo:string }) => void
}

export default function LoanAmountStep({ initialAmount = 12000, onNext }: LoanAmountStepProps) {
  const [selectedAmount, setSelectedAmount] = useState(initialAmount)
  const [selectM, setSelectedMotivo] = useState<string>("")
  const [pago_semd, setpago_sem] = useState(675)

  // Opciones de montos fijos
  const amountOptions = [12000, 15000, 18000,21000]


  const handleCalc = async (amount: number) => {
    setSelectedAmount(amount)

    const capital = amount /26
    const amountIntereses = amount * 0.755
    const interescuotas = amountIntereses / 26
    const interescuotas_iva = interescuotas / (1 + 8 / 100)
    const iva_cuota = interescuotas - interescuotas_iva

    const pago_sem = interescuotas_iva + capital +iva_cuota

    console.log("capital",capital)
    console.log("interescuotas_iva",interescuotas_iva)
    console.log("iva_cuota",iva_cuota)

    console.log("pago_sem",pago_sem)
    setpago_sem(pago_sem)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectM || selectM === "") {
      toast.error('Por favor selecciona un motivo', {
        style: {
          background: '#ef4444',
          color: '#fff',
        },
      })
      return
    }

    onNext({ amount: selectedAmount, motivo: selectM })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-xl font-semibold text-center text-gray-900 mb-6">¿Cuánto necesitas?</h2>

      <div className="space-y-8">
        <div className="text-center">
          <div className="text-3xl font-bold text-green-700">${selectedAmount.toLocaleString()}</div>
          <p className="text-sm text-gray-700 mt-1">Selecciona el monto de tu préstamo</p>
        </div>

        <div className="px-4">
          <div className="relative">
            {/* Línea base del slider */}
            <div className="absolute h-1 bg-gray-300 left-0 right-0 top-1/2 -translate-y-1/2 rounded-full"></div>

            {/* Marcadores de valores */}
            <div className="relative h-10 flex justify-between items-center">
              {amountOptions.map((amount) => (
                <div
                  key={amount}
                  className="relative flex flex-col items-center"
                  onClick={() => handleCalc(amount)}
                >
                  <div
                    className={`w-6 h-6 rounded-full cursor-pointer z-10 transition-all ${
                      selectedAmount === amount
                        ? "bg-green-600 scale-125"
                        : "bg-white border-2 border-gray-300 hover:border-green-400"
                    }`}
                  ></div>
                  <span
                    className={`mt-2 text-sm ${
                      selectedAmount === amount ? "font-medium text-green-700" : "text-gray-700"
                    }`}
                  >
                    ${amount.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>



          </div>

            <div>
              <br></br>
              <Label htmlFor="motivo" className="text-gray-900 font-medium">Motivo del Préstamo</Label>
              <select
                id="motivo"
                name="motivo"
                value={selectM}
                onChange={(e) => setSelectedMotivo(e.target.value)}
                className={`w-full p-3 border-2 border-gray-300 rounded-md text-gray-900 bg-white focus:border-green-500 focus:outline-none`}
              >
<option value="">Selecciona un motivo</option>
<option value="consolidacion-de-deudas">Consolidación de deudas</option>
<option value="emergencias-medicas-o-familiares">Emergencias médicas o familiares</option>
<option value="facturas-vencidas-o-servicios-esenciales">Facturas vencidas o servicios esenciales</option>
<option value="reparaciones-o-mejoras-en-el-hogar">Reparaciones o mejoras en el hogar</option>
<option value="compra-o-reparacion-de-vehiculo">Compra o reparación de vehículo</option>
<option value="educacion">Educación (propia o familiar)</option>
<option value="pequeno-negocio-o-trabajo-propio">Pequeño negocio o trabajo por cuenta propia</option>
<option value="viaje-o-vacaciones">Viaje o vacaciones</option>
<option value="compra-de-electronicos-o-electrodomesticos">Compra de electrónicos o electrodomésticos</option>
<option value="regalos-o-celebraciones-personales">Regalos o celebraciones personales</option>

              </select>
            </div>

        </div>

        <div className="bg-gray-100 p-4 rounded-lg space-y-3 border border-gray-300">
          <h3 className="font-medium text-gray-800 flex items-center">
            <CreditCard className="h-4 w-4 mr-2 text-green-600" />
            Detalles del préstamo
          </h3>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="bg-white p-3 rounded border border-gray-300">
              <div className="text-gray-700 font-medium">Pago semanal estimado</div>
              <div className="font-semibold text-gray-900">
                ${Math.round(pago_semd)} <span className="text-xs">/ semana</span>
              </div>
            </div>
            <div className="bg-white p-3 rounded border border-gray-300">
              <div className="text-gray-700 font-medium">Plazo</div>
              <div className="font-semibold text-gray-900">26 semanas</div>
            </div>
            <div className="bg-white p-3 rounded border border-gray-300">
              <div className="text-gray-700 font-medium">Tasa de interés</div>
              <div className="font-semibold text-gray-900">75.5%</div>
            </div>
            <div className="bg-white p-3 rounded border border-gray-300">
              <div className="text-gray-700 font-medium">Monto total a pagar</div>
              <div className="font-semibold text-gray-900">${Math.round(selectedAmount + (selectedAmount * 0.755)).toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
          Continuar
        </Button>
      </div>
    </form>
  )
}
