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
import { Wrench, Hourglass, AlertTriangle, ListTodo } from "lucide-react"
import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from "@/components/ui/table"

export default function MantenimientosPage() {

  const statsCards = [
    { title: "Total de Mantenimientos", value: "124", subtitle: "+5% este mes", subtitleColor: "text-green-600", icon: Wrench, iconBg: "bg-blue-600", borderColor: "border-l-4 border-blue-600" },
    { title: "Mantenimientos OK", value: "115", subtitle: "+7% este mes", subtitleColor: "text-green-600", icon: ListTodo, iconBg: "bg-green-600", borderColor: "border-l-4 border-green-600" },
    { title: "Mantenimientos Pendientes", value: "3", subtitle: "Esta semana", subtitleColor: "text-orange-600", icon: Hourglass, iconBg: "bg-yellow-500", borderColor: "border-l-4 border-yellow-500" },
    { title: "Mantenimientos No OK", value: "6", subtitle: "Requieren revisión", subtitleColor: "text-red-600", icon: AlertTriangle, iconBg: "bg-red-600", borderColor: "border-l-4 border-red-600" },
  ]
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto bg-white rounded-xl shadow-md">
      <div className="col-span-12 bg-white rounded-xl p-4 h-fit mt-(-23px)">
      {/* Título */}
      <div>
        <h1 className="text-2xl font-semibold">Mantenimientos</h1>
        <p className="text-gray-500 text-sm mb-6">
          Gestión de mantenimientos preventivos, correctivos y predictivos.
        </p>
      </div>
       {/* Acciones */}
      <div className="flex justify-between items-center mt-6 mb-6">

        {/* Drawer */}
        <Sheet>
          <SheetTrigger asChild>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              + Registrar Mantenimiento
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[400px] sm:w-[500px] max-w-full overflow-auto"
          >
            <SheetHeader>
              <SheetTitle>Registrar mantenimiento</SheetTitle>
            </SheetHeader>

            <MantenimientoForm />
          </SheetContent>
        </Sheet>

        <Input placeholder="Buscar..." className="w-64" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {statsCards.map((stat, index) => (
          <Card key={index} className={`${stat.borderColor} bg-white shadow-sm hover:shadow-md transition-shadow`}>
            <div className="px-5 py-4 flex items-center justify-between">
              <div className="flex-grow">
                <span className="text-xs font-medium text-gray-600 uppercase tracking-wide block mb-2">
                  {stat.title}
                </span>
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className={`text-xs font-medium ${stat.subtitleColor}`}>
                  {stat.subtitle}
                </p>
              </div>
              <div className={`${stat.iconBg} rounded-lg p-2.5 ml-4`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
            </div>
          </Card>
        ))}
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
                <TableHead>Mantenimiento</TableHead>
                <TableHead>Fecha Programada</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Responsable</TableHead>
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
    </div>
  )
}
