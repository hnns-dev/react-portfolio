import React from "react";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="hero"
      className="bg-cover bg-center min-h-screen flex items-center"
    >
      <div className="container mx-auto p-14  md:p-20 text-amber-50">
        <h1 className="font-titillium text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span>&lt;</span>
          <TypeAnimation
            wrapper="span"
            repeat={0}
            sequence={[800, "Hi, I'm Hannes"]}
            speed={10}
          />
          <span>/&gt;</span>
        </h1>
        <p className="font-titillium text-xl md:text-2xl lg:text-3xl mb-6">
          <span>&lt;</span>
          <TypeAnimation
            wrapper="span"
            repeat={0}
            sequence={[2500, "Future Web Developer"]}
            speed={10}
          />
          <span>/&gt;</span>
        </p>
        <p className="font-titillium text-sm md:text-base lg:text-lg max-w-2xl">
          <span>&lt;</span>
          <TypeAnimation
            wrapper="span"
            repeat={0}
            sequence={[
              5000,
              "From concept to code, crafting digital experiences that leave a mark. Let's make your website stand out.",
            ]}
            speed={50}
          />
          <span>/&gt;</span>
        </p>
        <div className="mt-20">
          <a
            href="#projects"
            className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition duration-300"
          >
            View My Projects
          </a>
        </div>
        <div className="mt-20 flex justify-end space-x-4">
          <a
            href="https://www.linkedin.com/in/hannes-langst%C3%A4dtler-281415240/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-600"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/HaillSeitan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-600"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-600"
          >
            <FaDiscord size={24} />
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-amber-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
