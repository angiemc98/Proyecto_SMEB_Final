"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ActivityIcon, BarChart3, FileText, LucideIcon, MonitorX, Package, Settings, Users, Wrench } from "lucide-react";


type NavLink = {
    href: string;
    label: string;
    type: "nav";
    icon?: LucideIcon;
    active?: boolean;
};

type ActionLink = {
    label: string;
    icon: string;
    color: string;
    type: "action";
    active?: boolean;
};

const links: Array<NavLink | ActionLink> = [
    { href: "/dashboard", icon: BarChart3, label: "Dashboard", type: "nav", active: true },
    { href: "/dashboard/equipos", icon: Package, label: "Equipos", type: "nav" },
    { href: "/dashboard/mantenimientos", icon: Wrench, label: "Mantenimientos", type: "nav" },
    { href: "/dashboard/trabajadores", icon: Users, label: "Trabajadores", type: "nav" },
    { href: "/dashboard/repuestos", icon: Settings, label: "Repuestos", type: "nav" },
    { href: "/dashboard/mediciones", icon: ActivityIcon, label: "Mediciones", type: "nav" },
    { href: "/dashboard/reportes", icon: FileText, label: "Reportes", type: "nav" },
    { href: "/dashboard/monitoreo-equipos", icon: MonitorX, label: "Monitoreo de Equipos", type: "nav" },

    // 👇 Acciones rápidas
    { label: "Ver Histórico", icon: "📋", color: "bg-blue-600 hover:bg-blue-700", type: "action" },
    { label: "Nuevo Reporte", icon: "🧰", color: "bg-green-600 hover:bg-green-700", type: "action" },
    { label: "Reportes", icon: "📈", color: "bg-yellow-500 hover:bg-yellow-600", type: "action" },
    { label: "Reportes de Errores", icon: "🚨", color: "bg-red-600 hover:bg-red-700", type: "action" },
];

export default function Sidebar() {
    return (
        <aside className="w-60 bg-white rounded-xl shadow-md p-4 h-fit">
        <nav className="space-y-2 mb-6">
            {links
            .filter(link => link.type === "nav")
            .map(link => {
                const Icon = link.icon;
                return (
                <Link
                key={link.href}
                href={link.href}
                className={cn(
                    "block px-3 py-2 rounded-md text-sm hover:bg-blue-50 text-[#0d47a1] font-semibold",
                    link.active && "bg-blue-100"
                )}
                >
                {Icon && <Icon className="inline mr-2 w-4 h-4" />}
                {link.label}
                </Link>
            );
            })}
        </nav>

        {/* ACCIONES RÁPIDAS */}
        <section>
            <h2 className="font-semibold text-sm text-gray-600 mb-3 uppercase tracking-wide">
            Acciones Rápidas
            </h2>
            <div className="grid grid-cols-1 gap-4">
            {links
                .filter(link => link.type === "action")
                .map((action, index) => (
                <Button
                    key={index}
                    className={cn(
                    `${action.color} text-white justify-start w-full`
                    )}
                >
                    <span className="mr-2">{action.icon}</span>
                    {action.label}
                </Button>
                ))}
            </div>
        </section>
        </aside>
    )
}
