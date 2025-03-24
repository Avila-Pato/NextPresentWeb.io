"use client"; // Necesario para hooks y efectos
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const TableOfContents = () => {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const pathname = usePathname();



   // Reinicia los encabezados y el activo al cambiar de ruta
   useEffect(() => {
    setHeadings([]);
    setActiveId("");
  }, [pathname]);


  // Extrae los títulos del contenido
  useEffect(() => {
    const content = document.querySelector("main");
    const headingElements = Array.from(content?.querySelectorAll("h1, h2, h3") || []);
    
    const headingData = headingElements.map((heading) => ({
      id: heading.id || `${heading.textContent?.toLowerCase().replace(/\s+/g, "-")}`,
      text: heading.textContent || "",
      level: parseInt(heading.tagName.substring(1)),
    }));

    // Asigna IDs si no los tienen
    headingElements.forEach((heading, index) => {
      if (!heading.id) {
        heading.id = `heading-${index}`;
      }

    });
    setHeadings(headingData);
 // Timeout para esperar a que el nuevo contenido se cargue
    const timer = setTimeout(() => setHeadings(headingData), 300);
    
    return () => clearTimeout(timer);

  }, [pathname]);

   // Timeout para esperar a que el nuevo contenido se cargue
 

  // Maneja el scroll y la detección activa de las secciones
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Ajuste para el navbar
      
      for (const heading of headings) {
        const element = document.getElementById(heading.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveId(heading.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  // Scroll suave al hacer clic
  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90; // Ajusta según la altura de tu navbar
      const position = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: position - offset, behavior: "smooth" });
    }
  };

  return (
    <aside className="hidden lg:block fixed right-8 top-16 w-64 p-4 border-l border-gray-200">
      <h3 className="font-bold mb-4">Contenido</h3>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`pl-${heading.level - 2} text-sm cursor-pointer hover:text-blue-500 ${
              activeId === heading.id ? "text-blue-600 font-medium" : "text-gray-600"
            }`}
            onClick={() => scrollToHeading(heading.id)}
          >
            {heading.text}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TableOfContents;