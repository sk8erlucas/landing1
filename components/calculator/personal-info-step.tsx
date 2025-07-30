"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle } from "lucide-react"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


interface PersonalInfoStepProps {
  initialData: {
    nombre: string
    apellido: string
    telefono: string
    email: string
    curp: string
    sede: string
    motivo: string
    CLABE:string
  }
  onNext: (data: {
    nombre: string
    apellido: string
    telefono: string
    curp: string
    motivo: string
  }) => void
}

export default function PersonalInfoStep({ initialData, onNext }: PersonalInfoStepProps) {
  const [formData, setFormData] = useState(initialData)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Limpiar error cuando el usuario comienza a escribir
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio"
    }

    if (!formData.apellido.trim()) {
      newErrors.apellido = "El apellido es obligatorio"
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es obligatorio"
    } else if (!/^\d{12}$/.test(formData.telefono)) {
      newErrors.telefono = "El teléfono debe tener 10 dígitos"
    }

    if (!formData.curp.trim()) {
      newErrors.curp = "El CURP es obligatorio"
    } else if (!/^[A-Z]{4}\d{6}[HM][A-Z]{5}[0-9A-Z]\d$/.test(formData.curp)) {
      newErrors.curp = "El formato del CURP no es válido"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      onNext(formData)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 h-full">
      <h2 className="text-xl font-semibold text-center text-gray-900 mb-6">Información Personal</h2>

      <div className="space-y-4 flex-1">
        <div className="min-h-[80px]">
          <Label htmlFor="nombre" className="text-gray-900 font-medium">Nombre</Label>
          <Input
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={`bg-white border-2 ${errors.nombre ? "border-red-500" : "border-gray-300"} text-gray-900`}
          />
          <div className="min-h-[24px] mt-1">
            {errors.nombre && (
              <p className="text-red-500 text-sm flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.nombre}
              </p>
            )}
          </div>
        </div>

        <div className="min-h-[80px]">
          <Label htmlFor="apellido" className="text-gray-900 font-medium">Apellido</Label>
          <Input
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            className={`bg-white border-2 ${errors.apellido ? "border-red-500" : "border-gray-300"} text-gray-900`}
          />
          <div className="min-h-[24px] mt-1">
            {errors.apellido && (
              <p className="text-red-500 text-sm flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.apellido}
              </p>
            )}
          </div>
        </div>

        {/* <div>
          <Label htmlFor="telefono">Teléfono Móvil</Label>
          <Input
            id="telefono"
            name="telefono"
            type="tel"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="10 dígitos"
            className={errors.telefono ? "border-red-500" : ""}
          />
          {errors.telefono && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.telefono}
            </p>
          )}
        </div> */}
        <div className="min-h-[80px]">
  <Label htmlFor="telefono" className="text-gray-900 font-medium">Teléfono Móvil</Label>
  <PhoneInput
    country={'mx'} // Puedes cambiar el país por defecto
    value={formData.telefono}
    onChange={(phone) => {
      setFormData((prev) => ({ ...prev, telefono: phone }))
      if (errors.telefono) {
        setErrors((prev) => {
          const newErrors = { ...prev }
          delete newErrors.telefono
          return newErrors
        })
      }
    }}
    inputStyle={
{      width: '100%',
      height: '40px',
      paddingLeft: '48px',
      borderRadius: '4px',
      border: '2px solid #d1d5db',
      fontSize: '16px',
      fontFamily: 'Arial, sans-serif',
      color: '#111827',
      backgroundColor: '#ffffff',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',}
    }
    inputClass={errors.telefono ? "border-red-500 " : ""}
    inputProps={{
      name: 'telefono',
      required: true,
    }}
  />
  <div className="min-h-[24px] mt-1">
    {errors.telefono && (
      <p className="text-red-500 text-sm flex items-center">
        <AlertCircle className="h-4 w-4 mr-1" />
        {errors.telefono}
      </p>
    )}
  </div>
</div>
        <div className="min-h-[70px]">
          <Label htmlFor="email" className="text-gray-900 font-medium">Email (opcional)</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            className={`bg-white border-2 ${errors.email ? "border-red-500" : "border-gray-300"} text-gray-900`}
          />
        </div>

        <div className="min-h-[70px]">
          <Label htmlFor="sede" className="text-gray-900 font-medium">Sede</Label>
          <select
            id="sede"
            name="sede"
            value={formData.sede}
            onChange={handleChange}
            className={`w-full p-3 border-2 rounded-md text-gray-900 bg-white focus:border-green-500 focus:outline-none ${errors.sede ? "border-red-500" : "border-gray-300"}`}
          >
            <option value="">Selecciona una sede</option>
            <option value="mexicali">Mexicali</option>
            <option value="monterrey">Monterrey</option>
          </select>
        </div>

        <div className="min-h-[110px]">
          <Label htmlFor="curp" className="text-gray-900 font-medium">CURP</Label>
          <Input
            id="curp"
            name="curp"
            value={formData.curp}
            onChange={handleChange}
            placeholder="Ej. MELJ850515HDFRNR09"
            className={`bg-white border-2 ${errors.curp ? "border-red-500" : "border-gray-300"} text-gray-900`}
          />
          <p className="text-xs text-gray-600 mt-1">Ejemplo: MELJ850515HDFRNR09 (María Elena López Jiménez)</p>
          <div className="min-h-[24px] mt-1">
            {errors.curp && (
              <p className="text-red-500 text-sm flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.curp}
              </p>
            )}
          </div>
        </div>

        <div className="min-h-[80px]">
          <Label htmlFor="CLABE" className="text-gray-900 font-medium">CLABE (Clave Bancaria Estandarizada)</Label>
          <Input
            id="CLABE"
            name="CLABE"
            value={formData.CLABE}
            onChange={handleChange}
            placeholder="Ej. 012345678901234567"
            className={`bg-white border-2 ${errors.CLABE ? "border-red-500" : "border-gray-300"} text-gray-900`}
          />
          <div className="min-h-[24px] mt-1">
            {errors.CLABE && (
              <p className="text-red-500 text-sm flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.CLABE}
              </p>
            )}
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
