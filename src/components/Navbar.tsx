"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/moving-border";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className= {cn("fixed top-6 md:inset-x-0  md:max-w-2xl mx-auto z-50  ",className)}>
      <Menu setActive={setActive}>

      <div className="flex flex-col md:flex-row items-center md:gap-28 gap-3  ">
      <div className="flex items-start justify-start p-1">
          <img src="/assessts/yashLogo.png" alt="Yash Logo" 
           height="70"
            width="70"
          className="h-30 cursor-pointer" /> 
        </div>
    <div className="flex gap-7 text-xl ">
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 md:p-0 pl-28 pt-10 text-[16px]">
            <HoveredLink href="/">Yash Goyal</HoveredLink>
            <HoveredLink href="/">IIIT KOTA 2K26</HoveredLink>
            <HoveredLink href="/">9 Feb(🎈)</HoveredLink>
            <HoveredLink href="/">Behror,Alwar,Rajasthan</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="md:text-sm grid grid-row-4 md:grid-cols-2  md:gap-10 gap-3 text-[10px] md:p-4 pl-28 pt-6 pb-2">
            <ProductItem 
              title="Github Detector"
              href="https://github-detector-gold.vercel.app/"
              src="/assessts/github-detector.png"
              description="Search any Github Account including repos and contributions."
            />
            <ProductItem
              title="Razorpay Clone"
              href="https://razor-pay-clone-olive.vercel.app/"
              src="/assessts/razorpay-clone.png"
              description="Razorpay clone created by Html,Css."
            />
            <ProductItem
              title="Password Generator"
              href="https://password-generator-inky-two.vercel.app/"
              src="/assessts/pass-generator.png"
              description="Create a strong password for your data."
            />
            <ProductItem
              title="Modern Chair Webpage"
              href="https://modern-chair-website-nine.vercel.app/"
              src="/assessts/modern-chair.png"
              description="Explore the page of Modern Chairs with different shades."
            />
            <div className="text-xl mx-auto pt-1">
            <HoveredLink href="https://github.com/YashGoyal9/More-Projects"> More Projects...</HoveredLink>
            </div>

          </div>
        </MenuItem>
       </div>
        <div>
       <Link href="mailto:[yashgoyal0905@gmail.com]?subject=Hlo Yash&body=Wanna%20talk%20?%20Type%20Here.%20Thankyou." target="_blank" passHref>
       <Button
            borderRadius="1.75rem"
            className="bg-white font-bold  text-black border-neutral-200 dark:border-slate-800 text-[16px] ">
            Say,Hello👋🏽 !
          </Button>
       </Link>
        </div>      
        </div>  
      </Menu>
    </div>
  );
}

export default Navbar;
