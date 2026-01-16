"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Package, CheckCircle, AlertTriangle, XCircle, Download, MapPin, Plus } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import NuevoTracker from "@/components/forms/NuevoTracker"

export default function MonitoreoEquiposPage() {

    const statsCards = [
        { title: "Total de Equipos", value: "124", subtitle: "+5% este mes", subtitleColor: "text-green-600", icon: Package, iconBg: "bg-blue-600", borderColor: "border-l-4 border-blue-600" },
        { title: "Equipos en Línea", value: "115", subtitle: "+7% este mes", subtitleColor: "text-green-600", icon: CheckCircle, iconBg: "bg-green-600", borderColor: "border-l-4 border-green-600" },
        { title: "Equipos en Mantenimiento", value: "3", subtitle: "Esta semana", subtitleColor: "text-orange-600", icon: AlertTriangle, iconBg: "bg-yellow-500", borderColor: "border-l-4 border-yellow-500" },
        { title: "Equipos Inactivos", value: "6", subtitle: "Requieren revisión", subtitleColor: "text-red-600", icon: XCircle, iconBg: "bg-red-600", borderColor: "border-l-4 border-red-600" },
    ]

    const ubicaciones = [
        { sala: "UCI Norte", equipos: 12, estado: "normal", bg: "bg-blue-100", border: "border-blue-300", position: "top-10 left-10" },
        { sala: "Quirófano 2", equipos: 8, estado: "alerta", bg: "bg-orange-100", border: "border-orange-300", position: "bottom-20 left-20" },
        { sala: "Emergencias", equipos: 15, estado: "critico", bg: "bg-red-100", border: "border-red-300", position: "top-10 right-10" },
        { sala: "Pediatría", equipos: 9, estado: "normal", bg: "bg-green-100", border: "border-green-300", position: "bottom-20 right-10" },
        { sala: "Cardiología", equipos: 6, estado: "alerta", bg: "bg-orange-100", border: "border-orange-300", position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" }
    ]

    const equiposDetalle = [
        { nombre: "Ventilador Mecánico VM-001", ubicacion: "UCI - Cama 3", estado: "En línea", estadoColor: "text-green-600", estadoDot: "bg-green-500", borderColor: "border-l-4 border-green-500" },
        { nombre: "Desfibrilador DEF-032", ubicacion: "Emergencias", estado: "En Mantenimiento", estadoColor: "text-yellow-600", estadoDot: "bg-yellow-500", borderColor: "border-l-4 border-yellow-500" }
    ]

    return (
        <div className="p-6 bg-white min-h-screen">
            <div className="col-span-12 bg-white rounded-xl p-4 h-fit mt-(-23px)">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Monitoreo de Equipos</h1>
                    <p className="text-sm text-gray-500 mt-1">Resumen general del sistema</p>
                </div>

                <div className="flex gap-3">

                    <Input 
                        type="text" 
                        placeholder="Buscar equipo, serial..."
                        className="w-64 bg-gray-50 border-gray-200"
                    />
                    <Button variant="outline" className="gap-2">
                        <Download className="w-4 h-4" />
                        Exportar
                    </Button>
                </div>
            </div>
                <div className="flex justify-start mb-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button className="bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2">
                                <Plus className="w-4 h-4" />
                                Registrar Tracker
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="w-[400px] sm:w-[500px] overflow-auto">
                            <SheetHeader>
                                <SheetTitle>Registrar Nuevo Tracker</SheetTitle>
                            </SheetHeader>

                            <NuevoTracker />
                        </SheetContent>
                    </Sheet>
                </div>

            {/* Stats Cards */}
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

            {/* Mapa */}
            <Card className="mb-6 shadow-sm">
                <div className="p-5">
                    <h2 className="text-sm font-semibold text-gray-700 mb-4">Mapa del Hospital Plan 1</h2>

                    <div className="relative bg-gray-50 rounded-lg border-2 border-gray-200 h-80 overflow-hidden">
                        {ubicaciones.map((ubic, index) => (
                            <div
                                key={index}
                                className={`absolute ${ubic.position} ${ubic.bg} ${ubic.border} border-2 rounded-lg p-3 shadow-md hover:shadow-lg transition-all cursor-pointer`}
                                style={{ minWidth: "120px" }}
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <MapPin className="w-4 h-4 text-gray-600" />
                                    <span className="text-xs font-semibold text-gray-700">{ubic.sala}</span>
                                </div>
                                <p className="text-xs text-gray-600">{ubic.equipos} equipos</p>
                            </div>
                        ))}

                        {/* Indicador */}
                        <div className="absolute top-4 right-4">
                            <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shadow-lg animate-pulse">
                                !
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Estado Equipos */}
            <div>
                <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">
                    ESTADO DE EQUIPOS
                </h2>

                <div className="space-y-3">
                    {equiposDetalle.map((equipo, index) => (
                        <Card key={index} className={`${equipo.borderColor} border-t border-r border-b hover:shadow-md transition-all`}>
                            <div className="p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className={`w-2 h-2 ${equipo.estadoDot} rounded-full animate-pulse`} />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-sm">{equipo.nombre}</h3>
                                        <p className="text-xs text-gray-500">{equipo.ubicacion}</p>
                                    </div>
                                </div>
                                <span className={`text-xs font-semibold ${equipo.estadoColor}`}>
                                    {equipo.estado}
                                </span>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

        </div>
        </div>
    )
}
