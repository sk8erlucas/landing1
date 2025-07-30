"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import PersonalInfoStep from "./personal-info-step"
import LoanAmountStep from "./loan-amount-step"
import DocumentUploadStep from "./document-upload-step"
import SuccessStep from "./success-step"
import { createSolicitud } from "@/services/solicitudesService"
import PoliticaStep from "./politica-step"
import StepIndicator from "./step-indicator"


export default function LoanApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    curp: "",
    email: "",
    sede: "",
    CLABE:"",
    motivo:"",
    amount: 12000,
    comprobanteDomicilio: "" as string | File | null,
  })

  const handleNextStep = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
    setCurrentStep((prev) => prev + 1)
  }

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1)
  }

  const handleSubmit = async () => {
    // Aquí se implementaría la lógica para enviar los datos al servidor
    console.log("Datos enviados:", formData)
    await createSolicitud(formData)
    // Simulamos un envío exitoso
    setCurrentStep(5)

  }

  return (
    
    <Card className="p-6 shadow-lg border-t-4 border-green-500 bg-white w-full max-w-md mx-auto min-h-[600px]">
      <StepIndicator currentStep={currentStep} totalSteps={4} />

      {currentStep === 1 && <LoanAmountStep initialAmount={formData.amount} onNext={handleNextStep} />}
      {currentStep === 2 && <PersonalInfoStep initialData={formData} onNext={handleNextStep} />}

      {currentStep === 3 && (
        <DocumentUploadStep
          onNext={() => handleNextStep({})}
          onPrev={handlePrevStep}
          onFileChange={(file) => setFormData((prev) => ({ ...prev, comprobanteDomicilio: file }))}
        />
      )}

      {currentStep === 4 && (
        <PoliticaStep
          onNext={handleSubmit}
          onPrev={handlePrevStep}
        />
      )}

      {currentStep === 5 && <SuccessStep />}
    </Card>
  )
}
