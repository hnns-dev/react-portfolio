import React from "react";
import AnimatedDiv from "./AnimatedDiv";

function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto p-4">
        <h2 className="font-titillium text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-amber-50">
          <span className="text-amber-600">&lt;</span>
          About me
          <span className="text-amber-600">/&gt;</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-flow-col gap-8">
          <AnimatedDiv direction="left">
            <div className="bg-stone-400 bg-opacity-20 backdrop-blur-lg rounded-xl p-6 shadow-lg flex flex-col h-full">
              <div className="flex gap-6 items-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 overflow-hidden rounded-full flex-shrink-0">
                  <img
                    src="/img/profil.JPG"
                    alt="Your Name"
                    className="w-full h-full object-cover"
                    style={{ filter: "grayscale(100%)" }}
                  />
                </div>
                <div className="text-amber-50">
                  <span className="text-amber-600 font-bold -mx-3">
                    &lt;ul&gt;
                  </span>
                  <p>
                    <strong>Name:</strong> Hannes Langstädtler
                  </p>
                  <p>
                    <strong>Age:</strong> 33
                  </p>
                  <p>
                    <strong>Residence:</strong> Leipzig, Germany
                  </p>
                  <p>
                    <strong>Languages:</strong> German (Native speaker), English
                    (B2 level)
                  </p>
                  <span className="text-amber-600 font-bold -mx-3">
                    &lt;/ul&gt;
                  </span>
                </div>
              </div>
            </div>
          </AnimatedDiv>
          <AnimatedDiv direction="right">
            <div className="bg-stone-400 bg-opacity-20 backdrop-blur-lg rounded-xl p-6 shadow-lg flex flex-col h-full">
              <span className="text-amber-600 font-bold">&lt;p&gt;</span>
              <p className="text-amber-50 mx-3 flex-grow">
                As an emerging web developer, I am enthusiastic about creating
                digital experiences that excite and inspire people. My extensive
                background in design and layout, combined with my recent
                training in frontend technologies, drives me to constantly learn
                and improve. I am passionate about using technology to bring
                innovative ideas to life and committed to developing
                user-friendly, visually appealing web applications.
              </p>
              <span className="text-amber-600 font-bold">&lt;/p&gt;</span>
            </div>
          </AnimatedDiv>
        </div>
        <AnimatedDiv direction="up">
          <div className="mt-12 bg-stone-400 bg-opacity-20 backdrop-blur-lg rounded-xl p-6 shadow-lg">
            <h3 className="font-titillium text-2xl font-bold mb-6 text-amber-50">
              Experience
            </h3>
            <div className="space-y-6">
              {workExperiences.map((exp, index) => (
                <div key={index} className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                    <div className="w-0.5 h-full bg-amber-600"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-amber-50">
                      {exp.title}
                    </h4>
                    <p className="text-sm text-amber-200">{exp.date}</p>
                    <p className="text-amber-50">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
}

const workExperiences = [
  {
    title: "Web Development Bootcamp - Dev Haus Leipzig",
    date: "March 2024 - September 2024",
    description: "Fontend Web Development Camp",
  },
  {
    title: "Advertising Technician - Urban & Urban (Leipzig)",
    date: "July 2019 - Feburary 2024",
    description:
      "Operating large format printers and CNC milling machines, Preparing and processing print data",
  },
  {
    title: "Advertising Technician - Graßhoff GmbH (Zerbst/Anhalt)",
    date: "August 2008 - June 2019",
    description:
      "Creating layouts and designs, Operating large format printers, Vehicle lettering, creating various advertising materials",
  },
];

export default About;
