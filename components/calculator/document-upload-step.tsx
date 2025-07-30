"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Upload, ArrowLeft, AlertCircle } from "lucide-react"

interface DocumentUploadStepProps {
  onNext: () => void
  onPrev: () => void
  onFileChange: (file: File | string | null) => void
}

export default function DocumentUploadStep({ onNext, onPrev, onFileChange }: DocumentUploadStepProps) {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
  
    if (!selectedFile) {
      setError("Por favor selecciona un archivo");
      setFile(null);
      setPreview(null);
      onFileChange(null); // si onFileChange espera base64, puede ser null
      return;
    }
  
    // Validar que sea una imagen
    if (!selectedFile.type.startsWith("image/")) {
      setError("El archivo debe ser una imagen (JPG, PNG, etc.)");
      setFile(null);
      setPreview(null);
      onFileChange(null);
      return;
    }
  
    // Validar tamaño (máximo 5MB)
    if (selectedFile.size > 5 * 1024 * 1024) {
      setError("La imagen no debe exceder 5MB");
      setFile(null);
      setPreview(null);
      onFileChange(null);
      return;
    }
  
    setFile(selectedFile);
    setError(null);
  
    // Leer imagen como base64
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      setPreview(base64);         // Para mostrar preview
      onFileChange(base64);       // Enviar base64 a quien lo necesite
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!file) {
      setError("Por favor sube un comprobante de domicilio")
      return
    }

    setIsLoading(true)

    // Simulamos el envío
    onNext()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">Comprobante de Domicilio</h2>

      <div className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <input type="file" id="comprobante" className="hidden" accept="image/*" onChange={handleFileChange} />

          {preview ? (
            <div className="space-y-4">
              <div className="relative mx-auto max-w-xs">
                <img
                  src={preview || "/placeholder.svg"}
                  alt="Vista previa del comprobante"
                  className="mx-auto max-h-48 rounded-md object-contain"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="absolute top-2 right-2 bg-white"
                  onClick={() => {
                    setFile(null)
                    setPreview(null)
                    onFileChange(null)
                  }}
                >
                  Cambiar
                </Button>
              </div>
              <p className="text-sm text-gray-500">{file?.name}</p>
            </div>
          ) : (
            <>
              <Label htmlFor="comprobante" className="flex flex-col items-center cursor-pointer">
                <Upload className="h-12 w-12 text-gray-400 mb-2" />
                <span className="text-gray-600 font-medium">Haz clic para subir</span>
                <span className="text-sm text-gray-500 mt-1">o arrastra y suelta</span>
                <span className="text-xs text-gray-400 mt-2">JPG, PNG (máx. 5MB)</span>
              </Label>
            </>
          )}
        </div>

        {error && (
          <p className="text-red-500 text-sm flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" />
            {error}
          </p>
        )}

        <div className="text-sm text-gray-500">
          <p>Documentos aceptados:</p>
          <ul className="list-disc pl-5 mt-1">
            <li>Recibo de luz (no mayor a 3 meses)</li>
            <li>Recibo de agua (no mayor a 3 meses)</li>
            <li>Estado de cuenta bancario (no mayor a 3 meses)</li>
          </ul>
        </div>
      </div>

      <div className="flex pt-4 space-x-3">
        <Button type="button" variant="outline" onClick={onPrev} className="flex items-center">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Atrás
        </Button>
        <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700" disabled={!file || isLoading}>
          {isLoading ? "Enviando..." : "Continuar"}
        </Button>
      </div>
    </form>
  )
}
