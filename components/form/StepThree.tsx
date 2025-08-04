'use client'
import React from 'react'

export default function StepThree({ data, onChange, onNext, onBack }) {
  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4 text-[--green-color]">Step 3: Online Presence</h2>

      <input name="website" value={data.website} onChange={onChange} placeholder="Website" className="w-full bg-black border border-[--purpple-color] text-white p-2 rounded mb-4" />
      <input name="socialMedia" value={data.socialMedia} onChange={onChange} placeholder="Social media" className="w-full bg-black border border-[--purpple-color] text-white p-2 rounded mb-4" />

      <div className="flex justify-between">
        <button onClick={onBack} className="bg-gray-600 text-white px-4 py-2 rounded">← Back</button>
        <button onClick={onNext}  className="bg-[var(--green-color)] hover:bg-[#a8e3d9] text-black px-4 py-2 rounded">Next →</button>
      </div>
    </div>
  )
}