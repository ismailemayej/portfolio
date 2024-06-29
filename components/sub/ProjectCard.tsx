"use client";
import Link from "next/link";
import ModalOn from "../Modal";
import { CardBody, CardContainer, CardItem } from "../ui/3dCard";
import { Image } from "@nextui-org/react";
import { Github, RadioTower, ReceiptText } from "lucide-react";
import { Tooltip, Button } from "@nextui-org/react";

interface Props {
  src: string;
  title: string;
  overview: string;
  livelink: string;
  githublink: string;
}

const ProjectCard = ({ src, title, livelink, githublink, overview }: Props) => {
  return (
    <CardContainer className="w-full">
      <CardItem translateZ={30}>
        <CardBody className=" bg-slate-900 h-96 max-w-fit p-2  dark:hover:shadow-2xl border-slate-700 rounded-xl">
          <Image alt={title} className=" rounded-xl w-96 h-80" src={src} />
          <div className="px-4 pt-2 rounded-xl absolute bottom-2 flex flex-row items-center gap-4 text-xs font-normal bg-slate-900 dark:text-white">
            <Link
              className="px-4 rounded-xl py-2 text-white bg-slate-600"
              href={livelink}
              passHref
            >
              <Tooltip content="Live">
                <RadioTower />
              </Tooltip>
            </Link>
            <Link
              className="px-4 rounded-xl py-2 text-white bg-amber-700"
              href={githublink}
              passHref
            >
              <Tooltip content="Github">
                <Github />
              </Tooltip>
            </Link>
            <Tooltip content="Overview">
              <ModalOn
                title={title}
                className="py-[-50px]"
                overview={overview}
                button="overview"
              />
            </Tooltip>
          </div>
        </CardBody>
      </CardItem>
    </CardContainer>
  );
};

export default ProjectCard;
