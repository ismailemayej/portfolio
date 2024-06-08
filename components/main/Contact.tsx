import React from "react";
import Heading from "./Heading";
const Contact = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <Heading text="Contact Us" />
      <div className="h-full grid z-10 lg:grid-cols-3 grid-cols-1 gap-10 px-10 text-white">
        Email:ismaile535@gmail.com Mobile:01858226967
      </div>
    </div>
  );
};

export default Contact;
