import { nav } from "framer-motion/client";
import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import RoboEdge from "../assets/RoboEdge.png";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container flex justify-between items-center mx-auto">
        <div className=" font-bold text-xl">
          {/* <a href="#" className="">
            Robo<span className="text-purple">Edge</span>
          </a> */}
          <img src={RoboEdge} alt="RoboEdge" />
        </div>

        <div>
          <div className=" hidden md:flex space-x-6 ">
            {/* Add navigation links here if needed */}

            <a
              href="#home"
              className="relative text-white/80 transition duration-300
           hover:text-purple group"
            >
              <span> Home</span>
              <span
                className="absolute
             left-0 -bottom-1 w-0 h-0.5 bg-purple 
             transition-all 
            duration-300 
            group-hover:w-full"
              ></span>
            </a>

            <a
              href="#about"
              className="relative text-white/80 transition duration-300
           hover:text-purple group"
            >
              <span>service</span>
              <span
                className="absolute
             left-0 -bottom-1 w-0 h-0.5 bg-purple 
             transition-all 
            duration-300 
            group-hover:w-full"
              ></span>
            </a>

            <a
              href="#skills"
              className="relative text-white/80 transition duration-300
           hover:text-purple group"
            >
              <span>courses</span>
              <span
                className="absolute
             left-0 -bottom-1 w-0 h-0.5 bg-purple 
             transition-all 
            duration-300 
            group-hover:w-full"
              ></span>
            </a>

            <a
              href="#Projects"
              className="relative text-white/80 transition duration-300
           hover:text-purple group"
            >
              <span>Blog</span>
              <span
                className="absolute
             left-0 -bottom-1 w-0 h-0.5 bg-purple 
             transition-all 
            duration-300 
            group-hover:w-full"
              ></span>
            </a>

            <a
              href="#expriences"
              className="relative text-white/80 transition duration-300
           hover:text-purple group"
            >
              <span></span>
              <span
                className="absolute
             left-0 -bottom-1 w-0 h-0.5 bg-purple 
             transition-all 
            duration-300 
            group-hover:w-full"
              ></span>
            </a>
            <a
              href="#contact"
              className="relative text-white/80 transition duration-300
           hover:text-purple group"
            >
              <span></span>
              <span
                className="absolute
             left-0 -bottom-1 w-0 h-0.5 bg-purple 
             transition-all 
            duration-300 
            group-hover:w-full"
              ></span>
            </a>
          </div>

          {/* mobile view */}
          <div className="md:hidden">
            {/* Add mobile menu button and functionality here */}

            {showMenu ? (
              <FaXmark
                onClick={() => setShowMenu(!showMenu)}
                size={28}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <FaBars
                onClick={() => setShowMenu(!showMenu)}
                className="text-2xl cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
      {/* mobile menu */}
      {showMenu && (
        <div className="md:hidden mt-4   ronuded-lg p-4  text-center justify-center">
          <div className=" flex flex-col space-y-6 ">
            {/* Add navigation links here if needed */}

            <a
              onClick={() => setShowMenu(!showMenu)}
              href="#home"
              className="relative text-white/80 transition duration-300
           hover:text-purple group"
            >
              <span> Home</span>
            </a>

            <a
              onClick={() => setShowMenu(!showMenu)}
              href="#about"
              className="relative text-white/80 transition duration-300
           hover:text-purple group"
            >
              <span> About</span>
            </a>

            <a
              onClick={() => setShowMenu(!showMenu)}
              href="#skills"
              className="relative text-white/80 transition duration-300
           hover:text-purple group"
            >
              <span>skills</span>
            </a>

            <a
              onClick={() => setShowMenu(!showMenu)}
              href="#Projects"
              className="relative text-white/80 transition duration-300
           hover:text-purple group"
            >
              <span>project</span>
            </a>

            <a
              onClick={() => setShowMenu(!showMenu)}
              href="#expriences"
              className="relative text-white/80 transition duration-300 hover:text-purple group"
            >
              <span>Exprencie</span>
            </a>

            <a
              onClick={() => setShowMenu(!showMenu)}
              href="#contact"
              className="relative text-white/80 transition duration-300 hover:text-purple group"
            >
              <span>Contact</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
