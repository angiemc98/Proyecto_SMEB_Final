"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, FileText, Search, Wrench, BarChart3, MapPin, FileJson } from "lucide-react"
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select"

export default function ReportesPage() {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md max-w-7xl mx-auto space-y-6">

      {/* Título */}
      <div>
        <h1 className="text-2xl font-semibold">Reportes</h1>
        <p className="text-gray-500 text-sm">
          Historial de reportes generados por el sistema (mantenimientos, mediciones, ubicaciones y más).
        </p>
      </div>

      {/* Cards Resumen */}
      <section className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {[
          { title: "Reportes Totales", value: "142", color: "border-blue-600", icons: FileJson, iconBg: "bg-blue-50" },
          { title: "Mantenimientos", value: "68", color: "border-green-600", icons: Wrench, iconBg: "bg-green-50" },
          { title: "Mediciones", value: "32", color: "border-yellow-500", icons: BarChart3, iconBg: "bg-yellow-50" },
          { title: "Ubicación/Monitoreo", value: "42", color: "border-red-600", icons: MapPin, iconBg: "bg-red-50" },
        ].map((card, index) => (
          <Card key={index} className={`border-l-4 ${card.color} shadow-sm`}>
            <CardHeader>
              <CardTitle className="text-sm text-gray-500">{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold display-flex items justify-center">{card.value}</p>
              <div className={`p-2 rounded-full mt-4 inline-block ${card.iconBg}`}>
                <card.icons className="w-6 h-6 text-gray-700" />
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Filtros + export */}
      <div className="flex justify-between items-center gap-4">
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
  )
}
