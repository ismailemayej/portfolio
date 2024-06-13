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
    <div className="mx-auto lg:pb-12 pb-6 w-1/2">
      <Heading text="Contact" />
      <div className="grid lg:grid-cols-6 grid-cols-3 gap-6 justify-center">
        <Tooltip content="Sent Email">
          <ModalOn
            title="Sent Email"
            overview={<Email />}
            button={<MailOpen />}
          />
        </Tooltip>

        <ModalOn
          title="Copy mobile number"
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
            title="Copy mobile number"
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
            title="Copy mobile number"
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
  );
};
export default Contact;
