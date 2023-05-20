import React, { useContext } from "react";
import { Context } from "../context/Context";
import logo from "./assets/igts-white-logo.png";
import "./Home.css";

const IntroHome = () => {
  console.log(logo);

  const user = useContext(Context);
  return (
    <div
      className="flex flex-col items-center justify-center lg:h-80 sm:h-screen md:h-screen md:gap-y-16 sm:gap-y-16"
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
        class=" mr-auto ml-auto lg:text-7xl  sm:px-16 sm:text-9xl md:text-8xl text-center font-extrabold  tracking-tight "
        style={{ fontFamily: "sans-serif" }}
      >
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-pink-500 from-blue-400">
          The Indian Game Theory Society
        </span>
      </h1>

      <h2 className="-mt-5 ml-auto mr-auto text-1xl font-bold leading-none tracking-tight md:text-5xl sm:text-5xl lg:text-3xl text-gray-100">
        <i>Analyse, Strategize and Act </i>
      </h2>
      {user ? (
        <a
          href="/dashboard"
          class="mt-10 relative inline-flex items-center justify-start inline-block px-5 py-3 sm:px-10 md:px-10 sm:py-6 md:py-6 overflow-hidden font-bold rounded-full group"
        >
          <span class="w-40 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-red opacity-[3%]"></span>
          <span class="absolute top-2 -left-16 w-96 h-80 transition-all duration-500 ease-in-out rotate-45 -translate-x-64 -translate-y-16 bg-gradient-to-r to-blue-100 to-blue-100 from-blue-800 opacity-100 group-hover:translate-x-0"></span>

          <span class="flex relative w-full text-left  transition-colors duration-200 ease-in-out group-hover:!text-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="lg:w-6 lg:h-6 sm:w-9 sm:h-9 md:w-9 md:h-9 mr-5 text-blue-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
            <span className="text-gray-100 sm:text-3xl md:text-3xl lg:text-xl">
              Go to Dashboard
            </span>
          </span>
          <span class="absolute inset-0 border-2 border-blue-500 rounded-full"></span>
        </a>
      ) : (
        <a
          href="/login"
          class="mt-10 relative inline-flex items-center justify-start inline-block px-5 py-3 sm:px-10 md:px-10 sm:py-6 md:py-6 overflow-hidden font-bold rounded-full group"
        >
          <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-red opacity-[3%]"></span>
          <span class="absolute top-5 -left-16 w-96 h-80 transition-all duration-500 ease-in-out rotate-45 -translate-x-64 -translate-y-16 bg-gradient-to-r to-pink-300 to-pink-500 from-pink-700 opacity-100 group-hover:translate-x-0"></span>

          <span class="flex relative w-full text-left  transition-colors duration-200 ease-in-out group-hover:!text-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="lg:w-6 lg:h-6 sm:w-9 sm:h-9 md:w-9 md:h-9 mr-5 text-pink-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
            <span className="text-gray-100 sm:text-3xl md:text-3xl lg:text-xl">
              Get Started
            </span>
          </span>
          <span class="absolute inset-0 border-2 border-pink-500 rounded-full"></span>
        </a>
      )}
    </div>
  );
};

export default IntroHome;
