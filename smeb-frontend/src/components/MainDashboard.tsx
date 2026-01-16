import { Package } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react"
import { Input } from "./ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"



export default function MainDashboard() {

    const statsCards = [
        { title: "Equipos Activos", value: "124", borderColor: "border-l-4 border-blue-600", icons: Package, iconBg: "bg-blue-600", subtitle: "+5% este mes", subTitleColor: "text-blue-600" },
        { title: "Mantenimientos OK", value: "98", borderColor: "border-l-4 border-green-600", icons: CheckCircle, iconBg: "bg-green-600", subtitle: "+12% este mes", subTitleColor: "text-green-600" },
        { title: "Pendientes", value: "8", borderColor: "border-l-4 border-yellow-500", icons: AlertTriangle, iconBg: "bg-yellow-500", subtitle: "-3% esta semana", subTitleColor: "text-yellow-500" },
        { title: "Fuera de Servicio", value: "3", borderColor: "border-l-4 border-red-600", icons: XCircle, iconBg: "bg-red-600", subtitle: "Sin cambios", subTitleColor: "text-red-600" },
    ]
    return (
        <div className="p-6 space-y-6 max-w-7xl mx-auto bg-white rounded-xl shadow-md">
            {/* Titulo */}
            <div className="col-span-12 bg-white rounded-xl p-4 h-fit mt-(-23px)">
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
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 my-6">
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
                {/* Actividad reciente y Próximos mantenimientos */}
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mt-6">
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