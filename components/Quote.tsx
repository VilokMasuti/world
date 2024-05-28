/* eslint-disable react/jsx-no-undef */
"use client";

import { Vortex } from "./ui/vortex";
import { motion } from "framer-motion";

const Quote = () => {
  return (
    <div className="relative w-full   max-md:mb[500px]   flex flex-col items-center justify-center">
     
     <Vortex className="w-full  mx-auto flex flex-col items-center justify-center h-full">
    
      <motion.h1
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 5, delay: 6}}
      
      className="max-md:text-6xl max-md:mt-[350px] text-3xl lg:text-9xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-900  text-center font-sans font-bold mt-24  relative z-20">
    MOST MEN WANT TO RULE OVER OTHERS BUT THE WISE MEN RULES OVER HIMSELF
      </motion.h1>

  
      </Vortex>
    </div>
   
  )
}

export default Quote