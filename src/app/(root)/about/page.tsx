import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
  title: 'About',
  description: 'This is a about Page',
}

const AboutPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
     <p className="text-5xl font-bold">About Page</p>
   </div>
  )
}

export default AboutPage