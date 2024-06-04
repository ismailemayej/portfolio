"use client";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideIn } from "@/utils/motion";

import Image from "next/image";
import Link from "next/link";
import TypingHeadings from "../TypingHeadings";

const Hero = ({ resumelink }: any) => {
  const headings = [
    "Web Developer",
    "Programmer",
    "MERN Stack Developer",
    "Problem solver",
    "JavaScript Developer",
    "Passionate Learner",
  ];
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center px-20 lg:mt-10 mt-40 w-full z-[20]"
    >
      <div className="h-full mt-[-70px] w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-2xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          {" "}
          <span className="pb-[-10] text-xl font-semibold">
            {" "}
            I&apos; m Md Ismaile Hossain, {"   "}As a
          </span>
          <motion.div
            className=" text-slate-200"
            variants={slideIn("", "tween", 0.2, 1)}
          >
            <TypingHeadings headings={headings} />
          </motion.div>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400  max-w-[600px]"
        >
          I am a dedicated technology enthusiast with three years of coding
          experience, deeply passionate about exploring and working with the
          latest technological advancements. My career vision is to innovate and
          excel in the tech industry. This is my Resume.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          <Link href={resumelink}>Download Resume</Link>
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
