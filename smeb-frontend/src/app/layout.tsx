import "./globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SMEB - Sistema de Mantenimiento Biomédico",
  description: "Gestión integral de mantenimiento e inventario biomédico",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={cn("bg-[#F5F7FB] text-slate-800 min-h-screen", inter.className)}>
        <div className="max-w-[1200px] mx-auto px-6 py-8">
          <Header />
          <div className="flex mt-6 gap-6">
            <Sidebar />
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
