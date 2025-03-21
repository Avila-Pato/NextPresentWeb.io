import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define las rutas públicas
const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)', // Rutas que comienzan con /sign-in
  '/sign-up(.*)', // Rutas que comienzan con /sign-up
  '/',            // Ruta de inicio
  '/api/auth/(.*)', // Autenticación
  '/api/webhooks/(.*)', // Webhooks
])

export default clerkMiddleware(async (auth, request) => {
  // Protege las rutas que no son públicas
  if (!isPublicRoute(request)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Ignora archivos estáticos y rutas internas de Next.js
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Siempre ejecuta para rutas de API
    '/(api|trpc)(.*)',
  ],
}