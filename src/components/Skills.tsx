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
        <div className="flex flex-col gap-6">
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
      </div>
    </section>
  );
}

export default Skills;
