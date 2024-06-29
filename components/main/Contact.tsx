"use client";
import { GithubIcon, LinkedinIcon, MailOpen, PhoneMissed } from "lucide-react";
import Email from "../Email";
import ModalOn from "../Modal";
import Heading from "./Heading";
import { Snippet } from "@nextui-org/snippet";
import { LinkPreview } from "../ui/LinkPreview";
import { Tooltip } from "@nextui-org/react";
import whatsapp from "../../public/whatsapp.png";
import Image from "next/image";

const Contact = () => {
  return (
    <div id="contact" className=" bg-slate-900 rounded-lg py-6  px-4 lg:px-16">
      <Heading text="Get in Touch" />

      <div className="my-4">
        <Email />
        <div className="flex gap-2 w-full justify-center mt-8">
          <ModalOn
            title="Call me any time"
            overview={
              <Tooltip content="Call me">
                <Snippet className="bg-white text-black text-lg">
                  +8801858226967
                </Snippet>
              </Tooltip>
            }
            button={<PhoneMissed />}
          />
          <Tooltip content="My Linkedin Profile">
            <ModalOn
              title="My Linkedin Profile"
              className=""
              overview={
                <LinkPreview
                  url="https://www.linkedin.com/in/ismailemayej/"
                  className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                >
                  Linkedin
                </LinkPreview>
              }
              button={<LinkedinIcon />}
            />
          </Tooltip>
          <Tooltip content="My Github Profile">
            <ModalOn
              title="MY Github Profile"
              className=""
              overview={
                <LinkPreview
                  url="https://github.com/ismailemayej"
                  className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                >
                  Github
                </LinkPreview>
              }
              button={<GithubIcon />}
            />
          </Tooltip>
          <Tooltip content="My Github Profile">
            <ModalOn
              title="Name: Md Ismaile Hossain"
              className=""
              overview={
                <Snippet className="bg-white text-black text-lg">
                  +8801858226967
                </Snippet>
              }
              button={
                <Image
                  className="p-1"
                  src={whatsapp}
                  alt="whtasapp icon"
                  width={40}
                  height={40}
                />
              }
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
export default Contact;
