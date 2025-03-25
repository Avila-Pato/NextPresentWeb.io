import React from 'react';

const IntroductionPage = () => {
    return (
        <section className="max-w-4xl mx-auto px-4 py-8">
            <h1 id="introduccion" className="text-3xl font-bold mb-6">Introducción</h1>
            <div className="text-gray-700 leading-relaxed mb-8">
                <p className="mb-4">
                    En un mundo donde la organización y la productividad son clave, <strong>NotionCraft</strong> nace como una solución personalizada para distintas comunidades. A diferencia de las plantillas genéricas, <strong>NotionCraft</strong> ofrece espacios de trabajo diseñados específicamente para sectores como enfermería, turismo, educación, informática y medioambiente, entre otros.
                </p>
                <p className="mb-4">
                    Cada comunidad tiene necesidades únicas, y <strong>NotionCraft</strong> adapta Notion para que profesionales, estudiantes e investigadores puedan optimizar su flujo de trabajo de manera eficiente. Desde la gestión de pacientes en salud, hasta el seguimiento de proyectos en informática o la planificación de eventos turísticos, esta plataforma proporciona herramientas intuitivas y flexibles para cada sector.
                </p>
                <p className="mb-4">
                    El objetivo de <strong>NotionCraft</strong> es hacer que la organización sea más atractiva, accesible y funcional, permitiendo a los usuarios maximizar su productividad sin perder la personalización que cada disciplina necesita. Con interfaces intuitivas y estructuras adaptadas a cada necesidad, esta herramienta busca revolucionar la manera en que diferentes comunidades gestionan su información y colaboran en proyectos.
                </p>
            </div>

            <h2 id="como-funciona" className="text-2xl font-bold mb-4 mt-8">¿Cómo funciona?</h2>
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    <strong>NotionCraft</strong> se basa en la flexibilidad y personalización que ofrece Notion, pero llevándolo un paso más allá. Cada plantilla y sistema de organización ha sido diseñado específicamente para responder a las necesidades de su comunidad objetivo. 
                </p>
                <p className="mb-4">
                    La plataforma permite a los usuarios acceder a espacios de trabajo estructurados con bases de datos interactivas, calendarios, tableros Kanban y documentos colaborativos, todo integrado en un mismo entorno. 
                </p>
                <p className="mb-4">
                    Además, <strong>NotionCraft</strong> fomenta la comunidad y el aprendizaje, proporcionando guías y recursos que ayudan a cada usuario a sacar el máximo provecho de su espacio de trabajo digital.
                </p>
            </div>
        </section>
    );
};

export default IntroductionPage;
