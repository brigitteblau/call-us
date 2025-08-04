
'use client'
import React from 'react'
import { FormData } from './form';

interface StepOneProps {
  data: FormData
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
 => void
  onNext: () => void
  error: boolean
}
export default function StepOne({ data, onChange, onNext, error }: StepOneProps) {
  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4 text-[--green-color]">Step 1: Basic Info</h2>

      <label className="block mb-2">Name <span className="text-red-500">*</span></label>
      <input
        name="name"
        value={data.name}
        onChange={onChange}
        className="w-full bg-black border border-[--green-color] text-white p-2 rounded mb-4"
        placeholder="Business name"
      />

      <label className="block mb-2">Short Description <span className="text-red-500">*</span></label>
      <input
        name="description"
        value={data.description}
        onChange={onChange}
        className="w-full bg-black border border-[--purpple-color] text-white p-2 rounded mb-4"
        placeholder="What do you offer?"
      />

      {error && <p className="text-red-500 mb-4">Please fill out all required fields.</p>}

      <button
        onClick={onNext}
        className="bg-[var(--green-color)] hover:bg-[#a8e3d9] text-black px-4 py-2 rounded"
      >
        Next →
      </button>
    </div>
  )
}