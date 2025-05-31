import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-sans bg-neutral-50 text-black">
      <nav className="bg-neutral-400 p-6 fixed w-full top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-red-700">Ma</span>Ngala
          </div>

          {/* Hamburger Button For Menu */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            {/* Animated Hamburger Icon */}
            <div className="space-y-1">
              <span
                className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>

          {/* Navigation Links */}
          <ul
            className={`fixed top-0 left-0 w-full h-screen bg-neutral-400 flex flex-col items-center justify-center gap-6 transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-y-0" : "translate-y-full"
            } md:static md:h-auto md:w-auto md:flex md:flex-row md:translate-y-0`}
            style={{ zIndex: 40 }}
          >
            <li>
              <a
                href="#hero"
                className="text-lg hover:text-red-700"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-lg hover:text-red-700"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-lg hover:text-red-700"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-lg hover:text-red-700"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-lg hover:text-red-700"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                className="text-lg hover:text-red-700"
                onClick={() => setIsOpen(false)}
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
