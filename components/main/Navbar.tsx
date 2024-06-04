import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  const menu = [
    { name: "Education", link: "#education" },
    { name: "Skills", link: "#skills" },
    { name: "Project", link: "#projects" },
    { name: "Blogs", link: "#blogs" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#36268d38] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <div className="lg:block hidden">
          <a href="/" className="h-auto w-auto flex flex-row items-center">
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={60}
              height={60}
              className="cursor-pointer hover:animate-slowspin"
            />
            <span className="font-bold ml-[10px] hidden md:block text-gray-300">
              Md Ismaile Hossain
            </span>
          </a>
        </div>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] lg:bg-[#0300145e] bg-[#24103dfb]  mr-[15px] px-[20px] py-[10px] lg:rounded-full rounded-md text-gray-200">
            {menu.map((item) => (
              <a
                href={item.link}
                className="cursor-pointer hover:transition-all hover:scale-105 hover:border-b hover:rounded-xl hover:px-3 hover:bg-[#2d2961f3]"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="lg:block hidden">
          <div className="flex flex-row gap-5">
            {Socials.map((social) => (
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
