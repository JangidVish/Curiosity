import React from 'react';
import Image from 'next/image';
import { IoMdDownload } from 'react-icons/io';
import Link from 'next/link';

interface CatlogCardProps {
  imageUrl: string;
  title: string;
  desc: string;
  pdfLink: string;
}

function CatlogCard({ imageUrl, title, desc, pdfLink }: CatlogCardProps) {
  return (
    <div className="container md:w-3/4 flex flex-col p-4 flex-wrap mt-4 rounded-2xl justify-around bg-gray-800 gap-3">
      <Image src={imageUrl} alt='cardCatlog' className='rounded-2xl' width={320} height={180} />
      <div className="title-des">
        <h1 className='text-xl font-semibold'>{title}</h1>
        <p className='text-gray-300 text-md'>{desc}</p>
      </div>
      {pdfLink && (
        <div className="btn mt-4">
          <Link href={pdfLink} rel="noopener noreferrer" target="_blank" className="Btn flex flex-row gap-2">
            <IoMdDownload /> Download Brochure
          </Link>
        </div>
      )}
      <button className='p-2 rounded-lg bg-gray-700'>
        <Link href="https://forms.gle/y7TXpJu5ZwnfJky7A" rel="noopener noreferrer" target="_blank">Get A Quote</Link>
      </button>
    </div>
  );
}

export default CatlogCard;
