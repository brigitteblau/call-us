'use client'
import React, { useState } from 'react'
import StepOne from '@/components/form/StepOne'
import StepTwo from '@/components/form/StepTwo'
import StepThree from '@/components/form/StepThree'
import StepFour from '@/components/form/StepFour'

const initialState = {
  name: '',
  description: '',
  businessHours: '',
  address: '',
  phone: '',
  whatsapp: '',
  email: '',
  website: '',
  socialMedia: '',
  mainServices: '',
  faqs: '',
  moreQuestions: '',
  humanAgentResponse: '',
  promotion: '',
}

export default function FormPage() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState(initialState)
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleNext = () => {
    if (step === 0 && (!data.name || !data.description)) {
      setError(true)
      return
    }
    setError(false)
    setStep((prev) => prev + 1)
  }

  const handleBack = () => {
    setStep((prev) => prev - 1)
  }

  const handleSubmit = () => {
    console.log('Submitted data:', data)
    alert('Form submitted successfully!')
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-xl mx-auto">
        {step === 0 && <StepOne data={data} onChange={handleChange} onNext={handleNext} error={error} />}
        {step === 1 && <StepTwo data={data} onChange={handleChange} onNext={handleNext} onBack={handleBack} />}
        {step === 2 && <StepThree data={data} onChange={handleChange} onNext={handleNext} onBack={handleBack} />}
        {step === 3 && <StepFour data={data} onChange={handleChange} onBack={handleBack} onSubmit={handleSubmit} />}
      </div>
    </div>
  )
}
