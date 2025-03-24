// import { NextResponse } from 'next/server';
// import axios from 'axios';

// export async function GET() {
    
//   // // const url = `env`;

//   try {
//     const response = await axios.get(url);
//     const books = response.data.items || [];
//     return NextResponse.json(books);
//   } catch (error) {
//     console.error('Error al buscar libros:', error);
//     return NextResponse.json(
//       { error: 'Error al buscar libros' },
//       { status: 500 }
//     );
//   }
// }