"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { useNavbarStore } from "@/store/navBarStore";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const { isSticky, setSticky } = useNavbarStore();

  // la mejore opcion es usar useState + fixed para lograr que el navbar permanesca 
  // pero en este caso lo sue asi para verlo de manera diferente 
  useEffect(() => {
    const handleScroll = () => {
      // Cambia el estado solo para modificar estilos (no la posición)
      setSticky(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setSticky]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 p-4 transition-colors duration-300 ${
        isSticky ? "bg-[#222038] shadow-lg" : "bg-[#333066]"
      } text-white`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-bold">
          <Link href="/dashboard">Minible</Link>
        </div>

        {/* Opciones y usuario */}
        <div className="flex items-center gap-4">
          <ul className="flex gap-4 list-none">
            <li>Ayuda?</li>
            <li>Alguna personalización</li>
            <li>Comprar</li>
          </ul>
          {isSignedIn && <UserButton afterSignOutUrl="/" />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;