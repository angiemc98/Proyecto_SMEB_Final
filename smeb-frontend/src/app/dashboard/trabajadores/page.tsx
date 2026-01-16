// app/trabajadores/page.tsx
"use client"

import { Card} from "@/components/ui/card"
import { Users, UserCheck, Briefcase, UserX } from "lucide-react"
import { Button } from "@/components/ui/button"
import NuevoTrabajador from "@/components/forms/NuevoTrabajador"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { User, Check, MoreVertical } from "lucide-react"

export default function TrabajadoresPage() {

  const statsCards = [
    { title: "Total de Trabajadores", value: "124", subtitle: "+5% este mes", subtitleColor: "text-green-600", icon: Users, iconBg: "bg-blue-600", borderColor: "border-l-4 border-blue-600" },
    { title: "Trabajadores Activos", value: "115", subtitle: "+7% este mes", subtitleColor: "text-green-600", icon: UserCheck, iconBg: "bg-green-600", borderColor: "border-l-4 border-green-600" },
    { title: "Trabajadores Inactivos", value: "3", subtitle: "Esta semana", subtitleColor: "text-orange-600", icon: Briefcase, iconBg: "bg-yellow-500", borderColor: "border-l-4 border-yellow-500" },
    { title: "Trabajadores Ausentes", value: "6", subtitle: "Requieren revisión", subtitleColor: "text-red-600", icon: UserX, iconBg: "bg-red-600", borderColor: "border-l-4 border-red-600" },
  ]
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
  )

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">

      <div className="col-span-12 bg-white rounded-xl p-4 h-fit mt-(-23px)">
      <h1 className="text-2xl font-semibold mb-2">Gestión de Trabajadores</h1>
      <p className="text-gray-500 mb-4">Listado del personal técnico biomédico</p>

      <div className="mb-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              + Registrar Trabajador
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[400px] sm:w-[500px] overflow-auto">
            <SheetHeader>
              <SheetTitle>Registro de Trabajador</SheetTitle>
            </SheetHeader>

            <NuevoTrabajador />
          </SheetContent>
        </Sheet>
      </div>

      {/* CARDS DE ESTADO */}
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

      {/* LISTADO DE TRABAJADORES */}
      <h2 className="text-xs font-semibold text-gray-700 mb-4 mt-8">TÉCNICOS ACTIVOS</h2>

      <div className="space-y-3">
        {trabajadores.map((tecnico, index) => (
          <Card key={index} className="border shadow-sm rounded-lg hover:shadow-md transition-shadow">
            <div className="p-3 flex items-center justify-between">

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

              <div className="flex gap-1 shrink-0 ml-4">
                <Button variant="ghost" size="icon" className="w-9 h-9 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100">
                  <User className="w-4 h-4" />
                </Button>

                <Button variant="ghost" size="icon" className="w-9 h-9 rounded-md bg-green-50 text-green-600 hover:bg-green-100">
                  <Check className="w-4 h-4" />
                </Button>

                <Button variant="ghost" size="icon" className="w-9 h-9 rounded-md bg-gray-50 text-gray-600 hover:bg-gray-100">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>

            </div>
          </Card>
        ))}
      </div>

    </div>
    </div>
  )
}
