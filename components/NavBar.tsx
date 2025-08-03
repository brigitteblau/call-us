//components/navbar.tsx
'use client'
import React from 'react'
import Link from 'next/link'
import { SignedOut, SignedIn, useUser, SignOutButton } from '@clerk/nextjs'

const NavBar = () => {
  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded) return null

  return (
<nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 shadow-md bg-black text-white">
      <Link href="/" className="text-2xl font-bold text-white hover:opacity-80 transition">
   <img src="/logo-p.png" alt="logo call us" className='h-20 w-20' />
      </Link>

      <div className="flex items-center gap-4">
        <SignedIn>
          {user?.imageUrl && (
            <Link href="/profile">
              <img
                src={user.imageUrl}
                alt="profile"
                className="h-15 w-15 rounded-full border border-white hover:scale-105 transition"
              />
            </Link>
          )}
          <SignOutButton>
            <button className="text-white border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition">
              Sign out
            </button>
          </SignOutButton>
        </SignedIn>

        <SignedOut>
          <Link href="/auth" className="text-white border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition">
            Sign Up
          </Link>
        </SignedOut>
      </div>
    </nav>
  )
}

export default NavBar
