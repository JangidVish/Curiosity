"use client"
import React from 'react'
import CatlogCard from './CatlogCard'
import { useState } from 'react';




const sections= [
        {
            title: "Abhimanyu Trainer Kit",
            description: "Our takeaway Abhimanyu training kit is designed to educate your champ with complete knowledge of technology. Not just to get into chakravyu of knowledge but also to come out of it victoriously with wisdom of Innovation",
            contentName: "Kit",
            kitMaterials: [
                "1.LCD Screens to display outcomes of multiple projects",
                "2.Radio Frequency Identification tool (RFID)Microcontrollers",
                "3.Soil moisture sensor",
                "4. Infrared Sensor",
                "And Much More...."
            ],
            price: "$299",
            url: "/Abhimanyu.pdf"
        },
        {
            title: "Eklavya Bot Training Kit",
            description: "Our takeaway Eklavya Bot training kit is designed to empower your champ with the skills to control technology through gestures. Just as Eklavya mastered archery with unwavering dedication and ingenuity, your champ will learn to command the Eklavya Bot using a mobile app, transforming their innovative ideas into reality with precision and confidence. This kit instills not only technical prowess but also the spirit of determination and creativity, enabling them to achieve mastery in the realm of robotics.",

            contentName: "Kit",
            kitMaterials: [
                "1.Robot Chasis.",
                "2.Node MCU.",
                "3.Motor Driver",
                "4.Re-chargable battries",
                "5.Buzzer."
            ],
            price: "$199",
            url: "/Eklavya.pdf"
        },
        {
            title: "Vayuputra workshop",
            description: "Inspired by the legendary Hanuman, the Vayu Putra Drone Workshop teaches your champ to build and fly drones with agility and precision. Just as Hanuman mastered the skies, your champ will learn drone technology and navigation, combining innovation with hands-on experience. The workshop includes a comprehensive kit to enhance their learning journey.",
            contentName: "Kit",
            kitMaterials: [
                "1. Flight controller with enabled wifi chip",
                "2. Drone frame",
                "3. Motors & propellers",
                "4. Re-chargable battery",
                "5. Android/ iOS App to Fly Vayuputra drone"
            ],
            price: "Varies by project",
            url: "/Vayuputra.pdf"
        },
        {
            title: "Vayuputra Seminar",
            description: "Inspired by the legendary Hanuman, the Vayu Putra Seminar introduces your champ to the world of drones. In this seminar, they will learn about the science of drones, their parts, how they fly, and important safety regulations. Like Hanuman mastering the skies, your champ will gain foundational knowledge and skills to navigate and control drones confidently.",
            contentName: "Contents Of Workshop",
            kitMaterials: [
                "1. Introduction of Drones",
                "2. Science of Drones",
                "3. Parts of Drone",
                "4. How Drones fly",
                "5. Safety & Regulations",
                "6. Drone Flight"
            ],
            price: "Varies by project",
            url: "/Vayuputra.pdf"
        },
        {
            title: "Cyber Yodha Seminar",
            description: "Our Cyber Yodha Seminar is designed to transform your champ into a vigilant guardian of the digital world. Inspired by the legendary warriors of ancient times, this seminar equips them with the knowledge and skills to navigate cyberspace safely and smartly. Your champ will learn to protect themselves from digital threats, manage their online presence, and emerge as a confident and responsible digital citizen.",
            contentName: "Contents Of Workshop",
            kitMaterials: [
                "1. Introduction to Cybersecurity",
                "2. Digital Footprints",
                "3. Social Media Smarts",
                "4. Common attacks and threats",
                "5. Cyber Bullying",
                "6. Interactive QnA Session"
            ],
            price: "Varies by project",
            url: "/CyberYoddha.pdf"
        }
    ]

function Catlog() {
    const [clickedButton, setClickedButton] = useState<string | null>(null);


  return (
    <div className='w-full dark:bg-black dark:bg-grid-white/[0.15] relative flex flex-col items-center justify-center sm:overflow-hidden bg-black border-b-4 p-4' id='catlog'>
        <h1 className='text-4xl text-center font-semibold'>Catalogues</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-around align-middle lg:ml-10">
        {sections.map(section=>(
                 <CatlogCard key ={section.price} title={section.title} desc={section.description} contentName={section.contentName} kit={section.kitMaterials} pdfLink={section.url}

      />))}
        </div>
    
    </div>
  )
}

export default Catlog