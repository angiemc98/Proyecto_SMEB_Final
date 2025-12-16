"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

export default function NuevaMedicion() {
    return (
        <Card className="border-none shadow-none mt-4">
            <CardContent className="space-y-6">

            <h2 className="font-semibold text-lg">Registrar Medición de Gases</h2>

            {/* Área o Sala */}
            <div>
                <Label>Área / Sala</Label>
                <Select>
                <SelectTrigger>Seleccione...</SelectTrigger>
                <SelectContent>
                    <SelectItem value="uci">UCI</SelectItem>
                    <SelectItem value="quirófano">Quirófano</SelectItem>
                    <SelectItem value="emergencias">Emergencias</SelectItem>
                    <SelectItem value="hospitalizacion">Hospitalización</SelectItem>
                    <SelectItem value="recuperacion">Sala de recuperación</SelectItem>
                </SelectContent>
                </Select>
            </div>

            {/* Tipo de gas */}
            <div>
                <Label>Tipo de Gas</Label>
                <Select>
                <SelectTrigger>Seleccione...</SelectTrigger>
                <SelectContent>
                    <SelectItem value="o2">Oxígeno (O₂)</SelectItem>
                    <SelectItem value="co2">Dióxido de Carbono (CO₂)</SelectItem>
                    <SelectItem value="co">Monóxido de Carbono (CO)</SelectItem>
                    <SelectItem value="air">Aire Medicinal</SelectItem>
                    <SelectItem value="vac">Vacío</SelectItem>
                </SelectContent>
                </Select>
            </div>

            {/* Valor */}
            <div>
                <Label>Valor Medido</Label>
                <Input placeholder="Ej. 21.0% – 340 ppm – 50 PSI" />
            </div>

            {/* Unidad */}
            <div>
                <Label>Unidad</Label>
                <Select>
                <SelectTrigger>Seleccione...</SelectTrigger>
                <SelectContent>
                    <SelectItem value="%">%</SelectItem>
                    <SelectItem value="ppm">ppm</SelectItem>
                    <SelectItem value="psi">PSI</SelectItem>
                    <SelectItem value="lmin">L/min</SelectItem>
                </SelectContent>
                </Select>
            </div>

            {/* Fecha y Hora */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                <Label>Fecha</Label>
                <Input type="date" />
                </div>
                <div>
                <Label>Hora</Label>
                <Input type="time" />
                </div>
            </div>

            {/* Observaciones */}
            <div>
                <Label>Observaciones</Label>
                <Textarea placeholder="Notas adicionales: fuga, ruido, olor, comportamiento atípico..." />
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Guardar Medición
            </Button>

            </CardContent>
        </Card>
    )
}
