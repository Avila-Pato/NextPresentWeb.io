"use client";
import dynamic from "next/dynamic";

const SignUp = dynamic(() => import("@clerk/nextjs").then((mod) => mod.SignUp), { ssr: false });

export default function Page() {
  return <SignUp fallbackRedirectUrl="/dashboard" />;
}


// ssr: false hace que SignUp solo se renderice en el cliente.

// Evita que el servidor genere un HTML que no coincida con el del cliente.