import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
  }

  const email = clerkUser.emailAddresses[0]?.emailAddress;

  if (!email) {
    return NextResponse.json({ error: "El usuario no tiene email" }, { status: 400 });
  }

  const existingProfile = await prisma.profile.findUnique({
    where: { userId: clerkUser.id },
  });

  if (existingProfile) {
    return NextResponse.json({ message: "Ya existe )" });
  }

  await prisma.profile.create({
    data: {
      userId: clerkUser.id,
      email,
    },
  });

  return NextResponse.json({ message: "Perfil creado" });
}
