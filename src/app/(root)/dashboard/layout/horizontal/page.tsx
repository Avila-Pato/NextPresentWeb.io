import React from 'react'

const HorizontalPage = () => {
  return (
    <div className='mx-auto px-4 py-8 '>
      <h1 className='text-2xl font-medium text-gray-500'>Configuración del menú horizontal</h1>

      <p className='pt-8 text-2xl font-medium text-gray-500'>❓¿Cómo agregar o cambiar elementos del menú?</p>
      <p className='pt-2 text-gray-600'>
        Para agregar, cambiar o eliminar elementos del menú en la navegación lateral izquierda, simplemente edita el archivo <code>src/app/(root)/dashboard/layout/horizontal/page.tsx</code>.
        El cambio se reflejará automáticamente gracias al sistema de enrutamiento y componentes de Next.js.
      </p>

      <div className='mt-6'>
        <h2 className='text-2xl font-medium text-gray-500'>
          ❓¿Cómo cambiar el ancho de la barra de navegación lateral?
        </h2>
        <p className='pt-2 text-gray-600'>
          Si deseas cambiar el ancho de la barra lateral izquierda, ubica el archivo o componente donde se define su estilo (por ejemplo: <code>Sidebar.tsx</code> dentro de <code>layout</code>) y ajusta la clase de ancho como <code>w-64</code>, <code>w-60</code>, etc.
        </p>

        <pre className='bg-gray-100 rounded-md p-4 mt-2 overflow-auto text-sm'>
          <code>{`<div className="w-64 bg-gray-800">
  {/* contenido de la barra lateral */}
</div>`}
          </code>
        </pre>
      </div>

      <div className='mt-6'>
        <h2 className='text-2xl font-medium text-gray-500'>❓¿Cómo integrar nuevos componentes a la barra lateral?</h2>
        <p className='pt-2 text-gray-600'>
          Cada una de las opciones de layout está disponible como un componente. Para utilizar un layout predefinido, simplemente importa dentro de <code>(root)</code> en la carpeta <code>layout</code> para luego crear una nueva página y renderizar el componente del archivo correspondiente, por ejemplo crear en la ruta <code>src/app/(root)/layout</code>.
          y dentro de la carpeta <code>layout</code> crear un archivo <code>NewLayout.tsx</code>
        </p>

        <pre className='bg-gray-100 rounded-md p-4 mt-2 overflow-auto text-sm'>
          <code>{`
import React from 'react'

const NewLayout = () => {
  return (
    <div>
      <h1>NewLayout menu configuration</h1>
    </div>
  )
}

export default NewLayout
`}
</code>
        </pre>
      </div>
    </div>
  )
}

export default HorizontalPage
