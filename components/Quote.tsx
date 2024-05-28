/* eslint-disable react/jsx-no-undef */
"use client";

import { Vortex } from "./ui/vortex";


const Quote = () => {
  return (
    <div className="relative w-full   max-md:mb[500px]   flex flex-col items-center justify-center">
     
     <Vortex className="w-full  mx-auto flex flex-col items-center justify-center h-full">
    
      <h1 className="max-md:text-6xl max-md:mt-[350px] text-3xl lg:text-9xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-900  text-center font-sans font-bold mt-24  relative z-20">
    MOST MEN WANT TO RULE OVER OTHERS BUT THE WISE MEN RULES OVER HIMSELF
      </h1>
    <p className="max:md:text-2xl  tracking-wider  max-md-pt:4 lg:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-800   font-sans font-bold  relative z-20">  </p>
  
      </Vortex>
    </div>
   
  )
}

export default Quote