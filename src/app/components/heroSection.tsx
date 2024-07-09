'use client'
import React from 'react'
import { BackgroundBeams } from "./ui/background-beams";
import { IoArrowDownCircleOutline } from "react-icons/io5";


function heroSection({title, content}:any) {
  return (
    <div className="hero min-h-screen border-b-4 sm:top-0 -z-30 bg-slate-700">
  <div className="hero-content text-center">
    <div className="max-w-md relative ">
      <h1 className=" md:mt-0 text-5xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300 font-Bask">{title}</h1>
      <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
        {content}

       
      </p>
    </div>    
  </div>
  <IoArrowDownCircleOutline className='text-4xl relative top-72 animate-bounce'/>
  <BackgroundBeams />
</div>
  )
}

export default heroSection