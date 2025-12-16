"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select"

export default function NuevoTracker() {
  return (
    <Card className="border-none shadow-none mt-4">
      <CardContent className="space-y-6">

        <h2 className="font-semibold text-lg">Registrar Tracker</h2>

        <div>
          <Label>Tag / Código del dispositivo</Label>
          <Input placeholder="Ej. TAG-021 / BLE-998" />
        </div>

        <div>
          <Label>Tipo de tecnología</Label>
          <Select>
            <SelectTrigger>Seleccione...</SelectTrigger>
            <SelectContent>
              <SelectItem value="ble">Bluetooth Low Energy (BLE)</SelectItem>
              <SelectItem value="rfid">RFID Activo</SelectItem>
              <SelectItem value="lorawan">LoRaWAN</SelectItem>
              <SelectItem value="wifi">WiFi Tracker</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Equipo asociado</Label>
          <Input placeholder="Ej. Monitor Multiparámetros MP-202" />
        </div>

        <div>
          <Label>Ubicación inicial</Label>
          <Input placeholder="Ej. UCI 2 / Piso 3" />
        </div>

        <div>
          <Label>Observaciones</Label>
          <Input placeholder="Notas adicionales..." />
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          Guardar Tracker
        </Button>

      </CardContent>
    </Card>
  )
}
