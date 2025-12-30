'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const LogOut = () => {
  const router = useRouter()

  const handleLogout = () => {
    // এখানে তুমি auth logic দিতে পারো পরে
    router.push('/')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50 px-4">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-6">Logout</h1>
        <p className="text-gray-600 mb-6">
          Are you sure you want to log out?
        </p>
        <button
          onClick={handleLogout}
          className="w-full bg-green-700 text-white py-2 rounded-lg font-semibold hover:bg-green-800 transition mb-4"
        >
          Log Out
        </button>
        <button
          onClick={() => router.back()}
          className="w-full border border-green-700 text-green-700 py-2 rounded-lg font-semibold hover:bg-green-100 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default LogOut
