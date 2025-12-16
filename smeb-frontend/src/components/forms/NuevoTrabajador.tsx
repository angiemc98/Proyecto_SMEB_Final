"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select"

export default function NuevoTrabajador() {
return (
    <Card className="border-none shadow-none mt-4">
        <CardContent className="space-y-6">

        <h2 className="font-semibold text-lg">Registro de Trabajador</h2>

        <div>
            <Label>Nombre completo</Label>
            <Input placeholder="Ej. Juan Pérez" />
        </div>

        <div>
            <Label>Documento</Label>
            <Input placeholder="C.C o TI" />
        </div>

        <div>
            <Label>Cargo</Label>
            <Select>
            <SelectTrigger>Seleccione...</SelectTrigger>
            <SelectContent>
                <SelectItem value="biomedico">Ingeniero Biomédico</SelectItem>
                <SelectItem value="tecnico">Técnico Biomédico</SelectItem>
                <SelectItem value="auxiliar">Auxiliar de mantenimiento</SelectItem>
            </SelectContent>
            </Select>
        </div>

        <div>
            <Label>Correo</Label>
            <Input type="email" placeholder="correo@ejemplo.com" />
        </div>

        <div>
            <Label>Teléfono</Label>
            <Input placeholder="Ej. 316 000 0000" />
        </div>

        <div>
            <Label>Observaciones</Label>
            <Textarea placeholder="Notas adicionales..." />
        </div>

        <div>
            <Label>Estado</Label>
            <Select>
            <SelectTrigger>Seleccione...</SelectTrigger>
            <SelectContent>
                <SelectItem value="activo">Activo</SelectItem>
                <SelectItem value="ocupado">Ocupado</SelectItem>
                <SelectItem value="ausente">Ausente</SelectItem>
                <SelectItem value="en_mantenimiento">En Mantenimiento</SelectItem>
                <SelectItem value="disponible">Disponible</SelectItem>
            </SelectContent>
            </Select>
        </div>

        <div>
            <Label>Actividad realizada</Label>
            <Select>
            <SelectTrigger>Seleccione...</SelectTrigger>
            <SelectContent>
                <SelectItem value="capacitacion_personal">Capacitación de Personal</SelectItem>
                <SelectItem value="mantenimiento_emergencias">Mantenimiento en Emergencias</SelectItem>
                <SelectItem value="revisión_equipo_quirúrgico">Revisión de Equipo Quirúrgico</SelectItem>
                <SelectItem value="mantenimiento_def-032">Mantenimiento DEF-032</SelectItem>
            </SelectContent>
            </Select>
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700">
            Registrar Trabajador
        </Button>
        </CardContent>
    </Card>
)
}
