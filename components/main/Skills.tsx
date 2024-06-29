import { Key } from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import Heading from "./Heading";

const Skills = async () => {
  const res = await fetch(
    "https://portfolio-server-six-tau.vercel.app/api/v1/skills",
    {
      cache: "no-store",
    }
  );
  const Skill_data = await res.json();

  return (
    <div className="lg:my-6 my-3 bg-slate-900 rounded-lg" id="skills">
      <Heading text="Skills" />
      <section
        className="relative overflow-hidden"
        style={{ transform: "scale(0.9" }}
      >
        <div className="w-[100%] grid lg:grid-cols-6 grid-cols-2 lg:gap-2 gap-2 items-center">
          {Skill_data?.data?.map(
            (
              item: {
                _id: Key | null | undefined;
                skilllogo: string;
                skillname: string;
                skillpercentage: number;
              },
              index: any
            ) => (
              <SkillDataProvider
                key={item._id}
                src={item.skilllogo}
                width={60}
                height={40}
                skill_name={item.skillname}
                skillpercentage={item.skillpercentage}
                index={index}
              />
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Skills;
