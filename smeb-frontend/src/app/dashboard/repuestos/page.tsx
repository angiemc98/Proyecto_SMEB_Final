'use client'
import { Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import NuevoRepuesto from "@/components/forms/NuevoRepuesto";



export default function InventarioPage() {

 const filtros = [
        { name: "Todos", active: true },
        { name: "Filtros", active: false },
        { name: "Ventiladores", active: false },
        { name: "Monitores", active: false },
        { name: "Desfibriladores", active: false },
    ]

    const itemsStockBajo = [
        {
            nombre: "Filtro HEPA VM-001",
            sku: "VM-F001",
            cantidad: 2,
            avatar: "F",
            avatarBg: "bg-red-50",
            avatarText: "text-red-600",
            avatarBorder: "border border-red-200"
        },
        {
            nombre: "Batería Monitor MC-015",
            sku: "MC-B015",
            cantidad: 3,
            avatar: "B",
            avatarBg: "bg-yellow-50",
            avatarText: "text-yellow-600",
            avatarBorder: "border border-yellow-200"
        }
    ]

    return (
        <div className="p-6 bg-white min-h-screen border rounded-xl shadow-md">
            {/* Header */}
            <div className="mb-6 grid grid-cols-2 gap-6">    
                <h1 className="text-2xl font-bold text-gray-900 col-span-1 md:col-span-1 lg:col-span-1">
                    Inventario
                </h1>

                <div className="flex justify-end">
                    <Sheet>
                            <SheetTrigger asChild>
                                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                                + Registrar Repuesto
                                </Button>
                            </SheetTrigger>

                            <SheetContent side="right" className="w-[400px] sm:w-[500px] overflow-auto">
                                <SheetHeader>
                                <SheetTitle>Registro de Repuesto</SheetTitle>
                                </SheetHeader>

                                <NuevoRepuesto />
                            </SheetContent>
                    </Sheet>
                </div>
            </div>
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
        {/* Search Bar */}
            <div className="mt-6 mb-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input 
                        type="text" 
                        placeholder="Buscar repuestos o consumibles..."
                        className="pl-10 py-5 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                    />
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {filtros.map((filtro, index) => (
                    <Button
                        key={index}
                        variant={filtro.active ? "default" : "outline"}
                        className={`shrink-0 rounded-full px-5 ${
                            filtro.active 
                                ? "bg-blue-600 hover:bg-blue-700 text-white shadow-sm" 
                                : "bg-white text-gray-600 hover:bg-gray-100 border-gray-300"
                        }`}
                    >
                        {filtro.name}
                    </Button>
                ))}
            </div>

            {/* Items Section */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        ITEMS CON STOCK BAJO
                    </h2>
                    <Button variant="link" className="text-blue-600 hover:text-blue-700 text-sm font-medium p-0 h-auto">
                        Ver todos
                    </Button>
                </div>

                <div className="space-y-3">
                    {itemsStockBajo.map((item, index) => (
                        <Card key={index} className="border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all">
                            <div className="p-4 flex items-center justify-between">
                                {/* Left side: Avatar + Info */}
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 ${item.avatarBg} ${item.avatarText} ${item.avatarBorder} rounded-xl flex items-center justify-center font-bold text-xl`}>
                                        {item.avatar}
                                    </div>
                                    
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-base mb-0.5">
                                            {item.nombre}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            SKU: {item.sku}
                                        </p>
                                    </div>
                                </div>

                                {/* Right side: Quantity */}
                                <div className="text-right">
                                    <p className="text-3xl font-bold text-gray-900 leading-none mb-1">
                                        {item.cantidad}
                                    </p>
                                    <p className="text-xs text-gray-400 font-medium">
                                        unidades
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div> 
        </div>
    )
}