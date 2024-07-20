
import { HoverEffect } from "./ui/card-hover-effect";
import mateSC from "@/fonts/MateScFont";
import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";





export function TechStack() {
  return (
    <div className="max-w-5xl mx-auto lg:px-8 pt-32 pb-8">
        <div className="pt-10 text-5xl md:text-6xl  bg-clip-text text-transparent dark:bg-white bg-black  
        text-center  font-extrabold">
            <h1 className={mateSC.className}>
                TechStack
          </h1>
        </div>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "NextJs",
    // yha bhi daalna baaki  h 
    link: "https://github.com/YashGoyal9/React-Projects",
    icon:<RiNextjsLine className="h-20 w-20 dark:text-white text-black"/>,
  },
  {
    title: "React",
    link: "https://github.com/YashGoyal9/React-Projects",
    icon:<FaReact className="h-20 w-20 dark:text-white text-black"/>,
  },
  {
    title: "Nodejs",
    link: "https://github.com/YashGoyal9/React-Projects",
    icon:<FaNodeJs className="h-20 w-20 dark:text-white text-black"/>
  },
  {
    title: "MongoDb",
    // yha bhi daalna baaki  h 
   link: "https://github.com/YashGoyal9",
   icon: <DiMongodb className="h-20 w-20 dark:text-white text-black"/>,
  },
  {
    title: "JavaScript",
    link: "https://github.com/YashGoyal9/JavaScript-Projects",
    icon:<IoLogoJavascript className="h-20 w-20 dark:text-white text-black"/>,
  },
  {
    title: "Tailwind Css",
    link: "https://github.com/YashGoyal9/Css-Projects",
    icon:<RiTailwindCssFill className="h-20 w-20 dark:text-white text-black"/>,
  },
  {
    title: "TypeScript", 
    // daalna baaki h link yha 
    link: "https://github.com/YashGoyal9/Portfolio-Yash-Goyal",
    icon:<SiTypescript className="h-20 w-20 dark:text-white text-black"/>,
  },
  {
    title: "Git",
     link: "https://github.com/YashGoyal9",
     icon:<FaGitAlt className="h-20 w-20 dark:text-white text-black"/>,
  },
  {
    title: "Html",
    link: "https://github.com/YashGoyal9/Html-Projects",
    icon:<FaHtml5 className="h-20 w-20 dark:text-white text-black"/>,
  },
];
