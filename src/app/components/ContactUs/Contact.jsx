'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { IoCall } from "react-icons/io5";

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2rgr74m', 'template_ty1cf9n', form.current, {
        publicKey: 'fpJMvF84PjWEw5tqj',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          //If this happeen then show thank You for contacting
          setFormSubmitted(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
          //Else show some error occured
        },
      );
  };

  return (
    <>
    {!formSubmitted?(    
      <div className="h-[45rem] w-full dark:bg-black dark:bg-grid-white/[0.15] relative flex flex-col items-center justify-center sm:overflow-hidden bg-black border-b-4"> 
            <h1 className='sm:text-4xl text-3xl font-bold'>Contact Us</h1>
            <div className="contact-form mt-4 p-8 flex flex-row justify-center w-full " id='Contact'>
              <form action="" ref={form} onSubmit={sendEmail} className='flex flex-col gap-3 boder-2 border-white mt-4 sm:w-1/2'>
                <label htmlFor="" className='sm:text-xl font-semibold'>Email</label>
                <input type="email" name="user_email" id="" className='p-4 focus:outline-none rounded-lg focus:outline-blue-400' placeholder='abc@gmail.com' />
                <label htmlFor="" className='sm:text-xl font-semibold'>Name</label>
                <input type="text" name="user_name" id="" className='p-4 focus:outline-none rounded-lg focus:outline-blue-400' placeholder='John'/>
                <label htmlFor="" className='sm:text-xl font-semibold'>Message</label>
                <textarea name="message" id="" rows={5} placeholder='Enter message' className='p-2 focus:outline-none rounded-lg focus:outline-blue-400'></textarea>
                <button type="submit" className='sm:text-xl p-4 border-1 rounded-xl mt-2 bg-blue-400 text-black font-bold'>Send</button>
              </form> 
            </div>
            <div className="phnNo flex flex-row gap-2 text-lg mb-4">
            <IoCall /> 9588654379 / 9359142631
            </div>
    </div>
    ):(
      <div className="thankContainer w-full bg-black text-white flex flex-col justify-center items-center h-[40rem]">
          <div className="Thankingtext w-1/2 text-3xl font-semibold text-center">Thanks! We will get back to you promptly.</div>
  
      </div>
    )}
    </>
  )
}

export default Contact