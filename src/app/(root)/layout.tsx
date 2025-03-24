
import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'
import React, { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="h-screen flex flex-col bg-gray-100 ">
            {/* Navbar arriba ocupando todo el ancho */}
            <Navbar />
            {/* Contenedor principal con Sidebar a la izquierda y contenido a la derecha */}
            <div className="flex flex-1  font-nunito">
                <Sidebar />
                <main className="flex-1 p-4 bg-white shadow-md">{children} </main>
            </div>
        </div>
    )
}

export default Layout