"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import mateSC from "@/fonts/MateScFont";
import { FlipWords } from "./ui/flip-words"; 
import { Button } from "./ui/moving-border";
import Link from "next/link";

import { BackgroundGradient } from "./ui/background-gradient";


  const words = ["Web-Developer ", "Frontend-Developer", "UI-UX-Designer", "Coder","Competetive-Programmer"];

export function Background() {
  
  return (
    <div className="lg:h-[60rem] h-[80rem]  lg:pt-[5rem] w-full rounded-md bg-neutral-950   relative flex flex-col lg:flex-row items-center justify-around antialiased">
      <div className="max-w-2xl   lg:pt-[295px] pt-[270px] pb-[100px] ">
        <p className="relative z-10  text-2xl md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  
        text-center font-sans font-bold">
          Hi! I'am
        </p>
        <h1 className="relative z-10 text-5xl md:text-7xl  bg-clip-text text-transparent bg-[#e6dbc9] 
        text-center font-sans font-bold">
          Yash Goyal
        </h1>
        <br/>
        <br/>
        <p className="relative z-10 text-3xl md:text-4xl  bg-clip-text text-transparent bg-white  
        text-center font-sans font-bold">
          I am a 
          <span className={mateSC.className}>
            <FlipWords words={words} />
          </span>
        </p>
       
        <br />
        
        <p className="text-[#DFDCE3] max-w-lg mx-auto my-2 md:text-[16px] text-[13px] text-center relative z-10">
        I am  a passionate Software Developer. I specialize in web development and enjoy building responsive,
         user-friendly websites and applications. My journey in software development is driven by a love for problem-solving
          and continuous learning. When I'm not coding, I enjoy exploring new technologies and improving my skills. Have a look on my
           portfolio website.
        </p>
        <br />
        <br />
        <div>
       <Link href="https://drive.google.com/file/d/16xC2-JxeNEAEPse4gV8Cn2eMTQEYRjom/view?usp=drivesdk" passHref>
       <Button
            borderRadius="1.75rem"
            className="bg-black z-[1] cursor-pointer font-bold text-white dark:border-neutral-200 border-slate-800 text-[16px]">
            Resume 📜
          </Button>
       </Link>
        </div> 
      </div>
      <div className="pb-[70px]">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-3  bg-zinc-900">
        <img
            src="/assessts/me1.jpeg"
            alt="Mr.Goyal"
            height="900"
            width="500"
            className="object-contain rounded-[22px]"
          />
      </BackgroundGradient>
      </div>
      <BackgroundBeams />
    </div>
  );
}


