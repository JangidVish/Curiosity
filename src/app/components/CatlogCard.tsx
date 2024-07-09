import React from 'react'
import Image from 'next/image'
import {IoMdDownload} from 'react-icons/io'
import Link from 'next/link'

function CatlogCard({imageUrl, title, desc, contentName, kit, price , pdfLink}:any) {
  return (
    <>
   
    <div className="container md:w-3/4 flex flex-col p-4 flex-wrap mt-4 rounded-2xl justify-around bg-gray-800 gap-3 w-3/4">
         <Image src={imageUrl} alt='cardCatlog' className='rounded-2xl' width={320} height={180} />
        <div className="title-des">
            <h1 className='text-xl font-semibold'>{title}</h1>
            <p className='text-gray-300 text-md'>{desc}</p>
        </div>
        <div className="overview-kit">
            <div className="kit">
                <h3 className='text-lg'>{contentName}</h3>
                       <ul>
                       {kit.map((item:any, index:any) => (
                        <li key={index} className='text-gray-300 text-md'>{item}</li>
                    ))}
                    </ul>
            </div>
            <div className="price-pdf">
                <h1>{price}</h1>
            </div>
        </div>
        <div className="btn mt-4">
        <Link href={pdfLink} rel="noopener noreferrer" target="_blank" className="Btn flex flex-row gap-2">
      <IoMdDownload /> Download Brochure
    </Link>
        </div>
    </div>
    </>
  )
}

export default CatlogCard