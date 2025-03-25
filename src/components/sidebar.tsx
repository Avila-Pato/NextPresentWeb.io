import Link from "next/link";
import { 
  FileText, 
  Settings,
  LaptopMinimalCheck,
  PanelRightOpen,
  PanelBottomOpen,
  Moon,
  Sun,
  } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-52 h-full bg-[#e6e7ee] p-4 font-bold text-gray-500  " >
      <ul className="space-y-2">
        <li className="text-neutral-600 font-light text-xs">Documentos</li>

        <li className="font-medium">
          <Link href="/dashboard" className="block p-2 hover:bg-gray-400 rounded ">
          <LaptopMinimalCheck className="inline-flex justify-center items-center mr-2 " size={20}/>
            Dashboard
          </Link>
        </li>

        <li className="font-medium">
        <Link href="/dashboard/introduccion" className="block p-2  hover:bg-gray-400 rounded">
        <FileText className="inline-flex  justify-center items-center mr-2 " size={20} />   
         Introduccion
          </Link>
        </li>
            
          {/* de esta manera se manejan las rutas por props */}
          {/* <li>
          <Link href="/dashboard/productos/1" className="block p-2 hover:bg-gray-400 rounded">
          Productos
          </Link>
          */}

          <li className="font-medium">
          <Link href="/dashboard/productos" className="block p-2 hover:bg-gray-400 rounded">
          < Settings className="inline-flex  justify-center items-center mr-2 " size={20}  />
            Setup
          </Link>
            </li>

              <li className="text-neutral-600 font-light text-xs">Layouts</li>

            <li className="font-medium">
          <Link href="/dashboard/productos" className="block p-2 hover:bg-gray-400 rounded">
          <PanelRightOpen className="inline-flex  justify-center items-center mr-2 " size={20}/>
            Vertical
          </Link>
            </li>

            <li className="font-medium">
          <Link href="/dashboard/productos" className="block p-2 hover:bg-gray-400 rounded">
          <PanelBottomOpen className="inline-flex  justify-center items-center mr-2 " size={20}/>
            Horizontal
          </Link>
            </li>
              <li className="text-neutral-600 font-light text-xs">Temas</li>

            <li className="font-medium">
          <Link href="/dashboard/productos" className="block p-2 hover:bg-gray-400 rounded">
          <Sun className="inline-flex  justify-center items-center mr-2 " size={20}/>
            Version Light
          </Link>
            </li>

            <li className="font-medium">
          <Link href="/dashboard/productos" className="block p-2 hover:bg-gray-400 rounded">
          <Moon className="inline-flex  justify-center items-center mr-2 " size={20}/>
            Version Dark
          </Link>
            </li>
      </ul>
    </aside>
  );
};

export default Sidebar;