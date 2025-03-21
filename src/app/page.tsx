"use client";
import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [loadingSignIn, setLoadingSignIn] = useState(false); 
  const [loadingSignUp, setLoadingSignUp] = useState(false); 

  // Función para cargar datos en "Iniciar sesión"
  function loadSignInData() {
    setLoadingSignIn(true);

    setTimeout(() => {
      setLoadingSignIn(false);
    }, 3000);
  }

  // Función para cargar datos en "Registrarse"
  function loadSignUpData() {
    setLoadingSignUp(true);

    setTimeout(() => {
      setLoadingSignUp(false);
    }, 3000);
  }

  return (
    <div className="grid grid-cols-3 min-h-screen">
      {/* Lado izquierdo con la imagen de fondo */}
      <div className="relative col-span-2 h-screen ">
        <Image
          src="/background.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="absolute inset-0"
        />
      </div>

      {/* Lado derecho con contenido */}
      <div className="flex flex-col items-center justify-center p-8 sm:p-20 bg-hero">
        <div className="bg-blue-900 p-4 rounded-lg">
          <h1 className="text-4xl font-bold text-center mb-4 text-white">
            Welcome to BookWill.io
          </h1>

          {/* Botón de Iniciar Sesión */}
          <SignInButton fallbackRedirectUrl="/dashboard">
            <Button
              onClick={loadSignInData}
              disabled={loadingSignIn}
              className="font-medium bg-[#0066dc] p-2 rounded-lg flex items-center justify-center hover:bg-[#0050b3] w-full transition-all ease-in-out duration-200 hover:scale-105 hover:opacity-80 text-md"
            >
              <span className="oneSpan">
                {loadingSignIn ? "Cargando..." : "Iniciar Sesión"}
              </span>
              <ExternalLink size={100} />
            </Button>
          </SignInButton>

          {/* Botón de Registrarse */}
          <div className="pt-3">
            <SignUpButton>
              <Button
                onClick={loadSignUpData}
                disabled={loadingSignUp}
                className="text-white font-medium bg-[#0066dc] p-2 rounded-lg flex items-center justify-center hover:bg-[#0050b3] w-full transition-all ease-in-out duration-200 hover:scale-105 hover:opacity-80 text-md"
              >
                <span className="twoSpan">
                  {loadingSignUp ? "Cargando..." : "Registrarse"}
                </span>
                <ExternalLink />
              </Button>
            </SignUpButton>
          </div>

          {/* Enlace a GitHub */}
          <div className="pt-3">
            <Link
              href="https://github.com/Avila-Pato/NextBookWild.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-[#0066dc] font-medium p-2 rounded-lg flex items-center justify-center hover:bg-[#0050b3] transition-all ease-in-out duration-200 hover:scale-105 hover:opacity-80 "
            >
              Github Code <ExternalLink size={30} className="pl-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
