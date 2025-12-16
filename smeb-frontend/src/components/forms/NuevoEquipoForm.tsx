"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectItem, SelectTrigger, SelectContent } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function NuevoEquipoForm() {
  return (
    <Card className="border-none shadow-none">
      <CardContent className="space-y-4 py-4">
        
        <div className="space-y-2">
          <Label>Estado del Equipo</Label>
          <Select>
            <SelectTrigger>Seleccione estado</SelectTrigger>
            <SelectContent>
              <SelectItem value="nuevo">Nuevo</SelectItem>
              <SelectItem value="comodato">Comodato</SelectItem>
              <SelectItem value="alquiler">Alquiler</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Nombre</Label>
          <Input placeholder="Monitor cardíaco" />
        </div>

         <div className="space-y-2">
          <Label>Marca</Label>
          <Input placeholder="Ej. Philips" />
        </div>

        <div className="space-y-2">
          <Label>Modelo</Label>
          <Input placeholder="MC-200" />
        </div>

        <div className="space-y-2">
          <Label>Serial</Label>
          <Input placeholder="SN-34567" />
        </div>

        <div className="space-y-2">
          <Label>Ubicación</Label>
          <Input placeholder="UCI / Emergencias / Piso 3" />
        </div>

        <div className="space-y-2">
          <Label>Imagen</Label>
          <Input type="file" />
        </div>

        <div className="space-y-2">
          <Label>Estado Operativo</Label>
          <Select>
            <SelectTrigger>Seleccione estado</SelectTrigger>
            <SelectContent>
              <SelectItem value="activo">Activo</SelectItem>
              <SelectItem value="mantenimiento">En Mantenimiento</SelectItem>
              <SelectItem value="fuera">Fuera de Servicio</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          Guardar Equipo
        </Button>
      </CardContent>
    </Card>
  )
}
