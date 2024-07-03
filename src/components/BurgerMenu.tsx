import React from "react";
import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenueToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-sm:block max-2xl:hidden stroke-amber-400 hover:text-amber-600 transform hover:shadow-sm">
      <Menu>
        <MenuButton onClick={handleMenueToggle}>
          {isOpen ? (
            <XMarkIcon className="size-8 text-amber-400" />
          ) : (
            <Bars3Icon className="size-8 text-amber-400" />
          )}
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
