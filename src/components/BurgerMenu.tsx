import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

function BurgerMenu() {
  return (
    <div className="max-sm:block max-2xl:hidden stroke-amber-400 hover:text-amber-600 transform hover:shadow-sm">
      <Menu>
        <MenuButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            className="size-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </MenuButton>
        <MenuItems
          className="bg-stone-800/90 text-amber-100 w-52 h-screen mt-4"
          anchor="bottom"
        >
          <MenuItem>
            <a
              className="block data-[focus]:bg-stone-600 mt-4 px-6 py-3"
              href="#hero"
            >
              Home
            </a>
          </MenuItem>
          <MenuItem>
            <a
              className="block data-[focus]:bg-stone-600 px-6 py-3"
              href="#about"
            >
              About Me
            </a>
          </MenuItem>
          <MenuItem>
            <a
              className="block data-[focus]:bg-stone-600 px-6 py-3"
              href="#skills"
            >
              Skills
            </a>
          </MenuItem>
          <MenuItem>
            <a
              className="block data-[focus]:bg-stone-600 px-6 py-3"
              href="#projects"
            >
              Projects
            </a>
          </MenuItem>
          <MenuItem>
            <a
              className="block data-[focus]:bg-stone-600 px-6 py-3 mb-2"
              href="#contact"
            >
              Contact
            </a>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}

export default BurgerMenu;
