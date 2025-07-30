interface StepIndicatorProps {
  currentStep: number
  totalSteps: number
}

export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                index + 1 === currentStep
                  ? "bg-green-500 text-white"
                  : index + 1 < currentStep
                    ? "bg-green-200 text-green-800"
                    : "bg-gray-200 text-gray-500"
              }`}
            >
              {index + 1}
            </div>
            <div className="text-xs mt-2 text-gray-600">
            {index === 0 ? "Monto del prestamo" : index === 1 ? "Datos personales" : index === 2 ? "Documentos": "Confirmacion"}
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-2">
        {Array.from({ length: totalSteps - 1 }).map((_, index) => (
          <div key={index} className={`h-1 flex-1 mx-2 ${index + 1 < currentStep ? "bg-green-500" : "bg-gray-200"}`} />
        ))}
      </div>
    </div>
  )
}
