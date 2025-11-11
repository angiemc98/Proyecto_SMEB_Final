// app/equipos/page.tsx
"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function EquiposPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-2">Gestión de Equipos</h1>
      <p className="text-gray-500 mb-4">Listado y control de equipos biomédicos</p>

      <div className="flex justify-between mb-4">
        <Button className="bg-blue-600 text-white hover:bg-blue-700">+ Registrar Equipo</Button>
        <input
          type="text"
          placeholder="Buscar equipo..."
          className="border rounded-md px-3 py-1 text-sm"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="p-4">
          <h3 className="font-bold">Monitor Cardiaco MC-015</h3>
          <p className="text-sm text-gray-600">Área: UCI</p>
          <p className="text-sm text-green-600">Activo</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-bold">Ventilador VM-001</h3>
          <p className="text-sm text-gray-600">Área: Emergencias</p>
          <p className="text-sm text-yellow-600">En Mantenimiento</p>
        </Card>
      </div>
    </div>
  )
}
