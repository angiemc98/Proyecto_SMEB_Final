import "./globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SMEB - Sistema de Mantenimiento Biomédico",
  description: "Gestión integral de mantenimiento e inventario biomédico",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body
        className={cn(
          "bg-[#F5F7FB] text-slate-800 min-h-screen",
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  )
}
