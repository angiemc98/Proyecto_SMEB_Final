"use client"

import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"

import { Bell, LogOut, User } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Header() {
  // 👉 luego esto vendrá de tu auth real
  const user = {
    name: "Carlos Pérez",
    initials: "CP",
  }

  const notifications = [
    "Mantenimiento pendiente – Monitor UCI",
    "Equipo fuera de servicio – RX-23",
    "Nuevo reporte generado",
  ]

const router = useRouter()

  const handleLogout = () => {
    // 1️⃣ Aquí luego puedes limpiar token / session / cookies
    // localStorage.removeItem("token")

    // 2️⃣ Redirigir al login
    router.push("/auth/login")
  }

  return (
    <header className="bg-[#0d47a1] text-white flex justify-between items-center py-3 px-6 shadow-md rounded-xl">
      <h1 className="text-lg font-semibold tracking-wide">
        SMEB - Gestión Biomédica
      </h1>

      <div className="flex items-center gap-4">

        {/* 🔔 Notificaciones */}
        <Popover>
          <PopoverTrigger asChild>
            <button className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {notifications.length}
              </span>
            </button>
          </PopoverTrigger>

          <PopoverContent align="end" className="w-72">
            <h4 className="font-semibold text-sm mb-2">Notificaciones</h4>
            <ul className="space-y-2 text-sm">
              {notifications.map((n, i) => (
                <li key={i} className="text-gray-600">
                  • {n}
                </li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>

        {/* 👤 Usuario */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-white text-[#0d47a1] px-3 py-1 rounded-full shadow-sm font-medium hover:bg-gray-100">
              {user.initials}
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              {user.name}
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              className="text-red-600 cursor-pointer focus:text-red-600"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Cerrar sesión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </header>
  )
}
