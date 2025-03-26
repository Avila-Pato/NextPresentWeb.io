import Image from 'next/image'
import React from 'react'

const DashboardPage = () => {
  return (
    <section className="w-full min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Panel de Control</h1>

      <div className="max-w-4xl mx-auto">
        <div className="text-justify space-y-4">
          {/* Imagen con float para que el texto fluya alrededor */}
          <div className="float-left mr-6 mb-4">
            <Image 
              src="/hub.png" 
              alt="Centro de control" 
              width={300} 
              height={300} 
              className="rounded-lg shadow-md" 
            />
          </div>

          <p>
            <span className="font-semibold">Diseñado pensando en los usuarios</span><br/>
            NotionCraft es completamente responsive y compatible con todos los navegadores modernos. Gracias a su diseño moderno y fácil de usar, puedes crear una interfaz completamente funcional que los usuarios adorarán. ¡Cada elemento de la interfaz se ha creado con atención al detalle para que tu diseño sea hermoso!
          </p>
          <p>
            <span className="font-semibold">Construido para desarrolladores</span><br/>
            Pensando en lo que se necesita para escribir código de alta calidad, queremos ayudarte a acelerar el proceso de desarrollo y mantener tu código limpio. Basado en Bootstrap 5, Tabler es una solución vanguardista, compatible con todos los navegadores modernos y completamente responsive.
          </p>
          <p>
            <span className="font-semibold">Totalmente personalizable</span><br/>
            Puedes personalizar fácilmente los elementos de la interfaz para que se adapten a las necesidades de tu proyecto. Y no te preocupes si no tienes mucha experiencia, ¡Tabler es fácil de comenzar a usar!
          </p>
        </div>
      </div>
    </section>
  )
}

export default DashboardPage