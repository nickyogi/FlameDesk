import React from "react";
import { Link } from "react-router-dom";
import About from "./About";

export default function EntryPage() {
  return (
    <div
      id="home"
      className="min-h-screen w-full relative bg-white overflow-hidden "
    >
      <nav className="flex absolute z-50 top-0 p-5 gap-5">
        <div className="h-8 w-8 rounded-lg overflow-hidden">
          <img src="/Images/Logo - icon.png" alt="logo" />
        </div>
        <div className="flex text-zinc-800 items-center gap-6 font-semibold text-xl">
          <a href="#home" className="cursor-pointer">
            Home
          </a>
          <a href="#about" className="cursor-pointer">
            About
          </a>
        </div>
      </nav>

      {/* Center Content */}
      <div className="relative pt-32 sm:pt-0 z-10 flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-4 py-10">
        {/* Illustration */}
        <div className="transform custom-rotate-y pt-32 sm:pt-0 sm:mb-10 md:mb-0 md:mr-10 w-full md:w-2/3 max-w-sm md:max-w-md overflow-hidden">
          <object
            type="image/svg+xml"
            data="/Images/boy-character-floating.svg"
            alt="Floating boy character - Made by SVGator"
            img=""
            width="150%"
            className="-translate-x-[50%] ml-40 sm:ml-64"
          >
            <img
              src="/Images/boy-character-floating.svg"
              alt="Floating boy character - Made by SVGator"
            />
          </object>
        </div>

        <div className="h-[50%] sm:h-[150%] w-[300%] sm:w-screen absolute top-[7%] sm:-top-12 left-[5%] sm:left-[42%] z-20 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-full pointer-events-none overflow-hidden">
          <img
            className="h-full w-full opacity-5 "
            src="/Images/texture.jpg"
            alt="texture"
          />
        </div>

        {/* Card */}
        <div className="ml-16 sm:ml-32 mt-0 sm:mt-32  w-full relative z-20 md:w-1/2 max-w-md  rounded-2xl py-8 px-6">
          <div className="mb-6 text-center">
            <h1 className="text-6xl text-white font-extrabold uppercase">
              Flame Desk
            </h1>

            <p className="text-white text-sm tracking-wider mt-2">
              Web application designed to streamline your daily workflow and
              keep you motivated.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <Link
              to="/login"
              className="w-full hover:bg-white bg-opacity-70 hover:text-purple-700 text-white tracking-wider font-semibold text-sm py-3 rounded-lg border border-purple-200 hover:bg-opacity-90 transition-all duration-200 text-center"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="w-full hover:bg-white bg-opacity-70 hover:text-purple-700 text-white tracking-wider font-semibold text-sm py-3 rounded-lg border border-purple-200 hover:bg-opacity-90 transition-all duration-200 text-center"
            >
              Sign Up
            </Link>
          </div>

          <p className="text-center text-xs text-zinc-300 mt-6">
            © 2025 FlameDesk. All rights reserved.
          </p>
        </div>
      </div>

      <div id="about">
        <About />
      </div>
    </div>
  );
}
