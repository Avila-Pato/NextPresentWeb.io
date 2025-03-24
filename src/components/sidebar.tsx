import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-52 h-full bg-[#e6e7ee] p-4 font-bold text-gray-800 ">
      <ul className="space-y-2">
        <li className="text-neutral-600 font-light text-xs">Documentos</li>
        <li>
          <Link href="/dashboard" className="block p-2 hover:bg-gray-400 rounded ">
            Dashboard
          </Link>
        </li>
        <Link href="/dashboard/introduccion" className="block p-2 hover:bg-gray-400 rounded">
            Introduccion
          </Link>
            
          {/* de esta manera se manejan las rutas por props */}
          {/* <li>
          <Link href="/dashboard/productos/1" className="block p-2 hover:bg-gray-400 rounded">
          Productos
          </Link>
          */}

          <li>
          <Link href="/dashboard/productos" className="block p-2 hover:bg-gray-400 rounded">
            Productos
          </Link>
            </li>
              <li className="text-neutral-600 font-light text-xs">Layouts</li>
            <li>
          <Link href="/dashboard/productos" className="block p-2 hover:bg-gray-400 rounded">
            Vertical
          </Link>
            </li>

            <li>
          <Link href="/dashboard/productos" className="block p-2 hover:bg-gray-400 rounded">
            Horizontal
          </Link>
            </li>
              <li className="text-neutral-600 font-light text-xs">Temas</li>
            <li>
          <Link href="/dashboard/productos" className="block p-2 hover:bg-gray-400 rounded">
            Version Light
          </Link>
            </li>

            <li>
          <Link href="/dashboard/productos" className="block p-2 hover:bg-gray-400 rounded">
            Version Dark
          </Link>
            </li>
      </ul>
    </aside>
  );
};

export default Sidebar;