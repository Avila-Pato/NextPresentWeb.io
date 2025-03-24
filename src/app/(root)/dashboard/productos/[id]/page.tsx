interface ProductoPageProps {
    params: {
      id: string;
    };
  }
  
  const ProductoPage = ({ params }: ProductoPageProps) => {
    return (
      <section className="bg-[#eff2f7] w-full min-h-screen p-4">
        <h1 className="text-2xl font-bold">Producto {params.id}</h1>
        <p>Detalles del producto {params.id}.</p>
      </section>
    );
  };
  
  export default ProductoPage;