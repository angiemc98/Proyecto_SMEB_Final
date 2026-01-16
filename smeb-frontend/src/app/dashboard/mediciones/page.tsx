import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Wind, CheckCircle, AlertTriangle, XCircle, Download } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import NuevaMedicion from "@/components/forms/NuevaMedicion"

export default function MonitoreoGasesPage() {
    const statsCards = [
        { 
            title: "O₂ NIVELES", 
            value: "98", 
            subtitle: "Óptimos en todas las áreas",
            subtitleColor: "text-green-600",
            icon: Wind, 
            iconBg: "bg-blue-600",
            borderColor: "border-l-4 border-blue-600"
        },
        { 
            title: "CO₂ PROMEDIO", 
            value: "380 ppm", 
            subtitle: "Normal desde hace 2 horas",
            subtitleColor: "text-green-600",
            icon: CheckCircle, 
            iconBg: "bg-green-600",
            borderColor: "border-l-4 border-green-600"
        },
        { 
            title: "CO DETECTADO", 
            value: "25 ppm", 
            subtitle: "Elevado Sala 3",
            subtitleColor: "text-orange-600",
            icon: AlertTriangle, 
            iconBg: "bg-orange-500",
            borderColor: "border-l-4 border-orange-500"
        },
        { 
            title: "ALERTAS ACTIVAS", 
            value: "2", 
            subtitle: "Requieren atención inmediata",
            subtitleColor: "text-red-600",
            icon: XCircle, 
            iconBg: "bg-red-600",
            borderColor: "border-l-4 border-red-600"
        },
    ]

    const lecturasPorArea = [
        {
            sala: "Sala UCI - Sensor GS-001",
            detalles: "CO₂: 340ppm | O₂: 20.8% | CO: 0 ppm",
            estado: "Normal",
            estadoBg: "bg-green-50",
            estadoText: "text-green-700",
            estadoBorder: "border-green-200",
            iconBg: "bg-green-600",
            cardBg: "bg-green-50/30"
        },
        {
            sala: "Quirófano 3 - Sensor GS-002",
            detalles: "CO₂: 450ppm | O₂: 20.5% | CO: 35 ppm",
            estado: "Elevado",
            estadoBg: "bg-orange-50",
            estadoText: "text-orange-700",
            estadoBorder: "border-orange-200",
            iconBg: "bg-orange-500",
            cardBg: "bg-orange-50/30"
        },
        {
            sala: "Sala de Emergencias - Sensor GS-004",
            detalles: "CO₂: 380ppm | O₂: 20.9% | CO: 0 ppm",
            estado: "Normal",
            estadoBg: "bg-green-50",
            estadoText: "text-green-700",
            estadoBorder: "border-green-200",
            iconBg: "bg-green-600",
            cardBg: "bg-green-50/30"
        },
        {
            sala: "Sala de Recuperación - Sensor GS-005",
            detalles: "CO₂: 360ppm | O₂: 21.0% | CO: 0 ppm",
            estado: "Normal",
            estadoBg: "bg-green-50",
            estadoText: "text-green-700",
            estadoBorder: "border-green-200",
            iconBg: "bg-green-600",
            cardBg: "bg-green-50/30"
        }
    ]

    return (
        <div className="p-6 bg-white min-h-screen border rounded-xl shadow-md">
            <div className="col-span-12 bg-white rounded-xl p-4 h-fit mt-(-23px)">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Monitoreo de Gases</h1>
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
                                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                                + Registrar Medición
                                </Button>
                            </SheetTrigger>

                            <SheetContent side="right" className="w-[400px] sm:w-[500px] overflow-auto">
                                <SheetHeader>
                                <SheetTitle>Registro de Medición</SheetTitle>
                                </SheetHeader>

                                <NuevaMedicion />
                            </SheetContent>
                    </Sheet>
                </div>

            {/* Stats Cards - 2x2 Grid más anchas y delgadas */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                {statsCards.map((stat, index) => (
                    <Card key={index} className={`${stat.borderColor} bg-white shadow-sm hover:shadow-md transition-shadow`}>
                        <div className="px-6 py-4 flex items-center justify-between">
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

            {/* Lecturas por Área */}
            <div>
                <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">
                    LECTURAS POR ÁREA
                </h2>

                <div className="space-y-3">
                    {lecturasPorArea.map((lectura, index) => (
                        <Card key={index} className={`border-l-4 ${lectura.estadoBorder} ${lectura.cardBg} border-t border-r border-b border-gray-200 hover:shadow-md transition-all`}>
                            <div className="p-4 flex items-center justify-between">
                                {/* Left side: Icon + Info */}
                                <div className="flex items-center gap-4 flex-grow">
                                    <div className={`w-11 h-11 ${lectura.iconBg} rounded-lg flex items-center justify-center shrink-0`}>
                                        <Wind className="w-5 h-5 text-white" />
                                    </div>
                                    
                                    <div className="flex-grow min-w-0">
                                        <h3 className="font-semibold text-gray-900 text-sm mb-1">
                                            {lectura.sala}
                                        </h3>
                                        <p className="text-xs text-gray-600">
                                            {lectura.detalles}
                                        </p>
                                    </div>
                                </div>

                                {/* Right side: Status Badge */}
                                <div className="shrink-0 ml-4">
                                    <span className={`inline-flex items-center px-3 py-1.5 rounded text-xs font-semibold ${lectura.estadoBg} ${lectura.estadoText} border ${lectura.estadoBorder}`}>
                                        {lectura.estado}
                                    </span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
        </div>
    )
}