"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TableOfContentsProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

const TableOfContents = ({ collapsed, onToggleCollapse }: TableOfContentsProps) => {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const pathname = usePathname();

  // Extraer encabezados del contenido
  useEffect(() => {
    const extractHeadings = () => {
      const content = document.querySelector("main");
      if (!content) return;

      const headingElements = Array.from(content.querySelectorAll("h1, h2, h3, h4"));
      
      const headingData = headingElements.map((heading, index) => {
        // Generar ID si no existe
        if (!heading.id) {
          heading.id = `section-${index}-${heading.textContent?.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "") || ""}`;
        }

        return {
          id: heading.id,
          text: heading.textContent || "",
          level: parseInt(heading.tagName.substring(1))
        };
      });

      setHeadings(headingData);
    };

    // Usar MutationObserver para detectar cambios dinámicos en el contenido
    const observer = new MutationObserver(extractHeadings);
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Extraer inicialmente
    extractHeadings();

    return () => observer.disconnect();
  }, [pathname]);

  // Manejar scroll y detección de sección activa
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Ajuste para el navbar
      
      // Encontrar la sección actual visible
      let currentActiveId: string | null = null;
      
      for (const heading of headings) {
        const element = document.getElementById(heading.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentActiveId = heading.id;
            break;
          }
        }
      }

      setActiveId(currentActiveId);
    };

    // Agregar event listener
    window.addEventListener("scroll", handleScroll);
    
    // Ejecutar inicialmente
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  // Scroll suave a la sección
  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const navbarHeight = 64; // Altura del navbar
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight;

    // Resaltado temporal
    element.classList.add("highlight-section");
    setTimeout(() => element.classList.remove("highlight-section"), 2000);

    // Scroll suave
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  // No mostrar si no hay encabezados
  if (headings.length === 0) {
    return null;
  }

  return (
    <div className={`h-full bg-white border-l border-gray-200 flex flex-col transition-all duration-300 ${
      collapsed ? "w-10 items-center" : "w-64"
    }`}>
      {/* Botón para colapsar/expandir */}
      <button 
        onClick={onToggleCollapse}
        className={`p-2 hover:bg-gray-100 rounded m-2 ${
          collapsed ? "self-center" : "self-end"
        }`}
        aria-label={collapsed ? "Expandir tabla de contenidos" : "Contraer tabla de contenidos"}
      >
        {collapsed ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
      </button>

      {/* Contenido cuando está expandido */}
      {!collapsed && (
        <div className="flex-1 overflow-y-auto p-4">
          <h3 className="font-bold text-gray-700 mb-3">Tabla de Contenidos</h3>
          <ul className="space-y-2">
            {headings.map((heading) => (
              <li
                key={heading.id}
                className={`cursor-pointer transition-colors rounded px-2 py-1 text-sm ${
                  activeId === heading.id
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                }`}
                style={{ paddingLeft: `${(heading.level - 1) * 12}px` }}
                onClick={() => scrollToHeading(heading.id)}
              >
                {heading.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TableOfContents;