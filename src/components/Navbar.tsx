import React from "react";
import BurgerMenu from "./BurgerMenu";

function Navbar() {
  return (
    <nav className="font-titillium bg-stone-800 py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-amber-600">
          <span>&lt;</span>hl.dev<span>/&gt;</span>
        </h1>
        <ul className="flex gap-4 max-sm:hidden">
          <li>
            <a
              href="#hero"
              className="text-amber-400 hover:text-amber-600 transform"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-amber-400 hover:text-amber-600 transform"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-amber-400 hover:text-amber-600 transform"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-amber-400 hover:text-amber-600 transform"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-amber-400 hover:text-amber-600 transform"
            >
              Contact
            </a>
          </li>
        </ul>
        <BurgerMenu />
      </div>
    </nav>
  );
}

export default Navbar;
