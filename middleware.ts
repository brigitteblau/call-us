import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Define rutas públicas (accesibles sin login)
const isPublicRoute = createRouteMatcher([
  "/",
  "/auth(.*)",
//   "/suscribe(.*)", // corregido './suscribe' por '/suscribe'
]);

// Rutas de signup para redirigir si el usuario ya está logueado
const isSignupRoute = createRouteMatcher([
  "/signup(.*)"
]);

export default clerkMiddleware(async (auth, req) => {
  const userAuth = await auth();
  const { userId } = userAuth;
  const { pathname, origin } = req.nextUrl;

  // Si no está logueado y no es ruta pública → redirige a signup
  if (!isPublicRoute(req) && !userId) {
    return NextResponse.redirect(new URL("/signup", origin));
  }

  // Si está logueado y visita /signup → redirige a /mealplan
  if (isSignupRoute(req) && userId) {
    return NextResponse.redirect(new URL("/form", origin));
  }

  return NextResponse.next(); // todo lo demás sigue normalmente
});

export const config = {
  matcher: [
    // Omitir archivos estáticos y rutas internas de Next.js
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Incluir rutas de API también
    '/(api|trpc)(.*)',
  ],
};
