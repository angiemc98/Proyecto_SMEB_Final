"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select"

// --- SECCIONES VARIABLES SEGÚN EL TIPO ---
function CamposPreventivo() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-blue-700">Checklist Preventivo</h3>
      <div className="grid grid-cols-2 gap-2">
        {["Limpieza", "Lubricación", "Inspección", "Verificación de alarmas", "Prueba funcional", "Revisión conectores"].map(item => (
          <label key={item} className="flex items-center gap-2">
            <Checkbox /> {item}
          </label>
        ))}
      </div>
    </div>
  )
}

function CamposCorrectivo() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-yellow-600">Información Correctivo</h3>
      <div>
        <Label>Falla reportada</Label>
        <Textarea placeholder="Describa la falla reportada..." />
      </div>

      <div>
        <Label>Diagnóstico técnico</Label>
        <Textarea placeholder="Diagnóstico del técnico..." />
      </div>

      <div>
        <Label>Partes averiadas</Label>
        <Textarea placeholder="Especifique las partes afectadas..." />
      </div>
    </div>
  )
}

function CamposPredictivo() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-purple-600">Lecturas Predictivas</h3>

      <div>
        <Label>Horas de uso</Label>
        <Input placeholder="Ej. 250 h" />
      </div>

      <div>
        <Label>Lectura de desgaste / tolerancia</Label>
        <Input placeholder="Ej. Vibración, presión, amperaje..." />
      </div>

      <div>
        <Label>Recomendación de reemplazo</Label>
        <Textarea placeholder="Conclusión según tendencia..." />
      </div>
    </div>
  )
}

function CamposBaja() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-red-600">Evaluación para Baja Técnica</h3>

      <div>
        <Label>Motivo de baja</Label>
        <Textarea placeholder="Razón de descarte / obsolescencia..." />
      </div>

      <div>
        <Label>Estado físico</Label>
        <Select>
          <SelectTrigger>Seleccione</SelectTrigger>
          <SelectContent>
            <SelectItem value="irreparable">Irreparable</SelectItem>
            <SelectItem value="obsoleto">Obsoleto</SelectItem>
            <SelectItem value="alto_costo">Reparación no rentable</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Recomendación final</Label>
        <Textarea placeholder="Describa la recomendación técnica" />
      </div>
    </div>
  )
}

export default function MantenimientoForm() {
  const [tipo, setTipo] = useState("Preventivo")

  return (
    <Card className="border-none shadow-none mt-4">
      <CardContent className="space-y-6 py-4">

        {/* Tipo */}
        <div className="space-y-2">
          <Label>Tipo de mantenimiento</Label>
          <Select onValueChange={setTipo} defaultValue="Preventivo">
            <SelectTrigger>{tipo}</SelectTrigger>
            <SelectContent>
              <SelectItem value="Preventivo">Preventivo</SelectItem>
              <SelectItem value="Correctivo">Correctivo</SelectItem>
              <SelectItem value="Predictivo">Predictivo</SelectItem>
              <SelectItem value="Verificación">Verificación</SelectItem>
              <SelectItem value="Baja Técnica">Baja Técnica</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Informacion general */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Fecha inicio</Label>
            <Input type="date" />
          </div>
          <div>
            <Label>Hora inicio</Label>
            <Input type="time" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Fecha fin</Label>
            <Input type="date" />
          </div>
          <div>
            <Label>Hora fin</Label>
            <Input type="time" />
          </div>
        </div>

        {/* Equipo */}
        <div className="space-y-2">
          <Label>Equipo</Label>
          <Input placeholder="Ej. Monitor multiparámetros" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Marca</Label>
            <Input />
          </div>
          <div>
            <Label>Modelo</Label>
            <Input />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Serie</Label>
            <Input />
          </div>
          <div>
            <Label>Número Inventario</Label>
            <Input />
          </div>
        </div>

        {/* Campo dinámico */}
        {tipo === "Preventivo" && <CamposPreventivo />}
        {tipo === "Correctivo" && <CamposCorrectivo />}
        {tipo === "Predictivo" && <CamposPredictivo />}
        {tipo === "Baja Técnica" && <CamposBaja />}

        {/* Recomendaciones */}
        <div>
          <Label>Recomendaciones</Label>
          <Textarea placeholder="Recomendaciones generales..." />
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          Guardar mantenimiento
        </Button>
      </CardContent>
    </Card>
  )
}
