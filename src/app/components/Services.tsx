'use client'
import { HoverEffect } from "./ui/card-hover-effect";

function CardHoverEffectDemo({array, Heading}:any) {
  return (
    <div className=" w-full dark:bg-black dark:bg-grid-white/[0.15] relative flex flex-col items-center justify-center sm:overflow-hidden bg-black border-b-4 min-h-screen pb-6 " id="Services">
      <h1 className="text-center text-4xl mt-4 font-bold">{Heading}</h1>
      <div className="relative sm:top-16 ">
      <HoverEffect items={array}/>
      </div>
      </div>

  );
}


export default CardHoverEffectDemo