import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-8">
      <Header />

      <div className="flex mt-6 gap-6">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
