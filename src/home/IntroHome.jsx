import React from "react";
import logo from "./assets/igts-white-logo.png";
import "./Home.css";

const IntroHome = () => {
  console.log(logo);
  return (
    <div
      className="flex flex-col items-center justify-center intro-home-pattern"
      style={{ minHeight: "800px", minWidth: "100%" }}
    >
      <img
        src={logo}
        alt=""
        srcset=""
        className="object-cover h-48 w-100"
        style={{ filter: "drop-shadow(0px 0px 3px #fff)" }}
      />

      <h1
        class=" mr-auto ml-auto text-5xl font-extrabold leading-none tracking-tight md:text-6xl lg:text-7xl"
        style={{ fontFamily: "sans-serif" }}
      >
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-pink-500 from-blue-400">
          The Indian Game Theory Society
        </span>
      </h1>

      <h2 className="mt-5 ml-auto mr-auto text-1xl font-bold leading-none tracking-tight md:text-2xl lg:text-3xl text-gray-100">
        <i>Analyse, Strategize and Act </i>
      </h2>
      <a
        href="#_"
        class="mt-10 relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
      >
        <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-red opacity-[3%]"></span>
        <span class="absolute -top-2 left-0 w-72 h-72 transition-all duration-500 ease-in-out rotate-45 -translate-x-64 -translate-y-16 bg-gradient-to-r to-pink-300 to-pink-500 from-pink-700 opacity-100 group-hover:translate-x-0"></span>

        <span class="flex relative w-full text-left  transition-colors duration-200 ease-in-out group-hover:!text-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-5 text-pink-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
          <span className="text-gray-100">Get Started</span>
        </span>
        <span class="absolute inset-0 border-2 border-pink-500 rounded-full"></span>
      </a>
    </div>
  );
};

export default IntroHome;
