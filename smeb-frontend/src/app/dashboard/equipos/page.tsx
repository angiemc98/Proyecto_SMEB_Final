"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Package, CheckCircle, AlertTriangle, XCircle } from "lucide-react"
import NuevoEquipoForm from "@/components/forms/NuevoEquipoForm";

export default function EquiposPage() {

  const statsCards = [
    { title: "Total de Equipos", value: "124", subtitle: "+5% este mes", subtitleColor: "text-green-600", icon: Package, iconBg: "bg-blue-600", borderColor: "border-l-4 border-blue-600" },
    { title: "Equipos en Línea", value: "115", subtitle: "+7% este mes", subtitleColor: "text-green-600", icon: CheckCircle, iconBg: "bg-green-600", borderColor: "border-l-4 border-green-600" },
    { title: "Equipos en Mantenimiento", value: "3", subtitle: "Esta semana", subtitleColor: "text-orange-600", icon: AlertTriangle, iconBg: "bg-yellow-500", borderColor: "border-l-4 border-yellow-500" },
    { title: "Equipos Inactivos", value: "6", subtitle: "Requieren revisión", subtitleColor: "text-red-600", icon: XCircle, iconBg: "bg-red-600", borderColor: "border-l-4 border-red-600" },
  ]
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto bg-white rounded-xl shadow-md">
      {/* Título */}
      <div className="col-span-12 bg-white rounded-xl p-4 h-fit mt-(-23px)">
      <div>
        <h1 className="text-2xl font-semibold">Gestión de Equipos</h1>
        <p className="text-gray-500 text-sm mb-6">
          Control y administración de equipos biomédicos registrados en la institución.
        </p>
      </div>

      {/* Cards resumen */}
      <div className="grid grid-cols-2 gap-4 mb-6 ">
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
      {/* Acciones */}
<div className="flex justify-between items-center gap-4 mb-6">

  <Sheet>
    <SheetTrigger asChild>
      <Button className="bg-blue-600 text-white hover:bg-blue-700">
        + Registrar Equipo
      </Button>
    </SheetTrigger>

    <SheetContent side="right" className="w-[400px] sm:w-[500px] overflow-auto">
      <SheetHeader>
        <SheetTitle>Registrar Equipo</SheetTitle>
      </SheetHeader>

      <NuevoEquipoForm />
    </SheetContent>
  </Sheet>

  <Input
    placeholder="Buscar por nombre, modelo o serial..."
    className="w-64"
  />
</div>


      {/* Tabla de Equipos */}
      <Card className="shadow-sm border border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg">Listado de Equipos</CardTitle>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Equipo</TableHead>
                <TableHead>Área</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Monitor Cardiaco MC-015</TableCell>
                <TableCell>UCI</TableCell>
                <TableCell className="text-green-600 font-semibold">Activo</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">Ver</Button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Ventilador VM-001</TableCell>
                <TableCell>Emergencias</TableCell>
                <TableCell className="text-amber-600 font-semibold">En mantenimiento</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">Ver</Button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Desfibrilador DEF-032</TableCell>
                <TableCell>Emergencias</TableCell>
                <TableCell className="text-red-600 font-semibold">Fuera de servicio</TableCell>
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
