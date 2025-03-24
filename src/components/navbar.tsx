"use client";

import React from "react";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

const Navbar = () => {
  const { isSignedIn } = useUser(); // Obtener estado del usuario

  return (
    <nav className="flex items-center justify-between p-4 bg-[#171624] text-white">
      {/* Logo o nombre de la aplicación */}
      <div className="text-lg font-bold">
        <Link href="/dashboard">Minible</Link>
      </div>

      {/* Contenedor de opciones y usuario */}
      <div className="flex items-center gap-4">
        <ul className="flex gap-4 list-none">
          <li>Ayuda?</li>
          <li>Alguna personalización</li>
          <li>Comprar</li>
        </ul>
        {isSignedIn && <UserButton afterSignOutUrl="/" />} 
      </div>
    </nav>
  );
};

export default Navbar;
