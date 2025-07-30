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
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">Información Personal</h2>

      <div className="space-y-4">
        <div>
          <Label htmlFor="nombre">Nombre</Label>
          <Input
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={errors.nombre ? "border-red-500" : ""}
          />
          {errors.nombre && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.nombre}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="apellido">Apellido</Label>
          <Input
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            className={errors.apellido ? "border-red-500" : ""}
          />
          {errors.apellido && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.apellido}
            </p>
          )}
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
        <div>
  <Label htmlFor="telefono">Teléfono Móvil</Label>
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
      border: '1px solid #ccc',
      fontSize: '16px',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      backgroundColor: '#fff',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',}
    }
    inputClass={errors.telefono ? "border-red-500 " : ""}
    inputProps={{
      name: 'telefono',
      required: true,
    }}
  />
  {errors.telefono && (
    <p className="text-red-500 text-sm mt-1 flex items-center">
      <AlertCircle className="h-4 w-4 mr-1" />
      {errors.telefono}
    </p>
  )}
</div>
        <div>
          <Label htmlFor="email">Email (opcional)</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            className={errors.email ? "border-red-500" : ""}
          />
        </div>
<div>
  <Label htmlFor="sede">Sede</Label>
  <select
    id="sede"
    name="sede"
    value={formData.sede}
    onChange={handleChange}
    className={`w-full p-2 border rounded-md ${errors.sede ? "border-red-500" : "border-gray-300"}`}
  >
    <option value="">Selecciona una sede</option>
    <option value="mexicali">Mexicali</option>
    <option value="monterrey">Monterrey</option>
  </select>
</div>

        <div>
          <Label htmlFor="curp">CURP</Label>
          <Input
            id="curp"
            name="curp"
            value={formData.curp}
            onChange={handleChange}
            placeholder="Ej. ABCD123456HDFXYZ01"
            className={errors.curp ? "border-red-500" : ""}
          />
          {errors.curp && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.curp}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="CLABE">CLABE (Clave Bancaria Estandarizada)</Label>
          <Input
            id="CLABE"
            name="CLABE"
            value={formData.CLABE}
            onChange={handleChange}
            placeholder="Ej. ABCD123456HDFXYZ01"
            className={errors.CLABE ? "border-red-500" : ""}
          />
          {errors.CLABE && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.CLABE}
            </p>
          )}
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
