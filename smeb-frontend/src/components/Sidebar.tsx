"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type NavLink = {
    href: string;
    label: string;
    type: "nav";
};

type ActionLink = {
    label: string;
    icon: string;
    color: string;
    type: "action";
};

const links: Array<NavLink | ActionLink> = [
    { href: "/", label: "Dashboard", type: "nav" },
    { href: "/equipos", label: "Equipos", type: "nav" },
    { href: "/mantenimientos", label: "Mantenimientos", type: "nav" },
    { href: "/trabajadores", label: "Trabajadores", type: "nav" },
    { href: "/repuestos", label: "Repuestos", type: "nav" },
    { href: "/mediciones", label: "Mediciones", type: "nav" },
    { href: "/reportes", label: "Reportes", type: "nav" },

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
            .map(link => (
                <Link
                key={link.href}
                href={link.href}
                className={cn(
                    "block px-3 py-2 rounded-md text-sm hover:bg-blue-50 text-[#0d47a1] font-semibold"
                )}
                >
                {link.label}
                </Link>
            ))}
        </nav>

        {/* ACCIONES RÁPIDAS */}
        <section>
            <h2 className="font-semibold text-sm text-gray-600 mb-3 uppercase tracking-wide">
            Acciones Rápidas
            </h2>
            <div className="grid grid-cols-1 gap-2">
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
