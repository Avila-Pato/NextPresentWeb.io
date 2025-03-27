"use client";

import { SignInButton } from "@clerk/nextjs";
import { useState } from 'react';
import Link from "next/link";

import Image from 'next/image';
import imageHero from '../../public/imageHero.png'; // Importa la imagen
import { Button } from "@/components/ui/button";

function App() {
  const [loadingSignIn, setLoadingSignIn] = useState(false);
  // const [loadingSignUp, setLoadingSignUp] = useState(false);

  // Función para cargar datos en "Iniciar sesión"
  function loadSignInData() {
    setLoadingSignIn(true);

    setTimeout(() => {
      setLoadingSignIn(false);
    }, 3000);
  }

  // Función para cargar datos en "Registrarse"
  // function loadSignUpData() {
  //   setLoadingSignUp(true);

  //   setTimeout(() => {
  //     setLoadingSignUp(false);
  //   }, 3000);
  // }

  return (
    <div className="min-h-screen w-full  flex flex-col justify-center  bg-[#2d2e47] text-gray-900 bg-hero">
      {/* Navbar */}
      {/* Main content */}
      <main className="flex-grow flex flex-col md:flex-row    items-center justify-between text-center p-5">
        {/* Contenido a la izquierda */}
        <div className="flex flex-col items-center md:items-start max-w-lg mx-auto text-white">
          <h6 className="text-blue-600 font-semibold ml-0 md:ml-32"> 😎 Simple way To Communicate</h6>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-2">
            Gestiona de forma rápida y sencilla
          </h1>
          <p className="text-lg mt-5 px-4 md:px-0">
            Accede a reportes, estadísticas y controla toda tu información desde un solo lugar.
          </p>
          <div className="mt-10 flex flex-col justify-center md:flex-row md:space-x-4">
            <SignInButton fallbackRedirectUrl="/dashboard">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-200 cursor-pointer"
                onClick={loadSignInData}>
                {loadingSignIn ? ' Cargando...' : 'Ver demo'}
              </Button>
            </SignInButton>

            <Button>
            <Link
             className="text-blue-600 underline  md:mt-0 hover:text-blue-800 transition duration-200 font-semibold"
             href="https://github.com/Avila-Pato/NextBookWild.io"
             target="_blank">
              ver codigo fuente
            </Link>
          </Button>
          </div>
          {/* Link a la derecha */}
          {/* <div className='flex space-x-5 mt-4'>
            <a href="#" className="text-gray-600 hover:text-blue-800 transition duration-200">✅ No credit Card </a>
            <a href="#" className="text-gray-600 hover:text-blue-800 transition duration-200"> ✅ No software to install </a>
          </div> */}
        </div>

        {/* Imagen a la derecha */}
        <div className="relative w-full md:w-1/2 mt-5 md:mt-0">
          <Image
            src={imageHero}
            alt="Descripción de la imagen"
            className="object-cover w-full h-full rounded-lg shadow-lg transition-transform duration-300"
          />
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="text-center p-5 text-sm bg-gray-100 text-gray-900">
        <p>No credit card required · No software to install</p>
      </footer> */}
    </div>
  );
}

export default App;
