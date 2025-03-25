"use client";
import Link from "next/link";
import {
  FileText,
  Settings,
  LayoutDashboard,
  PanelRightOpen,
  PanelBottomOpen,
  Moon,
  Sun,
  ChevronRight,
  Menu
} from 'lucide-react';
import { usePathname } from "next/navigation";

interface SidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

const Sidebar = ({ collapsed, onToggleCollapse }: SidebarProps) => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href ||
      (pathname && href !== '/dashboard' && pathname.startsWith(href));
  };

  return (
    <div className="h-full lg:p-4 flex flex-col overflow-visible ">
      <button
        onClick={onToggleCollapse}
        className="self-end mb-2 p-1 rounded-full hover:bg-gray-300"
        aria-label={collapsed ? "Expandir menú" : "Colapsar menú"}
      >
        {collapsed ? <Menu size={20} /> : <ChevronRight size={20} />}
      </button>

      <ul className="space-y-2 flex-1">
        {!collapsed && <li className="text-neutral-600 font-light text-xs pl-2">Documentos</li>}

        {/* Dashboard */}
        <li className="relative group">
          <Link
            href="/dashboard"
            className={`flex items-center p-2 rounded hover:bg-gray-300 transition-colors ${isActive('/dashboard') ? 'bg-gray-300 text-gray-800 font-medium' : 'text-gray-600'
              }`}
          >
            <LayoutDashboard className={collapsed ? "" : "mr-2"} size={20} />
            {!collapsed && "Dashboard"}
          </Link>

          {collapsed && (
            <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-[#3a3775]  text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
              Dashboard
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-700 rotate-45"></div>
            </div>
          )}
        </li>

        {/* Introducción */}
        <li className="relative group">
          <Link
            href="/dashboard/introduccion"
            className={`flex items-center p-2 rounded hover:bg-gray-300 transition-colors ${isActive('/dashboard/introduccion') ? 'bg-gray-300 text-gray-800 font-medium' : 'text-gray-600'
              }`}
          >
            <FileText className={collapsed ? "" : "mr-2"} size={20} />
            {!collapsed && "Introducción"}
          </Link>
          {collapsed && (
            <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-[#3a3775] text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
              Introducción
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-700 rotate-45"></div>
            </div>
          )}
        </li>

        {/* Configuración */}
        <li className="relative group">
          <Link
            href="/dashboard/setup"
            className={`flex items-center p-2 rounded hover:bg-gray-300 transition-colors ${isActive('/dashboard/setup') ? 'bg-gray-300 text-gray-800 font-medium' : 'text-gray-600'
              }`}
          >
            <Settings className={collapsed ? "" : "mr-2"} size={20} />
            {!collapsed && "Configuración"}
          </Link>
          {collapsed && (
            <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-[#3a3775]  text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
              Configuración
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-700 rotate-45"></div>
            </div>
          )}
        </li>

        {!collapsed && <li className="text-neutral-600 font-light text-xs pl-2 mt-4">Diseños</li>}

        {/* Vertical */}
        <li className="relative group">
          <Link
            href="/dashboard/layout/vertical"
            className={`flex items-center p-2 rounded hover:bg-gray-300 transition-colors ${isActive('/dashboard/layout/vertical') ? 'bg-gray-300 text-gray-800 font-medium' : 'text-gray-600'
              }`}
          >
            <PanelRightOpen className={collapsed ? "" : "mr-2"} size={20} />
            {!collapsed && "Vertical"}
          </Link>
          {collapsed && (
            <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-[#3a3775] text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
              Vertical
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-700 rotate-45"></div>
            </div>
          )}
        </li>

        {/* Horizontal */}
        <li className="relative group">
          <Link
            href="/dashboard/layout/horizontal"
            className={`flex items-center p-2 rounded hover:bg-gray-300 transition-colors ${isActive('/dashboard/layout/horizontal') ? 'bg-gray-300 text-gray-800 font-medium' : 'text-gray-600'
              }`}
          >
            <PanelBottomOpen className={collapsed ? "" : "mr-2"} size={20} />
            {!collapsed && "Horizontal"}
          </Link>
          {collapsed && (
            <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-[#3a3775]  text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
              Horizontal
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-700 rotate-45"></div>
            </div>
          )}
        </li>

        {!collapsed && <li className="text-neutral-600 font-light text-xs pl-2 mt-4">Apariencia</li>}

        {/* Tema Claro */}
        <li className="relative group">
          <Link
            href="/dashboard/theme/light"
            className={`flex items-center p-2 rounded hover:bg-gray-300 transition-colors ${isActive('/dashboard/theme/light') ? 'bg-gray-300 text-gray-800 font-medium' : 'text-gray-600'
              }`}
          >
            <Sun className={collapsed ? "" : "mr-2"} size={20} />
            {!collapsed && "Tema Claro"}
          </Link>
          {collapsed && (
            <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-[#3a3775]  text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
              Tema Claro
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-700 rotate-45"></div>
            </div>
          )}
        </li>

        {/* Tema Oscuro */}
        <li className="relative group">
          <Link
            href="/dashboard/theme/dark"
            className={`flex items-center p-2 rounded hover:bg-gray-300 transition-colors ${isActive('/dashboard/theme/dark') ? 'bg-gray-300 text-gray-800 font-medium' : 'text-gray-600'
              }`}
          >
            <Moon className={collapsed ? "" : "mr-2"} size={20} />
            {!collapsed && "Tema Oscuro"}
          </Link>
          {collapsed && (
            <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-[#3a3775]  text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
              Tema Oscuro
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-700 rotate-45"></div>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;