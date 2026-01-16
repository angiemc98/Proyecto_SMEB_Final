"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function NuevoReporte() {
  const [tipoReporte, setTipoReporte] = useState("")

  return (
    <Card className="border-none shadow-none mt-4">
      <CardContent className="space-y-6">

        <h2 className="font-semibold text-lg">Registrar nuevo reporte</h2>

        {/* Tipo de reporte */}
        <div>
          <Label>Tipo de reporte</Label>
          <Select onValueChange={setTipoReporte}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccione el tipo..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mantenimiento">Mantenimiento</SelectItem>
              <SelectItem value="ubicacion">Ubicación / Monitoreo</SelectItem>
              <SelectItem value="medicion">Medición</SelectItem>
              <SelectItem value="incidente">Incidente / Novedad</SelectItem>
              <SelectItem value="general">General</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Campos comunes */}
        <div>
          <Label>Equipo / Activo</Label>
          <Input placeholder="Ej. Monitor MP-202 / Tracker BLE-021" />
        </div>

        <div>
          <Label>Fecha del reporte</Label>
          <Input type="date" />
        </div>

        {/* Condicional: Mantenimiento */}
        {tipoReporte === "mantenimiento" && (
          <>
            <div>
              <Label>Tipo de mantenimiento</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="preventivo">Preventivo</SelectItem>
                  <SelectItem value="correctivo">Correctivo</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Estado del equipo</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="operativo">Operativo</SelectItem>
                  <SelectItem value="en-reparacion">En reparación</SelectItem>
                  <SelectItem value="fuera-servicio">Fuera de servicio</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        )}

        {/* Condicional: Ubicación */}
        {tipoReporte === "ubicacion" && (
          <div>
            <Label>Ubicación detectada</Label>
            <Input placeholder="Ej. UCI 2 / Piso 3" />
          </div>
        )}

        {/* Condicional: Medición */}
        {tipoReporte === "medicion" && (
          <>
            <div>
              <Label>Tipo de medición</Label>
              <Input placeholder="Ej. Temperatura, batería, señal" />
            </div>

            <div>
              <Label>Valor registrado</Label>
              <Input placeholder="Ej. 36.5 °C / 78%" />
            </div>
          </>
        )}

        {/* Condicional: Incidente */}
        {tipoReporte === "incidente" && (
          <div>
            <Label>Nivel de severidad</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Seleccione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="baja">Baja</SelectItem>
                <SelectItem value="media">Media</SelectItem>
                <SelectItem value="alta">Alta</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Observaciones */}
        <div>
          <Label>Observaciones</Label>
          <Textarea placeholder="Detalles adicionales del reporte..." />
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          Guardar reporte
        </Button>

      </CardContent>
    </Card>
  )
}
