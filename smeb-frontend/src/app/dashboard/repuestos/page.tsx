'use client'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Package, PackageCheck, PackageOpen, PackageX} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import NuevoRepuesto from "@/components/forms/NuevoRepuesto";



export default function InventarioPage() {

    const statsCards = [
        { title: "Total de Repuestos", value: "124", subtitle: "+5% este mes", subtitleColor: "text-green-600", icon: Package, iconBg: "bg-blue-600", borderColor: "border-l-4 border-blue-600" },
        { title: "Repuestos Disponibles", value: "115", subtitle: "+7% este mes", subtitleColor: "text-green-600", icon: PackageCheck, iconBg: "bg-green-600", borderColor: "border-l-4 border-green-600" },
        { title: "Repuestos en Proceso de Compra", value: "3", subtitle: "Esta semana", subtitleColor: "text-orange-600", icon: PackageOpen, iconBg: "bg-yellow-500", borderColor: "border-l-4 border-yellow-500" }, 
        { title: "Repuestos No Disponibles", value: "6", subtitle: "Requieren revisión", subtitleColor: "text-red-600", icon: PackageX, iconBg: "bg-red-600", borderColor: "border-l-4 border-red-600" },
    ]

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
            <div className="col-span-12 bg-white rounded-xl p-4 h-fit mt-(-23px)">
            {/* Header */}
            <div className="mb-6 grid grid-cols-2 gap-6"> 
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 col-span-1 md:col-span-1 lg:col-span-1">
                        Inventario
                    </h1>
                    <p className="text-gray-500 mb-4">Inventario de repuestos y consumibles</p>
                </div>
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
        {/* Search Bar */}
            <div className="mt-8 mb-4">
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
        </div>
    )
}