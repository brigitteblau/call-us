'use client'
import React from 'react'
import { FormData } from './form';

interface StepTwoProps {
  data: FormData
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onNext: () => void
  onBack: () => void
}

export default function StepTwo({ data, onChange, onNext, onBack }: StepTwoProps) {
  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4 text-[--green-color]">Step 2: Contact & Location</h2>

      <input name="businessHours" value={data.businessHours} onChange={onChange} placeholder="Business hours" className="w-full bg-black border border-[--green-color] text-white p-2 rounded mb-4" />
      <input name="address" value={data.address} onChange={onChange} placeholder="Address" className="w-full bg-black border border-[--green-color] text-white p-2 rounded mb-4" />
      <input name="phone" value={data.phone} onChange={onChange} placeholder="Phone number" className="w-full bg-black border border-[--green-color] text-white p-2 rounded mb-4" />
      <input name="whatsapp" value={data.whatsapp} onChange={onChange} placeholder="WhatsApp" className="w-full bg-black border border-[--green-color] text-white p-2 rounded mb-4" />
      <input name="email" value={data.email} onChange={onChange} placeholder="Email" className="w-full bg-black border border-[--green-color] text-white p-2 rounded mb-4" />

      <div className="flex justify-between">
        <button onClick={onBack} className="bg-gray-600 text-white px-4 py-2 rounded">← Back</button>
        <button onClick={onNext}  className="bg-[var(--green-color)] hover:bg-[#a8e3d9] text-black px-4 py-2 rounded">Next →</button>
      </div>
    </div>
  )
}
