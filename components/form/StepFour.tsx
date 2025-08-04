'use client'
import React from 'react'

export default function StepFour({ data, onChange, onBack, onSubmit }) {
  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4 text-[--green-color]">Step 4: Services & Other</h2>

      <textarea name="mainServices" value={data.mainServices} onChange={onChange} placeholder="Main products or services" className="w-full bg-black border border-[--green-color] text-white p-2 rounded mb-4" />
      <textarea name="faqs" value={data.faqs} onChange={onChange} placeholder="Frequently asked questions" className="w-full bg-black border border-[--green-color] text-white p-2 rounded mb-4" />
      <textarea name="moreQuestions" value={data.moreQuestions} onChange={onChange} placeholder="More questions" className="w-full bg-black border border-[--green-color] text-white p-2 rounded mb-4" />
      <textarea name="humanAgentResponse" value={data.humanAgentResponse} onChange={onChange} placeholder="If a customer asks for a human agent, what should we do?" className="w-full bg-black border border-[--green-color] text-white p-2 rounded mb-4" />
      <textarea name="promotion" value={data.promotion} onChange={onChange} placeholder="Any current promotion?" className="w-full bg-black border border-[--green-color] text-white p-2 rounded mb-4" />

      <div className="flex justify-between">
        <button onClick={onBack} className="bg-gray-600 text-white px-4 py-2 rounded">← Back</button>
        <button onClick={onSubmit}  className="bg-[var(--green-color)] hover:bg-[#a8e3d9] text-black px-4 py-2 rounded">Submit</button>
      </div>
    </div>
  )
}