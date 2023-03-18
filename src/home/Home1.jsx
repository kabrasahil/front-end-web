import React from "react";
import image from "./assets/images/editor.png";
import "./Home1.css";

export default function Home1() {
  return (
    <div className="flex justify-center gap-10 items-center py-12 px-8 overflow-x-hidden bg-stone-900">
      <div className="flex flex-col gap-5 w-96">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-500">
          About
        </h3>
        <h2 className="text-slate-100 font-extrabold text-3xl">
          The Indian Game Theory Society
        </h2>
        <p className="text-slate-300 font-thin text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          dolores maiores vel iste quae iusto sed at neque, facere doloribus
          tempora rerum ipsam fugiat commodi similique praesentium expedita
          iure, voluptatum quisquam vitae. Ab maxime dolore sint unde
          voluptatum, impedit atque?
        </p>
        <button className="flex justify-center bg-gradient-to-r from-indigo-500 to-blue-400 text-white font-medium text-lg w-44 rounded-full h-10 !text-center">
          <div> Learn more </div>
        </button>
      </div>
      <div className="absolute z-0 w-32 rounded-full shadow-2xl shadow-blue-300"></div>
      <div className="w-[800px]">
        <img
          className="drop-shadow-2xl shadow-zinc-400 rounded-xl img-home1"
          src={image}
          alt="about-img"
        />
      </div>
    </div>
  );
}
