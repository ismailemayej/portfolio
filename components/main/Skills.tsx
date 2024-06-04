import { Skill_data } from "@/constants";
import SkillDataProvider from "../sub/SkillDataProvider";
import Heading from "./Heading";

const Skills = () => {
  return (
    <>
      <Heading text="Skills" />
      <section
        id="skills"
        className="relative overflow-hidden "
        style={{ transform: "scale(0.9" }}
      >
        <div className="grid lg:grid-cols-12 grid-cols-3 gap-5 mx-auto items-center justify-center">
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
    </>
  );
};

export default Skills;
