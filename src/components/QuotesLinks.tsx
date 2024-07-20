"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";
import { LinkPreview } from "@/components/ui/link-preview";


export function QuotesLinks() {
  return (
   <div className="flex md:flex-row flex-col  justify-center items-center ">
     <div className="h-[28rem] flex mr-20 items-center justify-center w-[50%]">
      <CardStack items={CARDS} />
      
    </div>

    <div className="flex justify-center items-center md:h-[28rem] h-[15rem] flex-col px-4 w-[70%] md:w-[50%]">
      <p className="text-neutral-600 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
      Discover my work on {" "}
        <LinkPreview url="https://github.com/YashGoyal9" className="font-bold">
         Github
        </LinkPreview>{" "}
        , follow my updates on {" "}
        <LinkPreview url="https://www.instagram.com/____yash_goyal?igsh=MTE4dzBsNmRlNTU4bw==" className="font-bold">
          Instagram
        </LinkPreview>{" "}
        , connect professionally on
        {" "}
        <LinkPreview url="https://www.linkedin.com/in/yashgoyal09" className="font-bold">
          Linkedin
        </LinkPreview>.
        {/* {" "} */}
        {/* , and check my competitive programming on
        {" "}
        <LinkPreview url="https://framer.com/motion" className="font-bold">
          Codeforces
        </LinkPreview> */}
      </p>
    </div>


   </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Lord Rama",
    designation: "The Ideal Man",
    content: (
      <Highlight>
      Don't Give up in any situation.
      </Highlight>
    ),
  },
  {
    id: 1,
    name: "Lord Krishna",
    designation: "Lord of the Universe",
    content: (
      <p>
      <Highlight>Everything Happened for Reasons. </Highlight> 
      </p>
    ),
  },
  {
    id: 2,
    name: "Lord Hanuman",
    designation: "Great Warrior",
    content: (
      <p>
       <Highlight>Be Humble when you achieve anything or everything. </Highlight> 
      </p>
    ),
  },
  {
    id: 3,
    name: "Lord Shiva",
    designation: "The Roarer",
    content: (
      <p>
       <Highlight>Self control is the key to live life to the fullest. </Highlight> 
      </p>
    ),
  },
  {
    id: 4,
    name: "Lord Vishnu",
    designation: "The Infinite",
    content: (
      <p>
       <Highlight>Never stop doing good things for others.</Highlight> 
      </p>
    ),
  },
];
