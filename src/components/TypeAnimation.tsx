import React from "react";
import { TypeAnimation } from "react-type-animation";

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={["Hi, I'm Hannes"]}
      wrapper="span"
      speed={1}
      style={{ fontSize: "1.2em", display: "inline-block" }}
      repeat={0}
    />
  );
};

export default ExampleComponent;
