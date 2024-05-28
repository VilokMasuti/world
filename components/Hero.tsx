import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { FlipWords } from './ui/flip-words';
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButon from './ui/MagicButon';
import { FaLocationArrow } from "react-icons/fa6";
const Hero = () => {
  const word = [ " Dynamic","Magic","Better", "Stylish", "Beautiful", "Modern",];
  return (
    <div className=' pb-20 pt-36'>
      <div>
      <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

      </div>
      <div     className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className=' flex justify-center relative my-20 z-10'>
        <div className=' max-w-[89vw] md:max-2xl: lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className=' uppercase text-xs text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-900 font-bold max-w-80 tracking-wider'> Collaborate For <FlipWords words={word} /> Webapp&apos;s</h2>
          <TextGenerateEffect words="Transforming Concepts Into Seamless User Experiences" className='  text-center text-[40px] md:text-5xl lg:text-6x  ' />
        <p className=' gap-3 text-center md:tracking-wider mb-4 md:text-lg lg:text-3xl bg-clip-text text-transparent bg-gradient-to-b font-semibold from-neutral-950 to-neutral-50'>
          Hey,I&apos;m VILOK,Frontend Developer Based In India
        </p>
        <a href="#about">
            <MagicButon
              title="Explore"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

        </div>

      </div>
    </div>
  )
}

export default Hero