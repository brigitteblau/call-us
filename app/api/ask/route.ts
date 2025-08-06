//api/ask/route
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  const { question, businessId } = await req.json()

  try {
    let systemPrompt = "Sos un asistente que responde dudas sobre una empresa."

    if (businessId) {
      const business = await prisma.business.findUnique({
        where: { id: businessId }
      })

      if (business) {
        systemPrompt += ` Esta es la información de la empresa:\n
        Nombre: ${business.name}
        Descripción: ${business.description}
        Horarios: ${business.businessHours}
        Dirección: ${business.address}
        Teléfono: ${business.phone}
        WhatsApp: ${business.whatsapp}
        Email: ${business.email}
        Sitio web: ${business.website}
        Redes sociales: ${business.socialMedia}
        Servicios principales: ${business.mainServices}
        Preguntas frecuentes: ${business.faqs}
        Más preguntas: ${business.moreQuestions}
        Política ante agente humano: ${business.humanAgentResponse}
        Promociones actuales: ${business.promotion}`
      }
    }

    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: question },
        ],
        temperature: 0.7,
      }),
    })

    const data = await res.json()
    const answer = data.choices?.[0]?.message?.content

    return NextResponse.json({ answer })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Error al contactar a OpenAI' },
      { status: 500 }
    )
  }
}
