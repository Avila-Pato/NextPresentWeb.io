import React from 'react';
import Image from 'next/image';

const SetUpPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Arquitectura Detallada de Notion</h1>
        <p className="text-xl text-gray-600">
          Un análisis técnico profundo de la plataforma que combina documentos, bases de datos y gestión de proyectos
        </p>
      </header>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        <div className="p-8">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Image src="/microservices.png" width={24} height={24} alt="Microservices" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">1. Arquitectura de Microservicios</h2>
          </div>
          
          <p className="mb-6 text-gray-700">
            Notion sigue un enfoque de microservicios, donde cada funcionalidad clave está dividida en servicios independientes que pueden escalar y desplegarse por separado.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-700">Principales Componentes:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-blue-500 rounded-full w-2 h-2 mt-2 mr-2"></span>
                  <span><strong>Servicio de Autenticación:</strong> Maneja login, OAuth, y tokens de sesión (JWT)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 rounded-full w-2 h-2 mt-2 mr-2"></span>
                  <span><strong>Servicio de Documentos:</strong> Procesa el almacenamiento y edición de bloques de contenido</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 rounded-full w-2 h-2 mt-2 mr-2"></span>
                  <span><strong>Servicio de Bases de Datos:</strong> Gestiona tablas, filtros y vistas personalizadas</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 rounded-full w-2 h-2 mt-2 mr-2"></span>
                  <span><strong>Servicio de Búsqueda:</strong> Indexa contenido para búsquedas rápidas (posiblemente usando Elasticsearch)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-700">Ventajas:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-green-500 rounded-full w-2 h-2 mt-2 mr-2"></span>
                  <span><strong>Escalabilidad independiente:</strong> Si un servicio recibe más tráfico, puede escalarse sin afectar otros componentes</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 rounded-full w-2 h-2 mt-2 mr-2"></span>
                  <span><strong>Resiliencia:</strong> Fallos en un microservicio no derriban toda la plataforma</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 rounded-full w-2 h-2 mt-2 mr-2"></span>
                  <span><strong>Despliegues continuos:</strong> Actualizaciones sin downtime global</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <Image src="/cloud.png" width={24} height={24} alt="Cloud" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">2. Infraestructura en la Nube</h2>
            </div>

            <h3 className="text-lg font-semibold mb-3 text-gray-700">Componentes Clave en AWS:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="bg-orange-500 rounded-full w-2 h-2 mt-2 mr-2"></span>
                <span><strong>Amazon S3:</strong> Almacenamiento de archivos adjuntos (imágenes, PDFs)</span>
              </li>
              <li className="flex items-start">
                <span className="bg-orange-500 rounded-full w-2 h-2 mt-2 mr-2"></span>
                <span><strong>RDS (PostgreSQL):</strong> Base de datos relacional para datos estructurados</span>
              </li>
              <li className="flex items-start">
                <span className="bg-orange-500 rounded-full w-2 h-2 mt-2 mr-2"></span>
                <span><strong>ElastiCache (Redis):</strong> Cache para sesiones y datos frecuentemente accedidos</span>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-3 text-gray-700">Estrategia de Redundancia:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-purple-500 rounded-full w-2 h-2 mt-2 mr-2"></span>
                <span><strong>Multi-AZ:</strong> Los servicios se replican en al menos 3 zonas de disponibilidad</span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-500 rounded-full w-2 h-2 mt-2 mr-2"></span>
                <span><strong>Backups automatizados:</strong> Copias diarias en S3 Glacier para recuperación ante desastres</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Image src="/realtime.png" width={24} height={24} alt="Realtime" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">3. Colaboración en Tiempo Real</h2>
            </div>

            <h3 className="text-lg font-semibold mb-3 text-gray-700">Tecnologías Clave:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="bg-green-500 rounded-full w-2 h-2 mt-2 mr-2"></span>
                <span><strong>WebSockets:</strong> Mantiene conexiones persistentes para actualizaciones instantáneas</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-500 rounded-full w-2 h-2 mt-2 mr-2"></span>
                <span><strong>Operational Transform (OT):</strong> Algoritmos para resolver conflictos en ediciones simultáneas</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-500 rounded-full w-2 h-2 mt-2 mr-2"></span>
                <span><strong>Event Sourcing:</strong> Cada cambio se registra como un evento en un log inmutable</span>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-3 text-gray-700">Flujo de Sincronización:</h3>
            <ol className="space-y-3 list-decimal pl-5">
              <li>Un usuario realiza un cambio (ej: edita texto)</li>
              <li>El cliente envía un delta (cambio incremental) al servidor</li>
              <li>El servidor procesa el cambio y propaga la actualización</li>
              <li>Los clientes aplican el cambio localmente sin recargar</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Additional sections for Mobile and API would follow the same pattern */}

      <div className="mt-12 bg-blue-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Conclusión</h2>
        <p className="text-gray-700 mb-4">
          La arquitectura de Notion combina microservicios escalables, infraestructura en la nube resistente
          y tecnologías de tiempo real para ofrecer una experiencia de colaboración fluida a millones de usuarios.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-blue-600">Escalabilidad</h3>
            <p className="text-sm text-gray-600">Capacidad para crecer con la base de usuarios</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-blue-600">Resiliencia</h3>
            <p className="text-sm text-gray-600">Tolerancia a fallos mediante redundancia</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-blue-600">Tiempo Real</h3>
            <p className="text-sm text-gray-600">Colaboración instantánea entre usuarios</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetUpPage;