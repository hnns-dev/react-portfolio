import React from "react";
import ProjectCard from "./ProjectCard";
import { AnimatedDiv } from "./AnimatedDiv";
import { VscSnake } from "react-icons/vsc";

const projectsData = [
  {
    title: "Bounce Web App",
    description:
      "Map based Web app for scheduduling sports related activities. includes creating vanues on a map and an planing meetings. Add friends via QR Code. Created for mobile view. WIP",
    previewLink: "https://bounce-meet.vercel.app/",
    codeLink: "https://github.com/devhausleipzigacademy/camp12-final",
    imageUrl: "/img/project005.png",
  },
  {
    title: "Cinema App",
    description:
      "Fully functional App including Ticket booking, Movie Bookmarks, Cast & Crew info, Profil costomization. Group Project done at Dev Haus Leipzig. Use ",
    previewLink: "https://camp12-midterm.vercel.app",
    codeLink: "https://github.com/devhausleipzigacademy/camp-12-midterm-next",
    imageUrl: "/img/project003.png",
  },
  {
    title: "Task Manager App",
    description:
      "A task management tool built with TypeScript, React, and Tailwind CSS. Key features include: - Add, Delete, Rename Tasks - Mark as Completed - Filter Tasks",
    previewLink: "https://task-manager-puce-theta.vercel.app/",
    codeLink: "https://github.com/hnns-dev/task-manager",
    imageUrl: "/img/project001.png",
  },
  {
    title: "Register Form",
    description:
      "A simple register form built with TypeScript, React an Tailwind CSS. Using Zod for input vadlidation + Error meesages showing incrroect input",
    previewLink: "https://register-form-lyart.vercel.app/",
    codeLink: "https://github.com/hnns-dev/register-form",
    imageUrl: "/img/project002.png",
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

        <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectsData.map((project, index) => (
            <div>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        <AnimatedDiv direction="right">
          <div className="flex justify-center items-center bg-stone-400 bg-opacity-20 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg mt-12 px-6 py-4 gap-4 lg:justify-evenly">
            <p className="text-amber-200 md:text-lg lg:text-2xl">
              From serious projects to serious fun – Click here and take a quick
              gaming break!
            </p>
            <div className=" text-amber-200 text-3xl bg-amber-600 hover:scale-110 transition p-2 rounded-full shadow-lg">
              <a href="https://hnns-dev.github.io/snake_game/" target="_blank">
                {" "}
                <VscSnake />{" "}
              </a>
            </div>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
}

export default Projects;
