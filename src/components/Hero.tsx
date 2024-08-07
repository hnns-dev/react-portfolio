import React from "react";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="hero"
      className="container mx-auto p-14 md:p-20 text-amber-50 bg-cover bg-center min-h-svh flex flex-col justify-between mt-10"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6 lg:gap-10">
        <div className="flex flex-col self-start gap-6 lg:gap-10 flex-grow">
          <h1 className="font-titillium text-3xl md:text-5xl lg:text-7xl font-bold">
            <span>&lt;</span>
            <TypeAnimation
              wrapper="span"
              repeat={0}
              sequence={[800, "Hi, I'm Hannes"]}
              speed={20}
            />
            <span>/&gt;</span>
          </h1>
          <p className="font-titillium text-xl md:text-2xl lg:text-3xl">
            <span>&lt;</span>
            <TypeAnimation
              wrapper="span"
              repeat={0}
              sequence={[2200, "Junior Web Developer"]}
              speed={20}
            />
            <span>/&gt;</span>
          </p>
          <p className="font-titillium text-sm md:text-base lg:text-lg max-w-2xl">
            <span>&lt;</span>
            <TypeAnimation
              wrapper="span"
              repeat={0}
              sequence={[4000, "Focused on Innovative Frontend Solutions"]}
              speed={70}
            />
            <span>/&gt;</span>
          </p>
        </div>
        <div className="flex-shrink-0 w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[300px] xl:max-w-[440px]">
          <img
            src="/img/hero-programming2.svg"
            alt="Programming illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="flex flex-col gap-12 mb-32 md:mb-20 items-center md:items-end">
        <div className="md:self-start">
          <a
            href="#projects"
            className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition duration-300"
          >
            View My Projects
          </a>
        </div>
        <div className="flex md:justify-end space-x-4">
          <a
            href="https://www.linkedin.com/in/hannes-langst%C3%A4dtler-281415240/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-600"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/hnns-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-600"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://discord.gg/G8XYhX6m"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-600"
          >
            <FaDiscord size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
