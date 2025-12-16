"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectItem, SelectTrigger, SelectContent } from "@/components/ui/select"

export default function NuevoEquipoPage() {
  return (
    <div className="p-6 mx-auto bg-white rounded-xl shadow-md space-y-6 max-w-4xl">
      <h1 className="text-2xl font-semibold mb-4">Registrar Nuevo Equipo</h1>

      <Card className="max-w-2xl mx-auto border shadow-sm">
        <CardHeader>
          <CardTitle>Información del Equipo</CardTitle>
        </CardHeader>

        <CardContent className="space-y-12">
          <div>
            <div>
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
            <div>
                <Label>Descripción</Label>
                <Input placeholder="Descripción breve del equipo" />
            </div>  
            <div>
                <Label>Nombre del Equipo</Label>
                <Input placeholder="Ej. Monitor cardíaco" />
            </div>

            <div>
                <Label>Modelo</Label>
                <Input placeholder="Ej. MC-200" />
            </div>

            <div>
                <Label>Serial</Label>
                <Input placeholder="Ej. SN-34567" />
            </div>

            <div>
                <Label>Ubicación</Label>
                <Input placeholder="UCI / Emergencias / Piso 3" />
            </div>

            <div>
                <Label>Imagen</Label>
                <Input type="file" />
            </div>
            <div>
                <Select>
                <SelectTrigger>Seleccione estado</SelectTrigger>
                <SelectContent>
                    <SelectItem value="activo">Activo</SelectItem>
                    <SelectItem value="mantenimiento">En Mantenimiento</SelectItem>
                    <SelectItem value="fuera">Fuera de Servicio</SelectItem>
                </SelectContent>
                </Select>
            </div>
            
        </div>
            <Button className="w-fit mx-auto bg-blue-600 hover:bg-blue-700">
            Guardar Equipo
            </Button>

        </CardContent>
      </Card>
    </div>
  )
}
