import React from "react";
import SkillList from "./SkillList";

function Experience() {
  return (
    <section id="Experience">
      <div className="flex flex-col text-center w-full mb-20">
        <p className="lg:w-2/3 mx-auto leading-relaxed text-md text-gray-400">
          My
        </p>
        <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-white">
          Technologies and Tools
        </h1>
      </div>

      <SkillList />
    </section>
  );
}

export default Experience;
