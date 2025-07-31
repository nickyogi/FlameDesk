import React from "react";

export default function About() {
  return (
    <div className="relative text-zinc-400 z-50 flex flex-col sm:h-screen w-full overflow-x-hidden overflow-y-auto">
      <div className="flex flex-col sm:flex-row mt-[2vw] h-full">
        {/* Text Section */}
        <div className="sm:w-1/2 w-full mt-[15vw] sm:mt-[5vw] px-[10vw] sm:px-[7vw]">
          <h1 className="text-[8vw] sm:text-[3vw] font-bold text-[#6556CD] tracking-wider">
            About Us
          </h1>
          <p className="text-[3vw] sm:text-[1.2vw] text-zinc-700 font-semibold sm:leading-[1.5vw] mt-[4vw] sm:mt-[2vw]">
          FlameDesk is a powerful and sleek productivity web application designed to streamline your daily workflow and keep you motivated. It offers task management, goal tracking through challenges, and a personalized experience wrapped in a stunning glassmorphism UI.
          </p>
        </div>

        {/* Image Section */}
        <div className="sm:w-1/2 w-[90%]  mx-auto flex items-end mt-[8vw] sm:mt-0  h-[100%] overflow-hidden">
          <img
            src="/Images/about.png"
            alt="About"
            className="sm:h-[32vw] sm:w-[45vw] -mb-[4vw] sm:-mb-[2vw]"
          />
        </div>
      </div>
    </div>
  );
}
