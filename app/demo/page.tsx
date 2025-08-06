//app/demo/page
'use client'
import { useState, useEffect } from 'react'
import { Business } from "@/types/business";
export default function DemoPage() {
  const [question, setQuestion] = useState('')
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [businesses, setBusinesses] = useState<Business[]>([])
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null)

  useEffect(() => {
    const fetchBusinesses = async () => {
   const res = await fetch('/api/business')
      const data = await res.json()
      setBusinesses(data)
      console.log(data.lenght)
    }

    fetchBusinesses()
  }, [])

  const handleAsk = async () => {
    if (!question.trim() || !selectedBusiness) return
    setIsLoading(true)

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question,
          businessId: selectedBusiness.id,
        }),
      })

      const data = await res.json()
      setResponse(data.answer)
      console.log(data.answer)
    } catch (err) {
      console.error(err)
      setResponse('Ocurrió un error al consultar la IA.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl mb-4">Seleccioná una empresa</h1>
        <select
          onChange={(e) => {
            const selected = businesses.find((b) => b.id === e.target.value)
            setSelectedBusiness(selected)
          }}
          className="mb-4 w-full text-black p-2 rounded"
        >
          <option value="">Elegí una empresa</option>
          {businesses.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name}
            </option>
          ))}
        </select>

        {selectedBusiness && (
          <>
            <h2 className="text-xl mb-4">
              Preguntale lo que quieras sobre <b>{selectedBusiness.name}</b>
            </h2>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="border-3 border-solid rounded-3xl w-full p-3 text-white"
              placeholder="Ask a question..."
            />
            <button
              onClick={handleAsk}
              disabled={isLoading}
              className="mt-4 bg-white text-black px-4 py-2 rounded hover:bg-gray-300"
            >
              {isLoading ? 'Thinking...' : 'You can ask'}
            </button>
            {response && (
              <div className="mt-6 bg-gray-800 p-4 rounded">
                <p>{response || 'no hay' }</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
