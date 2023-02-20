import React from "react";
import ImageGrid from "./ImageGrid";
import "./Stile.css";
const Stile = () => {
  return (
    <>
      <div
        className="mt-20"
        // style={{ height: "50vh" }}
      >
        <h1 class="text-4xl leading-none tracking-tight text-slate-800 md:text-5xl lg:text-6xl  text-center">
          What is <b>Game Theory?</b>
        </h1>{" "}
        <p className="mt-10 mb-10 text-lg font-normal text-slate-800 lg:text-xl sm:px-16 xl:px-48 text-center">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content
        </p>
        <div className="ml-4 mr-4 rounded-xl bg-slate-900 shadow-xl">
          <ImageGrid />
        </div>
        <p
          className="mt-10 mb-10 text-lg font-normal text-slate-800 lg:text-xl sm:px-16 xl:px-48 text-center"
          style={{ height: "100%" }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          odio quam facilis, vel totam aliquam numquam expedita. Itaque
          necessitatibus fugit eos, cupiditate aliquam excepturi dicta sunt
          assumenda quos et voluptatem.
        </p>
      </div>
    </>
  );
};

export default Stile;
