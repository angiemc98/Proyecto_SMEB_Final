"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, FileText, Search, BarChart3, MapPin, Database, ClipboardList, Plus} from "lucide-react"
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "@/components/ui/table"
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import NuevoReporte from "@/components/forms/NuevoReporte"


export default function ReportesPage() {
  const statsCards = [
    { title: "Reportes Totales", value: "142", borderColor: "border-l-4 border-blue-600", icons: Database, iconBg: "bg-blue-600", subtitle: "+5% este mes", subTitleColor: "text-blue-600" },
    { title: "Reportes de Mantenimiento", value: "68", borderColor: "border-l-4 border-green-600", icons: ClipboardList, iconBg: "bg-green-600", subtitle: "+10% este mes", subTitleColor: "text-green-600" },
    { title: "Indicadores de Reportes", value: "32", borderColor: "border-l-4 border-yellow-500", icons: BarChart3, iconBg: "bg-yellow-600", subtitle: "+2% este mes", subTitleColor: "text-yellow-600" },
    { title: "Reportes de Ubicación/Monitoreo", value: "42", borderColor: "border-l-4 border-red-600", icons: MapPin, iconBg: "bg-red-600", subtitle: "+8% este mes", subTitleColor: "text-red-600" },
  ]
  return (
      <div className="p-6 bg-white rounded-xl shadow-md max-w-7xl mx-auto space-y-6">
        <div className="col-span-12 bg-white rounded-xl p-4 h-fit mt-(-23px)">
      {/* Título */}
      <div>
        <h1 className="text-2xl font-semibold">Reportes</h1>
        <p className="text-gray-500 text-sm mb-6">
          Historial de reportes generados por el sistema (mantenimientos, mediciones, ubicaciones y más).
        </p>
      </div>
      
      <div className="flex justify-start mb-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button className="bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2">
                                <Plus className="w-4 h-4" />
                                Registrar Reporte
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="w-[400px] sm:w-[500px] overflow-auto">
                            <SheetHeader>
                                <SheetTitle>Registrar Nuevo Reporte</SheetTitle>
                            </SheetHeader>
                            <NuevoReporte />
                        </SheetContent>
                    </Sheet>
                </div>  

      {/* Cards Resumen */}
      <div className="grid grid-cols-2 gap-4 my-6">
        {statsCards.map((stat, index) => (
          <Card key={index} className={`${stat.borderColor} bg-white shadow-sm hover:shadow-md transition-shadow`}>
            <div className="px-5 py-4 flex items-center justify-between">
              <div className="flex-grow">
                <span className="text-xs font-medium text-gray-600 uppercase tracking-wide block mb-2">
                  {stat.title}
                </span>
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className={`text-xs font-medium ${stat.subTitleColor}`}>
                  {stat.subtitle}
                </p>
                </div>
                <div className={`${stat.iconBg} rounded-lg p-2.5 ml-4`}>
                  <stat.icons className="w-5 h-5 text-white" />
                </div>
            </div>
          </Card>
        ))}
        </div>


      {/* Filtros + export */}
      <div className="flex justify-between items-center gap-4 mb-6">
        <div className="flex gap-3 items-center">
          <Select>
            <SelectTrigger className="w-40">Tipo</SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="mantenimiento">Mantenimiento</SelectItem>
              <SelectItem value="medicion">Medición</SelectItem>
              <SelectItem value="ubicacion">Ubicación</SelectItem>
              <SelectItem value="otros">Otros</SelectItem>
            </SelectContent>
          </Select>

          <div className="relative w-64">
            <Input
              placeholder="Buscar..."
              className="w-full pl-10"
            />
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Tabla */}
      <Card className="shadow-sm border border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg">Listado de Reportes</CardTitle>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tipo</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Generado por</TableHead>
                <TableHead>Descripción</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {[1, 2, 3].map((r) => (
                <TableRow key={r}>
                  <TableCell className="font-semibold">
                    {r === 1 ? "Mantenimiento" : r === 2 ? "Medición" : "Ubicación"}
                  </TableCell>
                  <TableCell>2025-01-12</TableCell>
                  <TableCell>Juan Martínez</TableCell>
                  <TableCell>Revisión general del equipo</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <FileText className="w-4 h-4" /> Ver
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
    </div>
  )
}
