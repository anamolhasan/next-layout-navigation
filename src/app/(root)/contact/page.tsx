import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata = {
  title:{
    absolute:'contact'
  }
}
const ContactPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
     <p className="text-5xl font-bold">Contact Page</p>
   </div>
  )
}

export default ContactPage