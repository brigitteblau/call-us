'use client'
import React from 'react'
import Link from 'next/link'
import { SignedOut, SignedIn, useUser, SignOutButton } from '@clerk/nextjs'

const NavBar = () => {
  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded) return <p>Loading...</p>

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white" style={{ '--main-color': 'rgb(212, 126, 126)' }}>
      <div>
        <Link href="./" className="text-2xl font-bold text-[color:var(--main-color)] hover:opacity-80 transition">
        Call Us (Logo)
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <SignedIn>

          <div className="flex items-center gap-4">
            {user?.imageUrl ? (
              <Link href="/profile">
                <img
                  src={user.imageUrl}
                  alt="profile"
                  className="h-12 w-12 rounded-full border-2 border-[color:var(--main-color)] hover:scale-105 transition"
                />
              </Link>
            ) : (
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white">
                ?
              </div>
            )}

            <SignOutButton>
              <button className="border border-[color:var(--main-color)]
              text-[color:var(--main-color)] hover:border-transparent
              hover:bg-[color:var(--main-color)] hover:text-white
              active:bg-red-700 rounded-full px-4 py-2 transition">
                Sign out
              </button>
            </SignOutButton>
          </div>
        </SignedIn>

        <SignedOut>
           <Link href="./" className="text-l  text-[color:var(--main-color)] hover:opacity-80 hover:underline transition">
          Home
        </Link>
         <Link href="./suscribe" className="text-l  text-[color:var(--main-color)] hover:opacity-80  hover:underline transition">
         Suscribe
        </Link>
          <Link
            href="/signup"
            className="text-[color:var(--main-color)] border border-[color:var(--main-color)] px-4 py-2 rounded-full hover:bg-[color:var(--main-color)] hover:text-white transition"
          >
            Sign Up
          </Link>
 
        </SignedOut>
      </div>
    </nav>
  )
}

export default NavBar
