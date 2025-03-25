"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { Search, Bell, HelpCircle, ShoppingCart, Menu, X } from "lucide-react";
import { useNavbarStore } from "@/store/navBarStore";

const Navbar = () => {
  const { isSignedIn, user } = useUser();
  const { isSticky, setSticky } = useNavbarStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 30);
    };
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

          {/* Navegación desktop */}
          <div className="hidden md:flex items-center gap-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Buscar..."
                className="bg-[#2a275a] rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 w-64"
              />
            </div>

            <ul className="flex items-center gap-6 list-none">
              <li>
                <Link href="/help" className="flex items-center gap-1 hover:text-purple-300 transition-colors">
                  <HelpCircle size={18} />
                  <span>Ayuda</span>
                </Link>
              </li>
              <li>
                <Link href="/customize" className="hover:text-purple-300 transition-colors">
                  Personalización
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="flex items-center gap-1 hover:text-purple-300 transition-colors">
                  <ShoppingCart size={18} />
                  <span>Planes</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Iconos de usuario */}
          <div className="flex items-center gap-4">
            <button className="relative p-1 hover:bg-[#2a275a] rounded-full transition-colors">
              <Bell size={20} />
            </button>
            
            {isSignedIn ? (
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
                <span className="hidden md:inline text-sm">{user?.firstName}</span>
              </div>
            ) : (
              <Link 
                href="/sign-in" 
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Iniciar sesión
              </Link>
            )}
          </div>
        </div>

        {/* Menú móvil */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#2a275a] rounded-lg mt-3 p-4 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Buscar..."
                className="bg-[#333066] w-full rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none"
              />
            </div>

            <ul className="space-y-3">
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
                  className="block px-3 py-2 hover:bg-[#333066] rounded-md transition-colors"
                >
                  Personalización
                </Link>
              </li>
              <li>
                <Link 
                  href="/pricing" 
                  className="flex items-center gap-2 px-3 py-2 hover:bg-[#333066] rounded-md transition-colors"
                >
                  <ShoppingCart size={18} />
                  Planes
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