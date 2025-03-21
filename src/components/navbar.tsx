"use client";

import React from "react";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

const Navbar = () => {
  const { isSignedIn } = useUser(); // Obtener estado del usuario

  return (
    <nav className="flex items-center justify-between p-4 bg-blue-500 text-white">
      {/* Logo o nombre de la aplicación */}
      <div className="text-lg font-bold">
        <Link href="/dashboard">Mi App</Link>
      </div>

      {/* Contenedor de la imagen del usuario */}
      <div className="flex items-center gap-2">
        {isSignedIn && <UserButton afterSignOutUrl="/" />} 
      </div>
    </nav>
  );
};

export default Navbar;
