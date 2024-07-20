"use client";

import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import mateSC from "@/fonts/MateScFont";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
    {
      id: 1,
      name: "Next Js",
      designation: "",
      image:
        "/assessts/next-js.png",
    },
    {
      id: 2,
      name: "Node Js",
      designation: "",
      image:
        "/assessts/node-js.png",
    },
    {
      id: 3,
      name: "React",
      designation: "",
      image:
        "/assessts/React.png",
    },
    {
      id: 4,
      name: "React-Redux",
      designation: "",
      image:
        "/assessts/react-redux.png",
    },
    {
      id: 5,
      name: "React-Routes",
      designation: "",
      image:
        "/assessts/react-routes.png",
    },
    {
      id: 6,
      name: "Toastify",
      designation: "",
      image:
        "/assessts/react-toastify.png",
    },
    {
        id: 7,
        name: "Tailwind Css",
        designation: "",
        image:
          "/assessts/tailwind-css.png",
      },
      {
        id: 8,
        name: "React-Context-API",
        designation: "",
        image:
          "/assessts/context-api.jpeg",
      },
      {
        id: 9,
        name: "Weather-API",
        designation: "",
        image:
          "/assessts/weather-api.png",
      },
      {
        id: 10,
        name: "JavaScript",
        designation: "",
        image:
          "/assessts/javascript.png",
      },

      {
        id: 11,
        name: "Html",
        designation: "",
        image:
          "/assessts/html..png",
      },
  ];
  


export function Projects() {
    
    const ID1=[1,2,3,4,5,6,7];
    const ID2=[2,3,5,7,8];
    const ID3=[2,3,4,6,7];
    const ID4=[9,10,7,11];



  return (

    <div>
        <div className="pt-24 text-5xl md:text-6xl  bg-clip-text text-transparent dark:bg-white bg-black  
    text-center  font-extrabold">
        <h1 className={mateSC.className}>
            Projects
      </h1>
    </div>

    <div className="grid xl:grid-cols-2  grid-cols-1 max-w-[80%] mx-auto">
    <CardContainer className="inter-var flex flex-col gap-4">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black w-auto sm:w-[30rem] h-auto rounded-xl p-6  border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-sans font-bold text-neutral-900 dark:text-white"
        >
          Shopping WebPage 🛍️
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-700 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
         A E-shopping website contains connected Product and cart
         Page for customers in which they can add or remove products for purchasing .
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-7">
          <Image
            src="/assessts/shopping-webpage.png"
            height="1000"
            width="1000"
            className="h-60 border border-black w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="flex justify-between  items-center mt-10">
         <Link href="https://github.com/YashGoyal9/Shopping-website" passHref>
         <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Github
            </CardItem>
         </Link>
          <Link href="https://shopping-website-self.vercel.app/" passHref>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Live
          </CardItem>
          </Link>
         </div>
      </CardBody>
      <div className="flex flex-row items-center absolute bottom-[2rem]  z-10 justify-center mb-10 w-full">
              <AnimatedTooltip items={people} displayIds={ID1} />
      </div>
    </CardContainer>

    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-sans  font-bold text-neutral-900 dark:text-white"
        >
          Blog Website 📰
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-700 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          A Blog website contains different pages for Blogs, categories and tags created by ContextAPI For state management.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-7">
          <Image
            src="/assessts/blog-website.png"
            height="1000"
            width="1000"
            className="h-60 border border-black w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="flex justify-between  items-center mt-10">
         <Link href="https://github.com/YashGoyal9/Blog-Website" passHref>
         <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Github
            </CardItem>
         </Link>
         <Link href="https://blog-website-xi-one.vercel.app/" passHref>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Live
          </CardItem>
          </Link>
         </div>
      </CardBody>
      <div className="flex flex-row items-center absolute bottom-[2rem]  z-10 justify-center mb-10 w-full">
              <AnimatedTooltip items={people} displayIds={ID2} />
      </div>
    </CardContainer>

    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-sans  font-bold text-neutral-900 dark:text-white"
        >
          E-learning Platform 🧑🏽‍💻
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-700 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          A online platform for learning through different Courses.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-7">
          <Image
            src="/assessts/e-learning-platform.png"
            height="1000"
            width="1000"
            className="h-60 border border-black w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="flex justify-between  items-center mt-10">
         <Link href="https://github.com/YashGoyal9/E-Learning-WebPage" passHref>
         <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Github
            </CardItem>
         </Link>
         <Link href="https://e-learning-web-page.vercel.app/" passHref>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Live
          </CardItem>
          </Link>
         </div>
      </CardBody>
      <div className="flex flex-row items-center absolute bottom-[2rem]  z-10 justify-center mb-10 w-full">
              <AnimatedTooltip items={people} displayIds={ID3} />
      </div>
    </CardContainer>

    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-sans  font-bold text-neutral-900 dark:text-white"
        >
          Weather Detector ☁️
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-700 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          It include Avg-time weather updates,with accurate forecasts, and a user-friendly interface.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-7">
          <Image
            src="/assessts/weather-webpage.png"
            height="1000"
            width="1000"
            className="h-60 border border-black w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="flex justify-between  items-center mt-10">
         <Link href="https://github.com/YashGoyal9/Weather-detector/tree/main" passHref>
         <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              
              Github
            </CardItem>
         </Link>
         <Link href="https://weather-detector-seven.vercel.app/" passHref>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Live
          </CardItem>
          </Link>
         </div>
      </CardBody>
      <div className="flex flex-row items-center absolute bottom-[2rem]  z-10 justify-center mb-10 w-full">
              <AnimatedTooltip items={people} displayIds={ID4} />
      </div>
    </CardContainer>


    </div>
    </div>
  );
}
