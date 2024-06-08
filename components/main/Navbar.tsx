import { Socials } from "@/constants";
import Image from "next/image";
import edu from "@/public/menuicon/icons8-education-64.png";
import skill from "@/public/menuicon/icons8-skills-48.png";
import project from "@/public/menuicon/icons8-project-50.png";
import blog from "@/public/menuicon/icons8-blog-50.png";
import contact from "@/public/menuicon/icons8-contact-48.png";
const Navbar = () => {
  const menu = [
    {
      name: "Education",
      logo: (
        <Image
          src={edu}
          alt=""
          height={30}
          width={30}
          className="bg-white rounded-full"
        />
      ),
      link: "#education",
    },
    {
      name: "Skills",
      logo: (
        <Image
          src={skill}
          alt=""
          height={30}
          width={30}
          className="bg-white rounded-full p-1"
        />
      ),
      link: "#skills",
    },
    {
      name: "Project",
      logo: (
        <Image
          src={project}
          alt=""
          height={30}
          width={30}
          className="bg-white rounded-full p-1"
        />
      ),
      link: "#projects",
    },
    {
      name: "Blogs",
      logo: (
        <Image
          src={blog}
          alt=""
          height={30}
          width={30}
          className="bg-white rounded-full p-1"
        />
      ),
      link: "#blogs",
    },
    {
      name: "Contact",
      logo: (
        <Image
          src={contact}
          alt=""
          height={30}
          width={30}
          className="bg-white rounded-full"
        />
      ),
      link: "#contact",
    },
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
          <div className="flex text-sm lg:text-md items-center justify-between w-full h-auto border border-[#7042f861] lg:bg-[#0300145e] bg-[#24103dfb]  mr-[15px] px-[20px] py-[10px] lg:rounded-full rounded-md text-gray-200">
            {menu.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="cursor-pointer hover:transition-all lg:hover:scale-105 lg:hover:border-b lg:hover:rounded-xl lg:hover:px-3 hover:bg-[#2d2961f3]"
              >
                <span className="lg:hidden">{item.logo}</span>{" "}
                <span className="lg:block hidden">{item.name}</span>
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
