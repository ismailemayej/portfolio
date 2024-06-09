"use client";
import Link from "next/link";
import ModalOn from "../Modal";
import { CardBody, CardContainer, CardItem } from "../ui/3dCard";
import { Card, Image } from "@nextui-org/react";
import { BackgroundGradient } from "../ui/BackgroundGradient";
import { Github, RadioTower, Target } from "lucide-react";

interface Props {
  src: string;
  title: string;
  overview: string;
  livelink: string;
  githublink: string;
}

const ProjectCard = ({ src, title, livelink, githublink, overview }: Props) => {
  return (
    <BackgroundGradient>
      <CardContainer className="inter-var relative w-full">
        <CardBody className=" bg-slate-900 h-80  dark:hover:shadow-2xl border-slate-700 rounded-xl p-3 ">
          <CardItem translateZ="100" className="">
            <Image alt={title} className=" rounded-xl w-96 h-60" src={src} />
          </CardItem>

          <CardItem
            translateZ={20}
            className="px-4 pt-2 rounded-xl absolute bottom-2 flex flex-row items-center gap-4 text-xs font-normal dark:text-white"
          >
            <Link
              className="px-4 rounded-xl py-3 text-white bg-slate-600"
              href={livelink}
              passHref
            >
              <RadioTower />
            </Link>
            <Link
              className="px-4 rounded-xl py-3 text-white bg-amber-700"
              href={githublink}
              passHref
            >
              <Github />
            </Link>
            <ModalOn title={title} overview={overview} button={<Target />} />
          </CardItem>
        </CardBody>
      </CardContainer>
    </BackgroundGradient>
  );
};

export default ProjectCard;
