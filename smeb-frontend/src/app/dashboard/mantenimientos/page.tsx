"use client"

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import MantenimientoForm from "@/components/forms/NuevoMantenimiento"
import { Wrench, CheckCircle, AlertTriangle, LineChart } from "lucide-react"
import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from "@/components/ui/table"

export default function MantenimientosPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto bg-white rounded-xl shadow-md space-y-6">

      {/* Título */}
      <div>
        <h1 className="text-2xl font-semibold">Mantenimientos</h1>
        <p className="text-gray-500 text-sm">
          Gestión de mantenimientos preventivos, correctivos y predictivos.
        </p>
      </div>

      {/* Cards */}
      <section className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-4">
        
        <Card className="border-l-4 border-blue-600 shadow-sm">
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="text-sm text-gray-600">Total</CardTitle>
            <Wrench className="w-5 h-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">12</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-green-600 shadow-sm">
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="text-sm text-gray-600">Preventivos</CardTitle>
            <CheckCircle className="w-5 h-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">6</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-yellow-500 shadow-sm">
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="text-sm text-gray-600">Correctivos</CardTitle>
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">4</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-red-600 shadow-sm">
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="text-sm text-gray-600">Predictivos</CardTitle>
            <LineChart className="w-5 h-5 text-red-600" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">2</p>
          </CardContent>
        </Card>

      </section>

      {/* Acciones */}
      <div className="flex justify-between items-center mt-6">

        {/* Drawer */}
        <Sheet>
          <SheetTrigger asChild>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              + Registrar Mantenimiento
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[500px] overflow-auto">
            <SheetHeader>
              <SheetTitle>Registrar mantenimiento</SheetTitle>
            </SheetHeader>

            <MantenimientoForm />
          </SheetContent>
        </Sheet>

        <Input placeholder="Buscar..." className="w-64" />
      </div>

      {/* Tabla */}
      <Card className="border shadow-sm border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg">Historial de mantenimientos</CardTitle>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Equipo</TableHead>
                <TableHead>Tipo de Mantenimiento</TableHead>
                <TableHead>Fecha Programada</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Técnico Responsable</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Monitor Cardiaco MC-015</TableCell>
                <TableCell>Preventivo</TableCell>
                <TableCell>2023-05-01</TableCell>
                <TableCell className="text-green-600 font-semibold">✓</TableCell>
                <TableCell>Juan Perez</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">Ver</Button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Monitor Cardiaco MC-015</TableCell>
                <TableCell>Correctivo</TableCell>
                <TableCell>2023-05-01</TableCell>
                <TableCell className="text-green-600 font-semibold">✓</TableCell>
                <TableCell>Juan Perez</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">Ver</Button>
                </TableCell>
                
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Monitor Cardiaco MC-015</TableCell>
                <TableCell>Predictivo</TableCell>
                <TableCell>2023-05-01</TableCell>
                <TableCell className="text-green-600 font-semibold">✓</TableCell>
                <TableCell>Juan Perez</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">Ver</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
