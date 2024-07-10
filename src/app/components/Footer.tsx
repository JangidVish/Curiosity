import React from 'react'
import Image from 'next/image'
import Logo from '../images/Curiosity logo 2.png'
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer footer-center bg-primary text-primary-content p-10">
  <aside>
    <Image src={Logo} alt="" width={220} />
    <p className="font-bold -mt-8">
      Curosity
      <br />
      Providing reliable tech since 2024
    </p>
    <p>Copyright © ${new Date().getFullYear()} - All right reserved</p>

    <div className="info"><p className='mt-4  text-sm text-left'>*Some images are for representation purpose, actual product may vary</p></div>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4 text-3xl">
      <a href="https://www.linkedin.com/company/103952718" rel="noopener noreferrer" target="_blank">
    <FaLinkedin className='cursor-pointer'/>
    </a>
    <a href="https://www.youtube.com/@curious-us" rel="noopener noreferrer" target="_blank">
    <FaYoutube className='cursor-pointer'/>
    </a>
    </div>
  </nav>
</footer>
  )
}

export default Footer