// /components/InitUser.tsx
'use client'
import { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'

export default function InitUser() {
  const { isSignedIn } = useUser()

  useEffect(() => {
    if (isSignedIn) {
      fetch('/api/create-profile', { method: 'POST' })
    }
  }, [isSignedIn])

  return null
}
