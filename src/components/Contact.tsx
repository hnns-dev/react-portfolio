import React from "react";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { AnimatedDiv } from "./AnimatedDiv";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-stone-300 bg-opacity-20 backdrop-blur-lg"
    >
      <div className="container mx-auto p-4">
        <h2 className="font-titillium text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-amber-50 text-center">
          <span className="text-amber-600">&lt;</span>
          Let's Connect
          <span className="text-amber-600">/&gt;</span>
        </h2>

        <div className="max-w-2xl mx-auto text-center">
          <AnimatedDiv direction="up">
            <p className="text-xl text-amber-50 mb-8">
              I’m enthusiastic about new projects, web development discussions,
              and tech talk. Whether you’re looking to hire, seeking
              collaboration, or just wanting to chat, I’d be thrilled to connect
              with you!
            </p>
          </AnimatedDiv>

          <AnimatedDiv direction="up">
            <a
              href="mailto:h-langstaedtler@web.de"
              className="inline-block bg-amber-600 text-stone-800 font-bold py-3 px-6 rounded-full text-lg transition-all duration-300 hover:bg-amber-500 hover:shadow-lg"
            >
              Send me a message
            </a>
          </AnimatedDiv>

          <AnimatedDiv direction="up">
            <div className="mt-12 text-amber-50">
              <p className="mb-2">Or contact me here:</p>
              <div className="flex justify-center space-x-4">
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
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
}

export default Contact;
