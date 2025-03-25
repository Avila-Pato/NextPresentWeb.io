"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { Bell, HelpCircle, MailPlus, Menu, X } from "lucide-react";
import { useNavbarStore } from "@/store/navBarStore";

const Navbar = () => {
  const { isSignedIn, user } = useUser();
  const { isSticky, setSticky } = useNavbarStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setSticky]);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky 
          ? "bg-[#222038] shadow-lg py-2" 
          : "bg-[#333066] py-3"
      } text-white`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo y menú móvil */}
          <div className="flex items-center gap-6">
            <button 
              className="md:hidden p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menú móvil"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <Link href="/dashboard" className="text-xl font-bold hover:opacity-80 transition-opacity">
              NotionCraft
            </Link>
          </div>

          {/* Iconos de acción (derecha) */}
          <div className="flex items-center gap-4">
            {/* Grupo de iconos con tooltips */}
            <div className="flex items-center gap-4">
              {/* Ayuda */}
              <div className="relative group">
                <Link 
                  href="/help" 
                  className="p-1 hover:bg-[#2a275a] rounded-full transition-colors hidden md:flex"
                  aria-label="Ayuda"
                >
                  <HelpCircle size={20} />
                </Link>
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-max px-2 py-1 bg-[#3a3775] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Ayuda
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#3a3775] rotate-45"></div>
                </div>
              </div>
              
              {/* Personalización */}
              <div className="relative group">
                <Link 
                  href="/customize" 
                  className="p-1 hover:bg-[#2a275a] rounded-full transition-colors hidden md:flex"
                  aria-label="Personalización"
                >
                  <MailPlus size={20} />
                </Link>
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-max px-2 py-1 bg-[#3a3775] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Personalización
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#3a3775] rotate-45"></div>
                </div>
              </div>
              
              {/* Notificaciones */}
              <div className="relative group">
                <button 
                  className="p-1 hover:bg-[#2a275a] rounded-full transition-colors relative"
                  aria-label="Notificaciones"
                >
                  <Bell size={20} />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-max px-2 py-1 bg-[#3a3775] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Notificaciones
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#3a3775] rotate-45"></div>
                </div>
              </div>
            </div>
            
            {/* Avatar de usuario */}
            {isSignedIn && (
              <div className="flex items-center gap-2">
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "h-8 w-8",
                      userButtonPopoverCard: "bg-[#222038] border border-[#3a3775]"
                    }
                  }}
                />
                <span className="hidden md:inline text-sm">
                  {user?.firstName || "Mi cuenta"}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Menú móvil */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#2a275a] rounded-lg mt-3 p-4 space-y-3">
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/help" 
                  className="flex items-center gap-2 px-3 py-2 hover:bg-[#333066] rounded-md transition-colors"
                >
                  <HelpCircle size={18} />
                  Ayuda
                </Link>
              </li>
              <li>
                <Link 
                  href="/customize" 
                  className="flex items-center gap-2 px-3 py-2 hover:bg-[#333066] rounded-md transition-colors"
                >
                  <MailPlus size={18} />
                  Personalización
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;