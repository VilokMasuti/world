"use client";

import Image from "next/image";
import Lottie from "react-lottie";
import MagicButton from "../components/ui/MagicButon";
import { IoCopyOutline } from "react-icons/io5";
import React, { useState } from "react";
import { WobbleCard } from "./ui/wobble-card";
import { gridItems } from "../Data/index";
import { Italiana } from "next/font/google";
import { Vortex } from "./ui/vortex";
import GridGlobe from "./ui/GridGlobe";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { people } from "../Data/index";
import animationData from '../Data/confetti.json';

const Grid = () => {
  const Lists = ["ReactJS", "Tailwind", "Typescript", "NodeJS", "NextJS", "Rest"];
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "vilokmasuti@outlook.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full min-h-[300px] lg:min-h-[300px]"
          className="bg-black"
        >
          {gridItems.map((item) => (
            <div className="max-w-xs max-sm:h-[10px]" key={item.id}>
              {item.id === 2 && (
                <>
                  <h2 className="text-center font-serif text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-left text-base/6 text-neutral-200">
                    {item.description}
                  </p>
                  <GridGlobe />
                </>
              )}
            </div>
          ))}
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-black" className="bg-black">
          <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={people} />
          </div>
        </WobbleCard>

        <WobbleCard
          containerClassName="col-span-1 lg:col-span-3 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
          className=""
        >
          <Vortex>
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 left-[550px] right-0${copied ? "block" : "hidden"}`}>
                <Lottie options={defaultOptions} height={200} width={400} />
              
              <MagicButton
                title={copied ? "Copied!" : " Email"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="border-none  mx-auto w-[100px]"
              />
              </div>
            </div>
          </Vortex>
        </WobbleCard>
      </div>
    </section>
  );
};

export default Grid;
