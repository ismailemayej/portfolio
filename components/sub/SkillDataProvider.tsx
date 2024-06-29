"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { BackgroundGradient } from "../ui/BackgroundGradient";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  skill_name: string;
  skillpercentage: number;
}

const SkillDataProvider = ({
  src,
  width,
  height,
  skill_name,
  skillpercentage,
  index,
}: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.2;
  return (
    <motion.div
      className="w-full align-middle flex mx-auto shadow-xl transition-all delay-150 duration-300 ease-in-out h-48 justify-center p-4 bg-slate-800 border-2 border-teal-950 rounded-xl relative "
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <div
        className="radial-progress hover:transition-all hover:delay-150 text-primary my-2 hover:bg-slate-200"
        style={
          {
            "--value": skillpercentage,
            "--size": "6rem",
            "--thickness": "0.5rem",
          } as React.CSSProperties
        }
        role="progressbar"
      >
        <Image
          className="rounded-full"
          src={src}
          width={width}
          height={height}
          alt="skill image"
        />
      </div>
      <div className=" absolute bottom-0 mt-2 py-2 rounded-b-xl flex w-full items-center px-2 bg-slate-600">
        <span className="w-[65%] items-center text-white">{skill_name}</span>
        <div className="w-[25%] flex justify-center items-center border-1-white  bg-zinc-700 font-semibold text-white p-3 text-xs rounded-full">
          {skillpercentage}%
        </div>
      </div>
    </motion.div>
  );
};

export default SkillDataProvider;
