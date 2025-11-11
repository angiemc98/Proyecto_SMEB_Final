import { Package } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react"
import { Input } from "./ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"



export default function MainDashboard() {
    return (
        <div className="flex flex-col gap-6 p-6 max-w7xl mx-auto">
            {/* Titulo */}
            <div className="col-span-12 bg-white rounded-xl shadow-md p-4 h-fit mt-(-23px)">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Dashboard</h1>
                        <p className="text-gray-500 text-sm">Resumen general del sistema</p>
                    </div>

                    {/* Buscador + botón */}
                    <div className="flex items-center gap-2">
                        <Input
                            placeholder="Buscar equipo, serial..."
                            className="w-64"
                        />
                        <Button variant="secondary" className="font-medium">
                            Exportar
                        </Button>
                </div>
        </div>
                {/*Tarjetas */}
                <section className="mt-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
                    <Card className="border-l-4 border-blue-600 shadow-sm">
                        <CardHeader className="flex justify-between items-center">
                            <CardTitle className="text-sm text-gray-600">Equipos Activos</CardTitle>
                            <Package className="w-5 h-5 text-blue-600" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold">124</p>
                            <p className="text-sm text-green-600">+5% este mes</p>
                        </CardContent>
                    </Card>
                    <Card className="border-l-4 border-green-600 shadow-sm">
                    <CardHeader className="flex justify-between items-center">
                        <CardTitle className="text-sm text-gray-600">Mantenimientos OK</CardTitle>
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
                        <CardTitle className="text-sm text-gray-600">Fuera de Servicio</CardTitle>
                        <XCircle className="w-5 h-5 text-red-600" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">3</p>
                        <p className="text-gray-600 text-sm">Sin cambios</p>
                    </CardContent>
                    </Card>
                </section>
                {/* Actividad reciente y Próximos mantenimientos */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                    {/* Actividad reciente */}
                    <Card>
                    <CardHeader>
                        <CardTitle>Actividad Reciente</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3">
                        <div className="bg-green-50 border-l-4 border-green-500 rounded-md p-3">
                        <p className="text-sm">
                            ✅ Mantenimiento completado: <strong>VM-001</strong> – Sala UCI
                        </p>
                        <span className="text-xs text-gray-500">Hace 2 horas</span>
                        </div>
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-md p-3">
                        <p className="text-sm">
                            ⚠ Alerta: Monitor <strong>MC-015</strong> requiere revisión
                        </p>
                        <span className="text-xs text-gray-500">Hace 4 horas</span>
                        </div>
                        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-md p-3">
                        <p className="text-sm">
                            ➕ Nuevo registro: Desfibrilador <strong>DEF-032</strong> – Emergencias
                        </p>
                        <span className="text-xs text-gray-500">Hoy</span>
                        </div>
                    </CardContent>
                    </Card>
                    {/* Próximos mantenimientos */}
                    <Card>
                    <CardHeader>
                        <CardTitle>Próximos Mantenimientos</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                        <TableHeader>
                            <TableRow>
                            <TableHead>EQUIPO</TableHead>
                            <TableHead>TIPO</TableHead>
                            <TableHead>FECHA</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                            <TableCell className="font-semibold">Monitor VM-001</TableCell>
                            <TableCell>Preventivo</TableCell>
                            <TableCell>2025-09-20</TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell className="font-semibold">Bomba INF-02</TableCell>
                            <TableCell>Correctivo</TableCell>
                            <TableCell>2025-09-18</TableCell>
                            </TableRow>
                        </TableBody>
                        </Table>
                    </CardContent>
                    </Card>
                </div>
            </div>
            </div>
    )
}