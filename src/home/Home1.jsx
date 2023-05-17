import React from "react";
import image from "./assets/images/editor.png";
import "./Home1.css";
import information from "./assets/information.png";
import { Link } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop.jsx';


export default function Home1() {
  return (
    <div className="flex lg:flex-row sm:flex-col md:flex-col gap-10 lg:justify-center lg:items-center py-12 px-8 overflow-x-hidden bg-stone-900">
      <div className="flex flex-col gap-5 lg:w-96 sm:w-fit md:w-fit sm:p-6 md:p-6 lg:p-0  sm:px-20 md:px-20">
        <h3 className=" flex lg:text-2xl sm:text-4xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-500">
          About Us
        </h3>
        <h2 className="w-fit text-slate-100 font-extrabold lg:text-3xl sm:text-7xl md:text-7xl">
          The Indian Game Theory Society
        </h2>
        <p className="text-slate-300 font-thin lg:text-lg sm:text-2xl md:text-2xl text-justified">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          dolores maiores vel iste quae iusto sed at neque, facere doloribus
          tempora rerum ipsam fugiat commodi similique praesentium expedita
          iure, voluptatum quisquam vitae. Ab maxime dolore sint unde
          voluptatum, impedit atque?
        </p>
        <Link to="/about">
        <ScrollToTop />

          <button className="flex justify-center bg-gradient-to-r from-indigo-500 to-blue-400 text-white font-medium text-lg w-44 rounded-full h-10 !text-center  lg:text-lg sm:text-2xl md:text-2xl sm:w-56 md:w-56  lg:w-44">
            <div> Learn more </div>
          </button>
        </Link>
      </div>

      <div></div>

      <div className="absolute z-0 w-32 rounded-full shadow-2xl shadow-blue-300"></div>
      <div className="w-[800px] sm:ml-auto md:ml-auto lg:ml-1">
        <img
          className="drop-shadow-2xl shadow-zinc-400 rounded-xl img-home1"
          src={image}
          alt="about-img"
        />
      </div>
    </div>
  );
}
