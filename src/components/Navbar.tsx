"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/moving-border";
import Link from "next/link";
import Image from "next/image";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-6 inset-x-0 mx-auto z-50 max-w-full md:max-w-2xl", className)}>
      <Menu setActive={setActive}>
        <div className="flex flex-col md:flex-row items-center md:gap-28 sm:gap-3 gap-2">
          <div className="flex items-start justify-start p-1">
            <Image
              src="/assessts/yashLogo.png"
              height={70}
              width={70}
              className="h-30 cursor-pointer"
              alt="Yash Logo"
            />
          </div>
          <div className="flex gap-7 text-lg z-[1] md:text-xl">
            <MenuItem setActive={setActive} active={active} item="About">
              <div className="flex flex-col space-y-4 md:p-0 pl-10 md:pl-28 pt-10 text-sm md:text-base">
                <HoveredLink href="/">Yash Goyal</HoveredLink>
                <HoveredLink href="/">IIIT KOTA 2K26</HoveredLink>
                <HoveredLink href="/">9 Feb(🎈)</HoveredLink>
                <HoveredLink href="/">Behror,Alwar,Rajasthan</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Projects">
              <div className="md:text-sm grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10 text-xs  p-4 pl-10  md:pl-28 pt-9 pb-2">
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
                <div className="text-lg md:text-xl mx-auto pt-1">
                  <HoveredLink href="https://github.com/YashGoyal9/More-Projects"> More Projects...</HoveredLink>
                </div>
              </div>
            </MenuItem>
          </div>
          <div className="mt-3 md:mt-0">
            <Link href="mailto:yashgoyal0905@gmail.com?subject=Hlo Yash&body=Wanna%20talk%20?%20Type%20Here.%20Thankyou." target="_blank" passHref>
              <Button
                borderRadius="1.75rem"
                className="bg-white z-[0] font-bold text-black border-neutral-200 dark:border-slate-800 text-sm md:text-lg"
              >
                Say, Hello 👋🏽!
              </Button>
            </Link>
          </div>      
        </div>  
      </Menu>
    </div>
  );
}

export default Navbar;
