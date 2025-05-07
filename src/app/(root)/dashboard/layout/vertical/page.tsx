import React from 'react';

const VerticalPage = () => {
  return (
    <>
      <div className="mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Configuración de la Barra Lateral</h1>

        {/* Descripción general de la funcionalidad */}
        <p className="mb-6 text-gray-700">
          La barra lateral de esta página contiene una tabla de contenidos que muestra todos los encabezados
          (<code>h1</code>, <code>h2</code>, <code>h3</code>, etc.) dentro del contenido principal.
          Los usuarios pueden navegar a cualquier sección del contenido al hacer clic en uno de los encabezados.
        </p>

        <div className="flex space-x-4 mx-16">

        <main className="flex-1">
            <h1 id="section-1" className="text-xl font-semibold">Sección 1</h1>
            <p className="mb-4">Contenido de la sección 1...</p>

            <h2 id="section-2" className="text-lg font-semibold">Sección 2</h2>
            <p>Contenido de la sección 2...</p>
          </main>

          {/* Barra Lateral */}
          <div className="w-64 h-full bg-white border-l border-gray-200 p-2 flex flex-col">
            {/* Botón para expandir o colapsar la barra lateral */}
            <button className="hover:bg-gray-100 rounded m-2">
              {/* Aquí se muestra un ícono dependiendo si está colapsado o expandido */}
            </button>

            {/* Lista de contenido cuando la barra lateral está expandida */}
            <div className="flex-1 overflow-y-auto">
              <h3 className="font-bold text-gray-700 mb-3">Tabla de Contenidos</h3>
              <ul className="space-y-2">
                {/* Ejemplo de item de la tabla de contenidos */}
                <li className="cursor-pointer px-2 py-1 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                  Sección 1
                </li>
                <li className="cursor-pointer px-2 py-1 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                  Sección 2
                </li>
              </ul>
            </div>
          </div>

          {/* Contenido Principal */}
         
        </div>

        <h2 className="mt-6 text-xl font-bold">¿Cómo funciona?</h2>
        <p className="text-gray-700">
          La barra lateral se puede expandir y colapsar mediante un botón. Cuando está expandida, muestra los
          encabezados del contenido. Al hacer clic en uno de los encabezados, el usuario será desplazado suavemente
          a esa sección del contenido, lo que facilita la navegación dentro de la página.
        </p>
        <p className="mt-4">
          La lista de contenido se genera dinámicamente según los encabezados presentes en el documento. Esto
          permite que la tabla de contenidos siempre esté sincronizada con el contenido principal.
        </p>
      </div>
    </>
  );
};

export default VerticalPage;
