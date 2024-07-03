import React from "react";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="hero"
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/img/BG001.png')" }}
    >
      <div className="container mx-auto p-10 text-amber-50">
        <h1 className="text-4xl font-bold mb-4">
          <span>&lt;</span>
          <TypeAnimation
            wrapper="span"
            repeat={0}
            sequence={["Hi, I'm Hannes"]}
            speed={1}
            deletionSpeed={20}
          />
          <span>/&gt;</span>
        </h1>
        <p className="text-2xl px-8 mb-6">
          <span>&lt;</span>
          <TypeAnimation
            wrapper="span"
            repeat={0}
            sequence={["Future Web Developer"]}
            speed={1}
            deletionSpeed={20}
          />
          <span>/&gt;</span>
        </p>
        <p className="text-md px-12">
          <span>&lt;</span>
          <TypeAnimation
            wrapper="span"
            repeat={0}
            sequence={[
              "From concept to code, crafting digital experiences that leave a mark. Let's make your website stand out.",
            ]}
            speed={30}
            deletionSpeed={20}
          />
          <span>/&gt;</span>
        </p>
      </div>
    </section>
  );
}

export default Hero;
