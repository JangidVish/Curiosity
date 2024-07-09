import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {IoMdDownload} from 'react-icons/io'




function AboutUs({description, url, btnTitle, btnUrl}:any) {
  return (
    <div className="h-[65rem] w-full dark:bg-black dark:bg-grid-white/[0.15] relative flex flex-col items-center justify-center sm:overflow-hidden bg-black border-b-4" id='aboutUs'>
       <h1 className='sm:text-4xl text-3xl font-bold'>About Us</h1>
    <div className='flex flex-col-reverse md:flex-row self-center justify-around align-middle mt-4 p-5'>
        <div className="md:w-1/3 p-8 text-justify flex flex-col">{description}
          {btnTitle &&(<div className="btn mt-4">
        <a href={"/pravi.pdf"} rel="noopener noreferrer" target="_blank" className="Btn flex flex-row gap-2">
      <IoMdDownload /> {btnTitle}
    </a>
        </div>
)}
        </div>
  
        <div className="flex flex-col justify-center items-center">
            <Image src={url} alt="" className='rounded-xl w-3/4' />
        </div>
    </div>
    </div>
  )
}

export default AboutUs