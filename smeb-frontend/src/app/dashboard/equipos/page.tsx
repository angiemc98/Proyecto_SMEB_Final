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
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto bg-white rounded-xl shadow-md">
      {/* Título */}
      <div>
        <h1 className="text-2xl font-semibold">Gestión de Equipos</h1>
        <p className="text-gray-500 text-sm">
          Control y administración de equipos biomédicos registrados en la institución.
        </p>
      </div>

      {/* Cards resumen */}
     <section className="mt-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
        <Card className="border-l-4 border-blue-600 shadow-sm">
            <CardHeader className="flex justify-between items-center">
                <CardTitle className="text-sm text-gray-600">Total equipos</CardTitle>
                <Package className="w-5 h-5 text-blue-600" />
            </CardHeader>
            <CardContent>
                <p className="text-3xl font-bold">6</p>
            </CardContent>
        </Card>
        <Card className="border-l-4 border-green-600 shadow-sm">
        <CardHeader className="flex justify-between items-center">
            <CardTitle className="text-sm text-gray-600">Disponibles</CardTitle>
            <CheckCircle className="w-5 h-5 text-green-600" />
        </CardHeader>
        <CardContent>
            <p className="text-3xl font-bold">2</p>
        </CardContent>
        </Card>

        <Card className="border-l-4 border-yellow-500 shadow-sm">
        <CardHeader className="flex justify-between items-center">
            <CardTitle className="text-sm text-gray-600">Mantenimeinto</CardTitle>
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
        </CardHeader>
        <CardContent>
            <p className="text-3xl font-bold">3</p>
        </CardContent>
        </Card>

        <Card className="border-l-4 border-red-600 shadow-sm">
        <CardHeader className="flex justify-between items-center">
            <CardTitle className="text-sm text-gray-600">Fuera de Servicio</CardTitle>
            <XCircle className="w-5 h-5 text-red-600" />
        </CardHeader>
        <CardContent>
            <p className="text-3xl font-bold">1</p>
        </CardContent>
        </Card>  
      </section>
      {/* Acciones */}
<div className="flex justify-between items-center gap-4">

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
  )
}
