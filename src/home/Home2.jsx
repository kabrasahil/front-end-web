import React from "react";
import image from "./assets/images/Desktop1.png";
import "./Home2.css";
import { Link } from 'react-router-dom';


export default function Home2() {
  return (
    <div className="flex lg:flex-row sm:flex-col md:flex-col gap-10 lg:justify-center lg:items-center py-12 px-8 overflow-x-hidden bg-stone-900">
      <div className="w-[800px]   sm:order-last md:order-last lg:order-first">
        <img
          className="drop-shadow-2xl shadow-zinc-400 rounded-xl img-home2"
          src="https://drive.google.com/uc?export=view&id=157v94esi57zsEWWJazRauOCgqa388MJU"
          alt="about-img"
        />
      </div>
      <div className="flex flex-col sm:justify-end md:justify-end gap-5 lg:w-96 sm:w-fit md:w-fit sm:p-6 md:p-6 lg:p-0 sm:ml-auto md:ml-auto lg:ml-2 lg:text-left sm:text-right md:text-right sm:px-20 md:px-20">
        <h3 className="lg:text-2xl sm:text-4xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-pink-400 to-pink-900 sm:mr-4 md:mr-4">
          Our Mission
        </h3>
        <h2 className="w-fit text-slate-100 font-extrabold lg:text-3xl sm:text-7xl md:text-7xl sm:ml-auto md:ml-auto lg:ml-0">
          Game Theory?
        </h2>
        <p className="text-slate-300 font-thin lg:text-lg sm:text-2xl md:text-2xl !text-justified">
        The branch of social science that studies strategic decision making is called game theory. The games in this theory range from chess to child-rearing, from tennis to business takeovers, and from advertising to arms control. Thinking a step ahead, understanding a situation from multiple perspectives, sensing opponents' motives, maximizing your payouts, minimizing your losses, sometimes even ensuring win-win outcomes - all these are inherent features of Game Theory.
        </p>
        <Link to="/igts">
          <button className="flex justify-center bg-gradient-to-r  from-pink-900 to-pink-700 text-white font-medium lg:text-lg sm:text-2xl md:text-2xl sm:w-56 md:w-56 lg:w-44 rounded-full h-10 !text-center sm:ml-auto md:ml-auto lg:ml-1">
            <div> Learn more </div>
          </button>
        </Link>
      </div>

      <div></div>

      <div className="absolute z-0 w-32 rounded-full shadow-2xl shadow-blue-300"></div>
    </div>
  );
}
