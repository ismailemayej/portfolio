"use client";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideIn } from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";
import TypingHeadings from "../TypingHeadings";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { ArrowBigDownDash, GraduationCap } from "lucide-react";
import { Tooltip, Button } from "@nextui-org/react";
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
      className="grid lg:grid-cols-2 grid-cols-1 lg:pt-0 pt-28 items-center justify-center w-full z-[20]"
    >
      <div className="h-full mt-[-70px] w-full flex flex-col gap-5 justify-center m-auto text-start">
        <div className="flex flex-col gap-6 mt-6 text-2xl font-bold text-white max-w-[600px] w-auto h-auto">
          <span className="pb-[-10] text-xl font-semibold">
            I&apos; m Md Ismaile Hossain, {"   "}As a
          </span>
          <motion.div className="" variants={slideIn("", "tween", 0.2, 1)}>
            <TypingHeadings headings={headings} />
          </motion.div>
        </div>
        <TextGenerateEffect
          className="text-white z-10 "
          words="I am a dedicated technology enthusiast with three years of coding
          experience, deeply passionate about exploring and working with the
          latest technological advancements. My career vision is to innovate and
          excel in the tech industry. This is my Resume."
        />

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center z-10 text-white cursor-pointer rounded-lg max-w-[185px]"
        >
          {" "}
          <span className="flex justify-between items-center px-2 gap-1">
            <ArrowBigDownDash />
            <Link href={resumelink}>Download Resume</Link>
          </span>
        </motion.a>
        <div
          id="education"
          className="border hover:bg-white bg-slate-900 w-full rounded-xl border-slate-700 p-3"
        >
          <span className="font-semibold text-green-500 text-xl">
            Education:
          </span>
          <div>
            <p className=" text-neutral-300 flex gap-2">
              <GraduationCap />
              Achieved expertise in Al-Hadith at Islamic Arabic University,
              Dhaka.
            </p>
            <p className=" text-neutral-300 flex gap-2">
              <GraduationCap />
              Specialized in Information and Communication Technology from the
              Bangladesh polytechnic institute.
            </p>
          </div>
        </div>
      </div>
      <Tooltip content="hi, I am a Md Ismaile Hossain">
        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full flex justify-center items-center"
        >
          <Image src="/main.svg" alt="work icons" height={650} width={650} />
        </motion.div>
      </Tooltip>
    </motion.div>
  );
};

export default Hero;
