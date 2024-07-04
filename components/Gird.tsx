"use client";




import { WobbleCard } from "./ui/wobble-card";
import { gridItems } from "../Data/index";

import GridGlobe from "./ui/GridGlobe";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { people } from "../Data/index";

import { TextGenerateEffect } from "./ui/text-generate-effect";

import { Meteors } from "./ui/meteors";

import { BackgroundBeams } from "./ui/background-beams";
const Grid = () => {
  const Lists = ["ReactJS", "Tailwind", "Typescript", "NodeJS", "NextJS", "Rest"];

  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full min-h-[300px] lg:min-h-[300px]"
          className=" bg-zinc-950"
        >
          {gridItems.map((item) => (
            <div className="max-w-xs max-sm:h-[10px]" key={item.id}>
              {item.id === 2 && (
                <>
                  <h2 className="text-center  text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em]   bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-50">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-left text-base/6 text-neutral-200">
                    {item.description}
                  </p>
                  <GridGlobe  />
                </>
              )}
            </div>
          ))}
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-black"     className=" bg-zinc-950">
        <h1 className="  font-semibold  text-3xl ml-24 mb-2   bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-950">TechStack</h1>

          <div className="flex flex-row max-sm:tracking-widest     duration-1000 max-sm:text-4xl items-center justify-center mb-10 w-full   gap-2">
           
            <AnimatedTooltip items={people}  />
                   <Meteors number={30} /> 
          </div>
        </WobbleCard>

        <WobbleCard
          containerClassName="col-span-1 lg:col-span-3 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
          className= "  bg-zinc-950"
        >
  <div className=' max-w-[89vw] md:max-2xl: lg:max-w-[60vw] flex flex-col items-center justify-center'>
        
          <TextGenerateEffect words="Transforming Concepts Into Seamless User Experiences" className='  uppercase fon text-center  md:text-5xl  lg:text-[100px] max-sm:mt-24  max-sm:font-mono max-sm:font-bold  lg:ml-48'  />
          <BackgroundBeams />
   

        </div>

   
        
          
        </WobbleCard>
      </div>
    </section>
  );
};

export default Grid;
