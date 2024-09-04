'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {

    const router=useRouter();
  return (
    <section className="bg-gray-50">
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
        AI Content Generator
          <strong className="font-extrabold text-red-700 sm:block"> Ai is future </strong>
        </h1>
  
        <p className="mt-4 sm:text-xl/relaxed">
        Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
           
            onClick={()=>router.push("/templates")}
          >
            Get Started
          </a>
  
        
        </div>
      </div>
    </div>
  </section>
  )
}

export default page
