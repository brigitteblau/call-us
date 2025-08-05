import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ error: "Usuario no autenticado" }, { status: 401 });
    }

   
    const profile = await prisma.profile.findUnique({
      where: { userId: user.id },
    });

    if (!profile) {
      return NextResponse.json({ error: "Perfil no encontrado" }, { status: 404 });
    }

  
    const business = await prisma.business.create({
      data: {
        ...body,
        profile: {
          connect: { id: profile.id }
        }
      },
    });

    return NextResponse.json(business, { status: 201 });
  } catch (error) {
    console.error("error al guardar", error);
    return NextResponse.json({ error: 'algo salió mal' }, { status: 500 });
  }
}
