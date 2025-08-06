import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs/server'

export async function GET() {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
  }
else{
 try {
    const profile = await prisma.profile.findUnique({
      where: { userId: user.id }
    })

    if (!profile) {
      return NextResponse.json({ error: 'Perfil no encontrado' }, { status: 404 })
    }
    const businesses = await prisma.business.findMany({
      where: { profileId: profile.id }
    })
console.log('las empresas que tienen son', businesses)
    return NextResponse.json(businesses)
  } catch (error) {
    console.error('Error al obtener negocios:', error)
    return NextResponse.json({ error: 'Error al obtener negocios' }, { status: 500 })
  }

}
 
}
