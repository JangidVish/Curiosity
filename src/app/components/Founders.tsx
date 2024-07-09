import React from 'react'
import Image from 'next/image'
import Khushi from '../images/Khushi.jpg'
import Chandrant from '../images/Chandrakant.png'
import Om from '../images/Om.png'

function Founders() {
  return (
    <div className=" w-full dark:bg-black dark:bg-grid-white/[0.15] relative flex flex-col items-center justify-center sm:overflow-hidden bg-black border-b-4" id="testimonals">
    <h1 className="text-4xl font-bold text-center mb-8 z-10">Our Founders</h1>
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Meet Our Founders</h2>
      <div className="flex justify-center w-full flex-row flex-wrap gap-4 text-center">
        <div className="imageName mb-4 pb-6">
                <Image src={Om} alt="" width={220} height={10} className='rounded-2xl'/>
                <h2 className='mt-2 text-xl'>Kumar Om Suchita Khare</h2>
        </div>
        <div className="imageName">
                <Image src={Chandrant} alt="" width={220} className='rounded-2xl'/>
                <h2 className='mt-2 text-xl'>Kumar Chandrakant N. Raut</h2>
        </div>
        <div className="imageName">
                <Image src={Khushi} alt="" width={220} className='rounded-2xl'/>
                <h2 className='mt-2 text-xl'>Kumari Khushi S. Rohra</h2>
        </div>
    </div>
    <div className="desc w-3/4 mb-4 list-disc border-t-2 pt-4 ">
      <ul className='list-disc gap-2 pb-8'>
        <li>Ex- Interns from the Defence Institute of Advanced Technology(DU), DRDO.</li>
        <li>Certified Professional Ethical Hacker</li>
        <li>Led a National Level Robotics Event “RoboRashtra 2k24”, Pune</li>
        <li>Conducted Workshops & Seminars on “ Advancements in Robotics and Drones” in
        multiple schools and colleges from across Pune</li>
        <li>AIR-13 in Aerothon-2k23(Drone making competition), Banglore.</li>
        <li>Holder of Google Cybersecurity Professional Certificate.</li>
        <li>Elite Badge holder in Ethical Hacking Course from IIT, Kharagpur(NPTEL).</li>
        <li>Trained more than 100+ Students with hands-on experience in field of
        “Robotics and Drones”.</li>
        <li>Proficient in IoT and Drone build-up.</li>
        <li>Projects: Autonomous drone, Gesture controlled robot, Android app
controlled robot, Digital GPS Speedometer for cars/bike/bicycle,
Fire control robot, Line follower Robot, Biometric attendance
system</li>
      </ul>
    </div>
    </div>
  )
}

export default Founders