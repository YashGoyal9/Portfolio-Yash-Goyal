"use client";
import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsTitle,
} from "./ui/glowing-stars";

import mateSC from "@/fonts/MateScFont";

export function Skills() {
  return (
    <div className="bg-black pb-20">
      <div className="pt-14 text-5xl md:text-6xl  bg-clip-text text-transparent bg-white 
        text-center  font-extrabold">
            <h1 className={mateSC.className}>
                Skills
          </h1>
        </div>
    <div className="flex   py-10  justify-center items-center antialiased">
      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle className="grid grid-cols-2 grid-rows-3 gap-3">
        {/* Data Structures Artificial Intelligence Web Development Software Engineering UI/UX Designing DB Management  */}
        {[" Data Structures", "Web Development", "Software Engineering", "UI/UX Designing", "DB Management", "Artificial Intelligence"].map((skill, index) => (
            <div key={index} className="flex items-center justify-center hover:scale-105 hover:bg-[#F0EB8D] hover:text-[#8F43EE] transition-transform duration-200 p-2 bg-[#8F43EE] rounded-lg">
              {skill}
            </div>
          ))}
        </GlowingStarsTitle>
        
      </GlowingStarsBackgroundCard>
    </div>
    </div>
  );
}


