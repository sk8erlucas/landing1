"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
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

  const openWhatsApp = (message: string) => {
    const phoneNumber = "+5218131101218"
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  const calculateLoan = (index: number): LoanDetails => {
    const { amount, weeklyPayment } = loanOptions[index]
    const totalAmount = weeklyPayment * totalWeeks
    const interest = totalAmount - amount
    const baseInterest = interest / (1 + ivaRate)
    const iva = interest - baseInterest
    const totalWithIva = totalAmount

    const cat = ((totalWithIva / amount - 1) * (52 / totalWeeks)) * 100

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
      <Card className="bg-gray-50 border-0 shadow-lg">
        <CardContent className="p-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-lg font-medium text-gray-700">Importe a solicitar</h2>
            <div className="text-3xl font-bold text-green-600">
              {formatCurrency(loanOptions[selectedIndex].amount)}
            </div>
          </div>

          <div className="space-y-4">
            <Slider
              value={[selectedIndex]}
              onValueChange={([index]) => setSelectedIndex(index)}
              max={loanOptions.length - 1}
              step={1}
              className="w-full [&>span:first-child]:h-2 [&>span:first-child]:bg-green-200 [&_[role=slider]]:bg-green-600 [&_[role=slider]]:border-green-600 [&>span:first-child>span]:bg-green-600"
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
                <div className="text-lg font-semibold text-green-700 mb-2">
                  {loanDetails.totalPayments} PAGOS SEMANALES DE{" "}
                  {formatCurrency(loanDetails.weeklyPayment)}
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
                  <span className="text-green-600">
                    {formatCurrency(loanDetails.totalWithIva)}
                  </span>
                </div>
              </div>

              <div className="bg-green-50 p-3 rounded-lg">
                {/* <div className="text-xs text-green-700 font-medium mb-1">
                  CAT PROMEDIO: {loanDetails.cat}%
                </div> */}
                <div className="text-xs text-green-600">
                  *Costo Anual Total para fines informativos y de comparación
                </div>
              </div>
            </div>
          )}

          <Button
            onClick={() => {
              if (loanDetails) {
                openWhatsApp(
                  `¡Hola! Me interesa solicitar un préstamo de ${formatCurrency(
                    loanDetails.amount
                  )} con pagos semanales de ${formatCurrency(
                    loanDetails.weeklyPayment
                  )}. ¿Podrían ayudarme con el proceso?`
                )
              }
            }}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg"
          >
            Continuar
          </Button>

          <p className="text-xs text-gray-500 text-center leading-relaxed">
            Sujeto a aprobación crediticia. Las condiciones pueden variar de acuerdo al perfil de riesgo del cliente.
            Préstamos disponibles en Mexicali, BC y Monterrey, NL.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
