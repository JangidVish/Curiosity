import React from 'react'
import Cards from './Cards'
import Drone from "../images/AutonomusDrone.jpg"
import gps from "../images/gps.jpg"
import fire from "../images/fireFighter.jpg"
import autodrone from "../images/drone.jpg"
import line from "../images/line.jpg"
import lineRobo from "../images/lineRobo.jpg"


function Projects() {
  return (
    <div className="w-full dark:bg-black dark:bg-grid-white/[0.15] relative flex flex-col items-center justify-center sm:overflow-hidden bg-black border-b-4 mb-4 pt-10" id='Projects'>
        <h1 className='text-center text-3xl font-semibold'>Projects</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-3 relative top-3 mb-8'>
        <Cards imgUrl={autodrone.src} title="Autonomus Drone" desc="A cutting-edge drone capable of self-navigation and executing tasks autonomously, ideal for various applications from surveillance to delivery." />
        <Cards imgUrl={gps.src} title="Digital GPS Speedometer" desc="An advanced digital speedometer that uses GPS technology to provide real-time and accurate speed readings for vehicles." />
        <Cards imgUrl={fire.src} title="Firefighting and Maze Solving Robot" desc="A multifunctional robot designed to autonomously navigate mazes and effectively combat fires, demonstrating sophisticated problem-solving and emergency response capabilities." />
        <Cards imgUrl={line.src} title="Gesture Controll Robot" desc="An innovative robot that responds to intuitive hand gestures, controlled seamlessly through a mobile application, showcasing the integration of modern robotics and user-friendly technology." />
        <Cards imgUrl={lineRobo.src} title="Line Follower" desc="A smart robot engineered to follow a pre-defined path or line, demonstrating precise movement and autonomousnavigation" />
        <Cards imgUrl={Drone.src} title="Payload Drop Algorithm" desc="A specialized drone designed to accurately deliver and drop payloads, ideal for logistics, disaster relief, and supply chain operations using computer vision moduling in python. A specialized payload drop algorithm"/>

    </div>
    </div>
  )
}

export default Projects