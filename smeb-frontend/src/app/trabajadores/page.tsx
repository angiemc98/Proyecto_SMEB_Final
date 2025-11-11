// app/trabajadores/page.tsx
"use client"
import { Card } from "@/components/ui/card"
import { CheckCircle, AlertTriangle, XCircle, Package } from "lucide-react"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Check, MoreVertical } from "lucide-react"


export default function TrabajadoresPage() {
    const trabajadores = [
        { nombre: "Juan Martínez", initials: "JM", avatarColor: "bg-green-600", rol: "Mantenimiento en Emergencias", estado: "Disponible", statusColor: "text-green-600", statusBg: "bg-green-100" },
        { nombre: "Ana Rojas", initials: "AR", avatarColor: "bg-red-600", rol: "En taller con Desfibrilador", estado: "Mantenimiento DEF-032", statusColor: "text-red-600", statusBg: "bg-red-100" },
        { nombre: "Técnico Carlos", initials: "TC", avatarColor: "bg-indigo-600", rol: "Revisión de Equipo Quirúrgico", estado: "Ocupado", statusColor: "text-yellow-600", statusBg: "bg-yellow-100" },
        { nombre: "María Soto", initials: "MS", avatarColor: "bg-purple-600", rol: "Capacitación de Personal", estado: "Activo", statusColor: "text-blue-600", statusBg: "bg-blue-100" },
    ]
    const AvatarInitials = ({ initials, color }: { initials: string, color: string }) => (
        <div className={`w-12 h-12 ${color} text-white font-bold rounded-full flex items-center justify-center text-sm mr-4 shrink-0`}>
            {initials}
        </div>
    );

    return (
        <div className="p-6 bg-white rounded-xl shadow-md">
        <h1 className="text-2xl font-semibold mb-2">Gestión de Trabajadores</h1>
        <p className="text-gray-500 mb-4">Listado del personal técnico biomédico</p>

        <section className="mt-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
            <Card className="border-l-4 border-blue-600 shadow-sm">
                <CardHeader className="flex justify-between items-center">
                    <CardTitle className="text-sm text-gray-600">Total</CardTitle>
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
                <CardTitle className="text-sm text-gray-600">Ocupados</CardTitle>
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
            </CardHeader>
            <CardContent>
                <p className="text-3xl font-bold">3</p>
            </CardContent>
            </Card>

            <Card className="border-l-4 border-red-600 shadow-sm">
            <CardHeader className="flex justify-between items-center">
                <CardTitle className="text-sm text-gray-600">Ausentes</CardTitle>
                <XCircle className="w-5 h-5 text-red-600" />
            </CardHeader>
            <CardContent>
                <p className="text-3xl font-bold">1</p>
            </CardContent>
            </Card>  
            </section>
         {/* --- Sección de Técnicos Activos --- */}
            <h2 className="text-xs font-semibold text-gray-700 mb-4 mt-8">
                TÉCNICOS ACTIVOS
            </h2>

            <div className="space-y-3">
                {trabajadores.map((tecnico, index) => (
                    <Card key={index} className="border shadow-sm rounded-lg hover:shadow-md transition-shadow">
                        <div className="p-3 flex items-center justify-between">
                            {/* Lado izquierdo: Avatar + Info */}
                            <div className="flex items-center gap-3 flex-grow min-w-0">
                                <AvatarInitials initials={tecnico.initials} color={tecnico.avatarColor} />
                                
                                <div className="flex-grow min-w-0">
                                    <h3 className="font-semibold text-gray-900 text-sm">{tecnico.nombre}</h3>
                                    <p className="text-xs text-gray-500 truncate">{tecnico.rol}</p>
                                    <span className={`inline-flex items-center px-2 py-0.5 mt-1 rounded text-xs font-medium ${tecnico.statusBg} ${tecnico.statusColor}`}>
                                        {tecnico.estado}
                                    </span>
                                </div>
                            </div>

                            {/* Lado derecho: Botones de acción */}
                            <div className="flex gap-1 shrink-0 ml-4">
                                <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    className="w-9 h-9 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100"
                                >
                                    <User className="w-4 h-4" />
                                </Button>
                                
                                <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    className="w-9 h-9 rounded-md bg-green-50 text-green-600 hover:bg-green-100"
                                >
                                    <Check className="w-4 h-4" />
                                </Button>
                                
                                <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    className="w-9 h-9 rounded-md bg-gray-50 text-gray-600 hover:bg-gray-100"
                                >
                                    <MoreVertical className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}