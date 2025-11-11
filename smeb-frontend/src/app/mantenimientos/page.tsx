// app/mantenimientos/page.tsx
"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle, AlertTriangle, XCircle, Package } from "lucide-react"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MantenimientosPage() {
  return (
        <div className="p-6 bg-white rounded-xl shadow-md">
        <h1 className="text-2xl font-semibold mb-2">Gestión de Mantenimientos</h1>
        <p className="text-gray-500 mb-4">Histórico y control de mantenimientos preventivos y correctivos</p>

     {/*Tarjetas */}
    <section className="mt-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
        <Card className="border-l-4 border-blue-600 shadow-sm">
            <CardHeader className="flex justify-between items-center">
                <CardTitle className="text-sm text-gray-600">Completados</CardTitle>
                <Package className="w-5 h-5 text-blue-600" />
            </CardHeader>
            <CardContent>
                <p className="text-3xl font-bold">124</p>
                <p className="text-sm text-green-600">+5% este mes</p>
            </CardContent>
        </Card>
        <Card className="border-l-4 border-green-600 shadow-sm">
        <CardHeader className="flex justify-between items-center">
            <CardTitle className="text-sm text-gray-600">En progreso</CardTitle>
            <CheckCircle className="w-5 h-5 text-green-600" />
        </CardHeader>
        <CardContent>
            <p className="text-3xl font-bold">98</p>
            <p className="text-green-600 text-sm">+12% este mes</p>
        </CardContent>
        </Card>

        <Card className="border-l-4 border-yellow-500 shadow-sm">
        <CardHeader className="flex justify-between items-center">
            <CardTitle className="text-sm text-gray-600">Pendientes</CardTitle>
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
        </CardHeader>
        <CardContent>
            <p className="text-3xl font-bold">8</p>
            <p className="text-red-600 text-sm">-3% esta semana</p>
        </CardContent>
        </Card>

        <Card className="border-l-4 border-red-600 shadow-sm">
        <CardHeader className="flex justify-between items-center">
            <CardTitle className="text-sm text-gray-600">Atrasados</CardTitle>
            <XCircle className="w-5 h-5 text-red-600" />
        </CardHeader>
        <CardContent>
            <p className="text-3xl font-bold">3</p>
            <p className="text-gray-600 text-sm">Sin cambios</p>
        </CardContent>
        </Card>
    </section>
    <Button className="mt-8 mb-8 bg-green-600 hover:bg-green-700 text-white">
    + Nuevo Mantenimiento
    </Button>

    <Card className="p-4">
    <Table>
        <TableHeader>
        <TableRow>
            <TableHead>Equipo</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Fecha</TableHead>
        </TableRow>
        </TableHeader>
        <TableBody>
        <TableRow>
            <TableCell>Monitor MC-015</TableCell>
            <TableCell>Correctivo</TableCell>
            <TableCell>Completado</TableCell>
            <TableCell>2025-09-12</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Bomba INF-02</TableCell>
            <TableCell>Preventivo</TableCell>
            <TableCell>Pendiente</TableCell>
            <TableCell>2025-09-20</TableCell>
        </TableRow>
        </TableBody>
    </Table>
    </Card>
</div>
)
}
