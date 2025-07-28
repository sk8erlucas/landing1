"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface LoanDetails {
  amount: number
  weeklyPayment: number
  totalPayments: number
  totalAmount: number
  interest: number
  iva: number
  totalWithIva: number
  cat: number
}

const loanOptions = [
  { amount: 12000, weeklyPayment: 840 },
  { amount: 15000, weeklyPayment: 1000 },
  { amount: 18000, weeklyPayment: 1200 },
  { amount: 21000, weeklyPayment: 1400 },
]

export default function LoanCalculator() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [loanDetails, setLoanDetails] = useState<LoanDetails | null>(null)

  const totalWeeks = 26
  const ivaRate = 0.16

  const calculateLoan = (index: number): LoanDetails => {
    const { amount, weeklyPayment } = loanOptions[index]
    const totalAmount = weeklyPayment * totalWeeks
    const interest = totalAmount - amount
    const baseInterest = interest / (1 + ivaRate)
    const iva = interest - baseInterest
    const totalWithIva = totalAmount
    const cat = (totalWithIva / amount - 1) * (52 / totalWeeks) * 100

    return {
      amount,
      weeklyPayment,
      totalPayments: totalWeeks,
      totalAmount,
      interest: Math.round(baseInterest * 100) / 100,
      iva: Math.round(iva * 100) / 100,
      totalWithIva: Math.round(totalWithIva * 100) / 100,
      cat: Math.round(cat * 10) / 10,
    }
  }

  useEffect(() => {
    setLoanDetails(calculateLoan(selectedIndex))
  }, [selectedIndex])

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 2,
    }).format(amount)

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="bg-white border-0 shadow-2xl">
        <CardContent className="p-8 space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-lg font-medium text-gray-700 font-heading">Importe a solicitar para tu TV</h3>
            <div className="text-3xl font-bold text-green-600">{formatCurrency(loanOptions[selectedIndex].amount)}</div>
          </div>

          <div className="space-y-4">
            <Slider
              value={[selectedIndex]}
              onValueChange={([index]) => setSelectedIndex(index)}
              max={loanOptions.length - 1}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500">
              {loanOptions.map((option, idx) => (
                <span key={idx}>{formatCurrency(option.amount)}</span>
              ))}
            </div>
          </div>

          {loanDetails && (
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-lg font-semibold text-purple-700 mb-2">
                  {loanDetails.totalPayments} PAGOS SEMANALES DE {formatCurrency(loanDetails.weeklyPayment)}
                </div>
              </div>

              <Separator />

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monto del préstamo:</span>
                  <span className="font-medium">{formatCurrency(loanDetails.amount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Intereses (base):</span>
                  <span className="font-medium">{formatCurrency(loanDetails.interest)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">IVA (16% sobre intereses):</span>
                  <span className="font-medium">{formatCurrency(loanDetails.iva)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-base">
                  <span className="text-gray-800">Total a pagar:</span>
                  <span className="text-green-600">{formatCurrency(loanDetails.totalWithIva)}</span>
                </div>
              </div>

              <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                <div className="text-xs text-purple-700">
                  📺 Simulación informativa para tu TV soñada
                </div>
                <div className="text-xs text-purple-600 mt-1">
                  *Costo Anual Total para fines informativos y de comparación
                </div>
              </div>
            </div>
          )}

          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-lg text-center">
            <div className="text-sm font-medium mb-1">🎉 ¡Simulación completada!</div>
            <div className="text-xs">Visita nuestro contacto para solicitar tu TV</div>
          </div>

          <p className="text-xs text-gray-500 text-center leading-relaxed">
            Sujeto a aprobación crediticia. Las condiciones pueden variar de acuerdo al perfil de riesgo del cliente.
            Préstamos disponibles en Mexicali, BC y Monterrey, NL.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
