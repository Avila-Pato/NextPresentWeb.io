import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import TableOfContents  from '@/components/TableOfContents';
import React, { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col pt-20 ">
      {/* Navbar arriba ocupando todo el ancho */}
      <Navbar />
      
      {/* Contenedor principal (Sidebar + Contenido) */}
      <div className="flex flex-1 ">
        {/* Sidebar FIJ0 */}
        <aside className="fixed w-48 h-[calc(100vh-4rem)] top-16 left-0 bg-[#e6e7ee] p-4 overflow-hidden">
          <Sidebar />
        </aside>

        {/* Contenido PRINCIPAL (con scroll) */}
        <main className="flex-1 ml-52 p-4 bg-white shadow-md overflow-y-auto overflow-hidden">
          {children}
        </main>
        <TableOfContents /> 
      </div>
    </div>
  );
};

export default Layout;