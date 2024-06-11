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
}

const SkillDataProvider = ({
  src,
  width,
  height,
  skill_name,
  index,
}: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;
  return (
    <BackgroundGradient>
      <motion.div
        className="mx-auto shadow-xl hover:scale- hover:bg-neutral-600 items-center transition delay-150 duration-300 ease-in-out h-36 relative grid-cols-2 border border-gray-600 rounded-xl justify-center p-4 bg-neutral-800"
        ref={ref}
        initial="hidden"
        variants={imageVariants}
        animate={inView ? "visible" : "hidden"}
        custom={index}
        transition={{ delay: index * animationDelay }}
      >
        <Image src={src} width={width} height={height} alt="skill image" />
        <span className=" absolute bottom-0 pb-2 text-white">{skill_name}</span>
      </motion.div>
    </BackgroundGradient>
  );
};

export default SkillDataProvider;
