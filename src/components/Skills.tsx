import React from "react";
import AnimatedDiv from "./AnimatedDiv";
import SkillsItem from "./SkillsItem";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiVisualstudiocode,
  SiGit,
} from "react-icons/si";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { logo: <FaHtml5 />, title: "HTML" },
      { logo: <FaCss3Alt />, title: "CSS" },
      { logo: <FaJs />, title: "JavaScript" },
      { logo: <SiTypescript />, title: "TypeScript" },
      { logo: <FaReact />, title: "React" },
      { logo: <SiNextdotjs />, title: "Next.js" },
      { logo: <SiTailwindcss />, title: "Tailwind CSS" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { logo: <FaNodeJs />, title: "Node.js" },
      { logo: <SiPrisma />, title: "Prisma" },
      { logo: <FaDocker />, title: "Docker" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { logo: <SiVisualstudiocode />, title: "VS Code" },
      { logo: <SiGit />, title: "Git" },
      { logo: <FaGithub />, title: "GitHub" },
      { logo: <FaFigma />, title: "Figma" },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto p-4">
        <h2 className="font-titillium text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-amber-50">
          <span className="text-amber-600">&lt;</span>
          Skills
          <span className="text-amber-600">/&gt;</span>
        </h2>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col gap-6 lg:w-3/4">
            {skillsData.map((category, index) => (
              <AnimatedDiv key={index} direction="left">
                <div className="bg-stone-400 bg-opacity-20 backdrop-blur-lg rounded-xl p-6 shadow-lg">
                  <p className="font-titillium text-xl text-amber-50 mb-4">
                    {category.category}
                  </p>
                  <div className="flex flex-wrap gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillsItem
                        key={skillIndex}
                        logo={skill.logo}
                        title={skill.title}
                      />
                    ))}
                  </div>
                </div>
              </AnimatedDiv>
            ))}
          </div>
          <div className="lg:w-1/4 bg-stone-400 bg-opacity-20 backdrop-blur-lg rounded-xl p-6 shadow-lg text-orange-50 flex flex-col gap-4">
            <p>
              As a web developer specializing in frontend development and
              design, I excel in creating responsive, visually appealing web
              applications using HTML, CSS, and JavaScript. With TypeScript, I
              ensure robust and maintainable code. My expertise includes
              building modern interfaces with React and Next.js, and efficiently
              styling with Tailwind CSS.
            </p>
            <p>
              Additionally, I have foundational knowledge in backend
              development, including setting up server-side applications with
              Node.js, managing databases with Prisma, and containerization
              using Docker.
            </p>
            <p>
              I utilize tools like VS Code for coding, Git and GitHub for
              version control, and Figma for design, which streamline my
              workflow and enhance productivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
