import React from "react";
import AnimatedDiv from "./AnimatedDiv";

function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto p-4">
        <h2 className="font-titillium text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-amber-50">
          <span className="text-amber-600">&lt;</span>
          Skills
          <span className="text-amber-600">/&gt;</span>
        </h2>
        <div className="flex flex-col gap-6">
          <AnimatedDiv direction="left">
            <div className="bg-stone-400 bg-opacity-20 backdrop-blur-lg rounded-xl p-6 shadow-lg flex gap-6 items-center">
              <p className="font-titillium text-xl text-amber-50  ">Frontend</p>
              <div></div>
            </div>
          </AnimatedDiv>
          <AnimatedDiv direction="left">
            <div className="bg-stone-400 bg-opacity-20 backdrop-blur-lg rounded-xl p-6 shadow-lg flex gap-6 items-center">
              <p className="font-titillium text-xl text-amber-50">Backend</p>
              <div></div>
            </div>
          </AnimatedDiv>
          <AnimatedDiv direction="left">
            <div className="bg-stone-400 bg-opacity-20 backdrop-blur-lg rounded-xl p-6 shadow-lg flex gap-6 items-center">
              <p className="font-titillium text-xl text-amber-50">Tools</p>
              <div></div>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
}

export default Skills;
