import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-52 h-full bg-[#e6e7ee] p-4 font-bold text-gray-800">
      <ul className="space-y-2">
        <li>
          <Link href="/dashboard" className="block p-2 hover:bg-gray-700 rounded">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/dashboard/productos/1" className="block p-2 hover:bg-gray-700 rounded">
            Producto 1
          </Link>
        </li>
        <li>
          <Link href="/dashboard/productos/2" className="block p-2 hover:bg-gray-700 rounded">
            Producto 2
          </Link>
        </li>
        <li>
          <Link href="/dashboard/productos/3" className="block p-2 hover:bg-gray-700 rounded">
            Producto 3
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;