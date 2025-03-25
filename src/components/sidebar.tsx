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
    <div className="h-full lg:p-4  flex flex-col">
      <button
        onClick={onToggleCollapse}
        className="self-end mb-2 p-1 rounded-full hover:bg-gray-300"
        aria-label={collapsed ? "Expandir menú" : "Colapsar menú"}
      >
        {collapsed ? <Menu size={20} /> : <ChevronRight size={20} />}
      </button>

      <ul className="space-y-2 flex-1">
        {!collapsed && <li className="text-neutral-600 font-light text-xs pl-2">Documentos</li>}

        <li>
          <Link
            href="/dashboard"
            className={`flex items-center p-2 rounded hover:bg-gray-300 transition-colors ${isActive('/dashboard') ? 'bg-gray-300 text-gray-800 font-medium' : 'text-gray-600'
              }`}
          >
            {collapsed ? <LayoutDashboard size={20} /> : <LayoutDashboard className="mr-2" size={20} />}
            {!collapsed && "Dashboard"}
          </Link>
        </li>

        <li className="group relative">
          <Link
            href="/dashboard/introduccion"
            className={`flex items-center p-2 rounded hover:bg-gray-300 transition-colors ${isActive('/dashboard/introduccion') ? 'bg-gray-300 text-gray-800 font-medium' : 'text-gray-600'
              }`}
          >
            {collapsed ? <FileText size={20} /> : <FileText className="mr-2 " size={20} />}
            {!collapsed && "Introducción"}
          </Link>
          {/* Tooltip */}
        </li>

        <li>
          <Link
            href="/dashboard/setup"
            className={`flex items-center p-2 rounded hover:bg-gray-300 transition-colors ${isActive('/dashboard/setup') ? 'bg-gray-300 text-gray-800 font-medium' : 'text-gray-600'
              }`}
          >
            {collapsed ? <Settings size={20} /> : <Settings className="mr-2" size={20} />}
            {!collapsed && "Configuración"}
          </Link>
        </li>

        {!collapsed && <li className="text-neutral-600 font-light text-xs pl-2 mt-4">Diseños</li>}

        <li>
          <Link
            href="/dashboard/layout/vertical"
            className={`flex items-center p-2 rounded hover:bg-gray-300 transition-colors ${isActive('/dashboard/layout/vertical') ? 'bg-gray-300 text-gray-800 font-medium' : 'text-gray-600'
              }`}
          >
            {collapsed ? <PanelRightOpen size={20} /> : <PanelRightOpen className="mr-2" size={20} />}
            {!collapsed && "Vertical"}
          </Link>
        </li>

        <li>
          <Link
            href="/dashboard/layout/horizontal"
            className={`flex items-center p-2 rounded hover:bg-gray-300 transition-colors ${isActive('/dashboard/layout/horizontal') ? 'bg-gray-300 text-gray-800 font-medium' : 'text-gray-600'
              }`}
          >
            {collapsed ? <PanelBottomOpen size={20} /> : <PanelBottomOpen className="mr-2" size={20} />}
            {!collapsed && "Horizontal"}
          </Link>
        </li>

        {!collapsed && <li className="text-neutral-600 font-light text-xs pl-2 mt-4">Apariencia</li>}

        <li>
          <Link
            href="/dashboard/theme/light"
            className={`flex items-center p-2 rounded hover:bg-gray-300 transition-colors ${isActive('/dashboard/theme/light') ? 'bg-gray-300 text-gray-800 font-medium' : 'text-gray-600'
              }`}
          >
            {collapsed ? <Sun size={20} /> : <Sun className="mr-2" size={20} />}
            {!collapsed && "Tema Claro"}
          </Link>
        </li>

        <li>
          <Link
            href="/dashboard/theme/dark"
            className={`flex items-center p-2 rounded hover:bg-gray-300 transition-colors ${isActive('/dashboard/theme/dark') ? 'bg-gray-300 text-gray-800 font-medium' : 'text-gray-600'
              }`}
          >
            {collapsed ? <Moon size={20} /> : <Moon className="mr-2" size={20} />}
            {!collapsed && "Tema Oscuro"}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;