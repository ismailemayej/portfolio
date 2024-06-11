import Image from "next/image";
import edu from "@/public/menuicon/icons8-education-64.png";
import skill from "@/public/menuicon/icons8-skills-48.png";
import project from "@/public/menuicon/icons8-project-50.png";
import blog from "@/public/menuicon/icons8-blog-50.png";
import contact from "@/public/menuicon/icons8-contact-48.png";
import Home from "@/public/menuicon/icons8-home-50.png";

const Navbar = () => {
  const menu = [
    {
      name: "Home",
      logo: (
        <Image
          src={Home}
          alt=""
          height={30}
          width={30}
          className="bg-white rounded-full p-1"
        />
      ),
      link: "/",
    },
    {
      name: "Education",
      logo: (
        <Image
          src={edu}
          alt=""
          height={30}
          width={30}
          className="bg-white rounded-full "
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
    <div
      id=""
      className="w-full h-[65px] fixed lg:top-0 justify-center  bottom-0 left-0 shadow-lg shadow-[#2A0E61]/50 bg-[#110d2b38] backdrop-blur-lg z-50 lg:px-10"
    >
      <div className="w-full h-full flex flex-row items-center justify-center m-auto px-[1px]">
        <div className="w-[750px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex text-sm lg:text-lg items-center justify-between w-full h-auto border border-[#7042f861] lg:bg-[#15101f9d] bg-[#24103dfb]  mr-[15px] px-[20px] py-[10px] lg:rounded-full text-gray-200">
            {menu.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="cursor-pointer hover:transition-all lg:hover:scale-105 lg:hover:border hover:rounded-xl lg:hover:rounded-xl lg:hover:px-3 hover:bg-[#2d2961f3] hover:border-2 transition-all hover:scale-105 hover:shadow-2xl"
              >
                <span className="lg:hidden">{item.logo}</span>{" "}
                <span className="lg:block hidden">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
