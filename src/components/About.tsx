import React from "react";
// import { TypeAnimation } from "react-type-animation";

function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto p-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-amber-50">
          <span className="text-amber-600">&lt;</span>
          About me
          <span className="text-amber-600">/&gt;</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bild und allgemeine Informationen */}
          <div className="bg-stone-400 bg-opacity-20 backdrop-blur-lg rounded-xl p-6 shadow-lg flex gap-6 items-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 overflow-hidden rounded-full flex-shrink-0">
              <img
                src="/img/profil.JPG"
                alt="Your Name"
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(100%)" }}
              />
            </div>
            <div className="text-amber-50">
              <span className="text-amber-600 font-bold -mx-3">&lt;ul&gt;</span>
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
                <strong>Languages:</strong> German (Native language), English
                (B2 level)
              </p>
              <span className="text-amber-600 font-bold -mx-3">
                &lt;ul/&gt;
              </span>
            </div>
          </div>

          {/* Kurze Beschreibung */}
          <div className="bg-stone-400 bg-opacity-20 backdrop-blur-lg rounded-xl p-6 shadow-lg flex flex-col">
            <span className="text-amber-600 font-bold ">&lt;p&gt;</span>
            <p className="text-lg text-amber-50 mx-3">
              As a budding web developer, I am enthusiastic about the
              opportunity to create digital experiences that excite and inspire
              people. and inspire people. My passion for technology and design
              design drives me to constantly learn new things and improve my
              improve my skills.
            </p>
            <span className="text-amber-600 font-bold">&lt;p/&gt;</span>
          </div>
        </div>

        {/* Work Experience */}
        <div className="mt-12 bg-stone-400 bg-opacity-20 backdrop-blur-lg rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-amber-50">
            Work Experience
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
      </div>
    </section>
  );
}

const workExperiences = [
  {
    title: "Web Development Bootcamp",
    date: "April 2024 - Now",
    description:
      "Currently studying Fontend Web Development at Dev Haus Leipzig",
  },
  {
    title: "Advertising Technician",
    date: "July 2019 - Feburary 2024",
    description:
      "Urban & Urban (Leipzig): Operating large format printers and CNC milling machines, Preparing and processing print data",
  },
  {
    title: "Advertising Technician",
    date: "August 2011 - June 2019",
    description:
      "Graßhoff GmbH (Zerbst/Anhalt): Creating layouts and designs, Operating large format printers, Vehicle lettering, creating various advertising materials",
  },
  // Fügen Sie weitere Erfahrungen hinzu...
];

export default About;
