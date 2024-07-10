"use client";
import React, { useState } from 'react';
import CatlogCard from './CatlogCard';
import Link from 'next/link';

const sections = [
  {
    id: "1",
    imageUrl: '/Abhimanyu kit.png',
    title: "Abhimanyu Trainer Kit",
    description: "Our takeaway Abhimanyu training kit is designed to educate your champ with complete knowledge of technology. Not just to get into chakravyu of knowledge but also to come out of it victoriously with wisdom of Innovation",
    url: "/Abhimanyu.pdf"
  },
  {
    id: "2",
    imageUrl: '/Eklavya Bot.png',
    title: "Eklavya Bot Training Kit",
    description: "Our takeaway Eklavya Bot training kit is designed to empower your champ with the skills to control technology through gestures. Just as Eklavya mastered archery with unwavering dedication and ingenuity, your champ will learn to command the Eklavya Bot using a mobile app, transforming their innovative ideas into reality with precision and confidence. This kit instills not only technical prowess but also the spirit of determination and creativity, enabling them to achieve mastery in the realm of robotics.",
    url: "/Eklavya.pdf"
  },
  {
    id: "3",
    imageUrl: '/Vayuputra.png',
    title: "Vayuputra workshop",
    description: "Inspired by the legendary Hanuman, the Vayu Putra Drone Workshop teaches your champ to build and fly drones with agility and precision. Just as Hanuman mastered the skies, your champ will learn drone technology and navigation, combining innovation with hands-on experience. The workshop includes a comprehensive kit to enhance their learning journey.",
    url: "/Vayuputra.pdf"
  },
  {
    id: "4",
    imageUrl: '/vayuputraSeminar.jpg',
    title: "Vayuputra Seminar",
    description: "Inspired by the legendary Hanuman, the Vayu Putra Seminar introduces your champ to the world of drones. In this seminar, they will learn about the science of drones, their parts, how they fly, and important safety regulations. Like Hanuman mastering the skies, your champ will gain foundational knowledge and skills to navigate and control drones confidently.",
    url: "/Vayuputra.pdf"
  },
  {
    id: "5",
    imageUrl: '/Cyberyodha.png',
    title: "Cyber Yodha Seminar",
    description: "Our Cyber Yodha Seminar is designed to transform your champ into a vigilant guardian of the digital world. Inspired by the legendary warriors of ancient times, this seminar equips them with the knowledge and skills to navigate cyberspace safely and smartly. Your champ will learn to protect themselves from digital threats, manage their online presence, and emerge as a confident and responsible digital citizen.",
    url: "/CyberYoddha.pdf"
  },
  {
    id: "6",
    imageUrl: '/Teachers.png',
    title: "Teachers Training Program",
    description: "Our Teachers Training Program empowers educators to inspire the next generation of innovators. Through comprehensive training in robotics, drones, and cybersecurity, we equip teachers with the latest knowledge and skills. This program ensures educators can confidently deliver cutting-edge education, fostering curiosity and technological proficiency in their classrooms.",
    url: ""
  }
];

function Catlog() {
  const [clickedButton, setClickedButton] = useState<string | null>(null);

  return (
    <div className='w-full dark:bg-black dark:bg-grid-white/[0.15] relative flex flex-col items-center justify-center sm:overflow-hidden bg-black border-b-4 p-4 overflow-x-hidden' id='catlog'>
      <h1 className='text-4xl text-center font-semibold'>Catalogues</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-around align-middle md:ml-10">
        {sections.map(section => (
          <CatlogCard
            key={section.id}
            imageUrl={section.imageUrl}
            title={section.title}
            desc={section.description}
            pdfLink={section.url}
          />
        ))}
      </div>
      <button className='p-2 pr-4 pl-4 rounded-lg bg-gray-700 mt-4'>
        <Link href="https://forms.gle/zWu4Mtf6YWDma2No6" rel="noopener noreferrer" target="_blank">Leave a Comment</Link>
      </button>
    </div>
  );
}

export default Catlog;
