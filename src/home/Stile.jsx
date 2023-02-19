import React from "react";
import ImageGrid from "./ImageGrid";
import "./Stile.css";
const Stile = () => {
  return (
    <>
      <div
        className=""
        // style={{ height: "50vh" }}
      >
        <div className="mt-4 ml-4 mr-4 p-4  pt-20 pb-30 rounded-xl bg-slate-900">
          <h1 class="text-4xl leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
            What is <b>Game Theory?</b>
          </h1>{" "}
          <p className="mt-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white text-center">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
          </p>
          <ImageGrid />
          <p
            className="mb-10 flex items-end text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white text-center"
            style={{ height: "100%" }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur odio quam facilis, vel totam aliquam numquam expedita.
            Itaque necessitatibus fugit eos, cupiditate aliquam excepturi dicta
            sunt assumenda quos et voluptatem.
          </p>
        </div>
      </div>
    </>
  );
};

export default Stile;
