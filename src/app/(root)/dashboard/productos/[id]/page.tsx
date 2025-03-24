// // app/dashboard/productos/[id]/page.tsx
// import type { Metadata } from 'next';

// type PageProps = {
//   params: { id: string };
//   searchParams?: { [key: string]: string | string[] };
// };

// export const generateMetadata = ({ params }: PageProps): Metadata => ({
//   title: `Producto ${params.id}`
// });

// export default function Page({ params }: PageProps) {
//   return (
//     <section className="bg-[#eff2f7] w-full min-h-screen p-4">
//       <h1 className="text-2xl font-bold">Producto {params.id}</h1>
//       <p>Detalles del producto {params.id}.</p>
//     </section>
//   );
// }