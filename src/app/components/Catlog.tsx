import React from 'react'
import CatlogCard from './CatlogCard'




const sections= [
        {
            title: "Abhimanyu Trainer Kit",
            description: "Our takeaway Abhimanyu training kit is designed to educateyour champ with complete knowledge of technology. Not justto get into chakravyu of knowledge but also to come out of it victoriously with wisdom of Innovation",
            overview: "",
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
            title: "Eklavya workshop",
            description: "Our takeaway Eklavya Bot kit is designed to educate yourchamp with complete knowledge of technology. Not just to get into chakravyu of knowledge but also to come out of it victoriously with wisdom of Innovation",

            overview: "",
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
            title: "Vayuputra workshop & seminar",
            description: "Our takeaway Vayuputra training kit is designed to educate your champ with complete knowledge of technology. Not just to get into chakravyu of knowledge but also to come out of it victoriously with wisdom of Innovation.",
            overview: "",
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
            title: "Cyber Yodha",
            description: "Our takeaway Vayuputra training kit is designed to educate your champ with complete knowledge of technology. Not just to get into chakravyu of knowledge but also to come out of it victoriously with wisdom of Innovation.",
            overview: "",
            kitMaterials: [
                "1. Flight controller with enabled wifi chip",
                "2. Drone frame",
                "3. Motors & propellers",
                "4. Re-chargable battery",
                "5. Android/ iOS App to Fly Vayuputra drone"
            ],
            price: "Varies by project",
            url: "/CyberYoddha.pdf"
        }
    ]

function Catlog() {
  return (
    <div className='w-full dark:bg-black dark:bg-grid-white/[0.15] relative flex flex-col items-center justify-center sm:overflow-hidden bg-black border-b-4 p-4' id='catlog'>
        <h1 className='text-4xl text-center font-semibold'>Catalogues</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {sections.map(section=>(
                 <CatlogCard key ={section.price} title={section.title} desc={section.description} overview={section.overview} kit={section.kitMaterials} pdfLink={section.url} />
                )        )
               
        }
        </div>
    
    </div>
  )
}

export default Catlog