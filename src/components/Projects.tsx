import React from "react";
import ProjectCard from "./ProjectCard";
import { AnimatedDiv } from "./AnimatedDiv";

const projectsData = [
  {
    title: "Task Manager App",
    description:
      "A task management tool built with TypeScript, React, and Tailwind CSS. Key features include: - Add, Delete, Rename Tasks - Mark as Completed - Filter Tasks",
    previewLink: "https://project1-preview.com",
    codeLink: "https://github.com/HaillSeitan/task-manager",
    imageUrl: "/img/project001.png",
  },
  {
    title: "Register Form",
    description:
      "A simple register form built with TypeScript, React an Tailwind CSS. Using Zod for input vadlidation + Error meesages showing incrroect input",
    previewLink: "https://project1-preview.com",
    codeLink: "https://github.com/HaillSeitan/register-form",
    imageUrl: "/img/project002.png",
  },
  {
    title: "Task Manager App",
    description:
      "Task App created with TypeScript, React an Tailwind CSS. Functionalities: adding, deleting and renaming tasks, mark an completed, filter over them. WIP",
    previewLink: "https://project1-preview.com",
    codeLink: "https://github.com/HaillSeitan/task-manager",
    imageUrl: "/img/project001.png",
  },
  {
    title: "Task Manager App",
    description:
      "Task App created with TypeScript, React an Tailwind CSS. Functionalities: adding, deleting and renaming tasks, mark an completed, filter over them. WIP",
    previewLink: "https://project1-preview.com",
    codeLink: "https://github.com/HaillSeitan/task-manager",
    imageUrl: "/img/project001.png",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-titillium text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-amber-50">
          <span className="text-amber-600">&lt;</span>
          Projects
          <span className="text-amber-600">/&gt;</span>
        </h2>

        <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory sm:ml-6 s md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectsData.map((project, index) => (
            <AnimatedDiv key={index} direction={"up"}>
              <ProjectCard {...project} />
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
