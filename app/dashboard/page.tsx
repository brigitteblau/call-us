import InitUser from '@/components/InitUser'
import React from 'react'
import Link from 'next/link'
import { currentUser } from '@clerk/nextjs/server'

export default async function DashboardPage() {
  const user = await currentUser()

  return (
    <div className="">
      <InitUser />

      <h1 className="text-3xl font-bold mb-6">Hola, {user?.firstName || 'usuario'} 👋</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/form">
          <div className="bg-white rounded-xl shadow p-6 hover:bg-gray-100 transition cursor-pointer">
            <h2 className="text-xl text-black font-semibold mb-2">Create Ia</h2>
            <p className="text-sm text-gray-600">Start filling in the information to create personalized responses.</p>
          </div>
        </Link>

        <Link href="/stats">
          <div className="bg-white rounded-xl shadow p-6 hover:bg-gray-100 transition cursor-pointer">
            <h2 className="text-xl text-black  font-semibold mb-2">Statistics</h2>
            <p className="text-sm text-gray-600">Look at the call results</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
