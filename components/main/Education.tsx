import React from "react";
import Heading from "./Heading";

const Education = ({ index }: any) => {
  const edu = [{ Sub: "Al hadith" }];
  return (
    <>
      <Heading text="Education" />
      <div id="education" key={index} className="px-20">
        <div className="grid lg:grid-cols-3 grid-cols-1 h-32 text-white lg:gap-16">
          <div className="hover:scale-105 hover:bg-slate-900 p-3 rounded-2xl border border-neutral-700 shadow-xl">
            <h3>
              <span className=" text-yellow-300 font-semibold">
                Univercity:{" "}
              </span>
              Islamic Arabic Univercity.
            </h3>
            <h3>
              <span className=" text-yellow-300 font-semibold">Subject: </span>
              Al hadith and islamic History.
            </h3>
          </div>
          <div className="hover:transition-all hover:scale-105 hover:bg-slate-900 p-3 rounded-2xl border border-neutral-700 shadow-xl">
            <h3>
              <span className=" text-yellow-300 font-semibold">
                Univercity:{" "}
              </span>
              Islamic Arabic Univercity.
            </h3>
            <h3>
              <span className=" text-yellow-300 font-semibold">Subject: </span>
              Al hadith and islamic History.
            </h3>
          </div>
          <div className="hover:transition-all hover:scale-105 hover:bg-slate-900 p-3 rounded-2xl border border-neutral-700 shadow-xl">
            <h3>
              <span className=" text-yellow-300 font-semibold">
                Univercity:{" "}
              </span>
              Islamic Arabic Univercity.
            </h3>
            <h3>
              <span className=" text-yellow-300 font-semibold">Subject: </span>
              Al hadith and islamic History.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
