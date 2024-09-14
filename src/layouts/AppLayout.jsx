import Header from "@/components/Header"
import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container mx-auto">
        <Header />
      <Outlet />
      </main>
      <div className="text-center p-10 bg-gray-800 mt-10">
      <p><strong>Hired</strong> - Your Gateway to Opportunities</p>
     <p>Connecting talent with top companies</p>
     <p>&copy; 2024 Hired. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default AppLayout