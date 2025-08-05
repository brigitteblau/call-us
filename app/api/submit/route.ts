import { prisma  } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const body = await req.json()
     
    try{

        const business = await prisma.business.create({ data: body})
        return NextResponse.json(business, {status: 201})
    }
    catch(error){
        console.error("error al guardar", error)
        return NextResponse.json({error: 'algo salió mal'}, {status: 500})
    }
}