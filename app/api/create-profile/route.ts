import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    return NextResponse.json({ error: "Usuario no encontradi" }, { status: 404 });
  }

  const email = clerkUser.emailAddresses[0]?.emailAddress;

  if (!email) {
    return NextResponse.json({ error: "el user no tiene email" }, { status: 400 });
  }

  const existingProfile = await prisma.profile.findUnique({
    where: { userId: clerkUser.id }
  });

  if (existingProfile) {
    return NextResponse.json({ message: "ya existe :)" });
  }

  await prisma.profile.create({
    data: {
      userId: clerkUser.id,
      email,
    },
  });

  return NextResponse.json({ message: "perfil creado" });
}
