import React from "react";
import "./Ftile.css";

function Ftile() {
  return (
    <div className="text-gray-600 body-font ftile m-5 p-2 shadow-xl rounded-xl">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Indian Game Theory Society
            <br />
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex font-bold text-white bg-slate-500 border-0 py-2 px-6 focus:outline-none hover:bg-slate-900 rounded text-lg">
              Join The Community
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </div>
  );
}

export default Ftile;
