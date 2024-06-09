import { Skill_data } from "@/constants";
import SkillDataProvider from "../sub/SkillDataProvider";
import Heading from "./Heading";

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center" id="skills">
      <Heading text="Skills" />
      <section
        className="relative overflow-hidden"
        style={{ transform: "scale(0.9" }}
      >
        <div className="grid lg:grid-cols-10 grid-cols-3 gap-2 mx-auto items-center justify-center">
          {Skill_data?.map((item, index: any) => (
            <SkillDataProvider
              key={index}
              src={item.Image}
              width={item.width}
              height={item.height}
              skill_name={item.skill_name}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
