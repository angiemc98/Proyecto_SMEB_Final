"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select"

export default function NuevoRepuesto() {
  return (
    <Card className="border-none shadow-none mt-4">
      <CardContent className="space-y-6">

        <h2 className="font-semibold text-lg">Registrar Repuesto</h2>

        <div>
          <Label>Nombre del Repuesto</Label>
          <Input placeholder="Ej. Batería 12V" />
        </div>

        <div>
          <Label>Código</Label>
          <Input placeholder="Código interno o externo" />
        </div>

        <div>
          <Label>Marca</Label>
          <Input placeholder="Ej. Philips, Mindray..." />
        </div>

        <div>
          <Label>Cantidad en Stock</Label>
          <Input type="number" min="0" />
        </div>

        <div>
          <Label>Compatible con</Label>
          <Textarea placeholder="Ej. Monitor MP30, Ventilador V60..." />
        </div>

        <div>
          <Label>Estado</Label>
          <Select>
            <SelectTrigger>Seleccione...</SelectTrigger>
            <SelectContent>
              <SelectItem value="nuevo">Nuevo</SelectItem>
              <SelectItem value="usado">Usado</SelectItem>
              <SelectItem value="agotado">Agotado</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          Registrar Repuesto
        </Button>

      </CardContent>
    </Card>
  )
}
