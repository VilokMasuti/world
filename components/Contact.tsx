/* eslint-disable @next/next/no-img-element */
"use client";

import { socialMedia } from '@/Data';
import React, { useState } from 'react';
import { FaLocationArrow, FaWhatsapp } from 'react-icons/fa6';
import { IoCopyOutline } from 'react-icons/io5';
import Lottie from 'react-lottie';
import animationData from '../Data/confetti.json';
import Link from 'next/link';
import MagicButon from './ui/MagicButon';

const Contact = () => {
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
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center ">
        <h1 className="heading lg:max-w-[45vw] text-center font-semibold">
          Ready to take <span className=" text-blue-500 font-bold">Your</span> digital presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButon
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        <div>
          <Link href="https://minimal-portfolio-swart.vercel.app/">
          <FaWhatsapp/>
          </Link>


        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 VILOK MASUTI
        </p>

        <div className="flex items-center md:gap-3 gap-6">
  {socialMedia.map((info) => (
    <Link  href={info.link} key={info.id}>
      <div
        className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
      >
        <img src={info.img} alt="dd" width={20} height={20} />
      </div>
    </Link>
  ))}
</div>

           
           
      </div>
    </footer>
  );
};

export default Contact;
