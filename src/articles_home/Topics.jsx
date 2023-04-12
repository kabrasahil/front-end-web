import React from "react";
import "./ArticleCard.css";


function Topics() {
  return (
    //  make background color rgb(17 17 17)
    <div className="flex-auto bg-stone-900 flex-wrap h-fit topics rounded-lg">
      <h2 className="text-slate-200 text-xl font font-sans my-auto mx-auto px-3 py-2.5">
        Recommended Articles
      </h2>

      <div className="flex flex-wrap justify-between px-4 pb-2">
        <ul className="flex flex-wrap text-sm font-medium text-center text-white font-sans dark:text-gray-400 justify justify-normal">
          <li className="mr-2 py-2.5">
            <a
              href="#"
              className="relative text-lg lg:text-sm z-10 rounded-full bg-stone-600 py-1.5 px-3 font-medium text-gray-200 hover:bg-gray-100 z-40 relative mx-2 hover:text-gray-700"
            >
              Economics
            </a>
          </li>
          <li className="mr-2 py-2.5">
            <a
              href="#"
              className="relative text-lg lg:text-sm z-10 rounded-full bg-stone-600 py-1.5 px-3 font-medium text-gray-200 hover:bg-gray-100 z-40 relative mx-2 hover:text-gray-700"
            >
              Game Theory 101
            </a>
          </li>
          <li className="mr-2 py-2.5">
            <a
              href="#"
              className="relative text-lg lg:text-sm z-10 rounded-full bg-stone-600 py-1.5 px-3 font-medium text-gray-200 hover:bg-gray-100 z-40 relative mx-2 hover:text-gray-700"
            >
              Competitive Programming
            </a>
          </li>
          <li className="mr-2 py-2.5">
            <a
              href="#"
              className="relative text-lg lg:text-sm z-10 rounded-full bg-stone-600 py-1.5 px-3 font-medium text-gray-200 hover:bg-gray-100 z-40 relative mx-2 hover:text-gray-700"
            >
              Game Theory in Sports
            </a>
          </li>
          <li className="mr-2 py-2.5">
            <a
              href="#"
              className="relative text-lg lg:text-sm z-10 rounded-full bg-stone-600 py-1.5 px-3 font-medium text-gray-200 hover:bg-gray-100 z-40 relative mx-2 hover:text-gray-700"
            >
              Marketing
            </a>
          </li>
          <li className="mr-2 py-2.5">
            <a
              href="#"
              className="relative text-lg lg:text-sm z-10 rounded-full bg-stone-600 py-1.5 px-3 font-medium text-gray-200 hover:bg-gray-100 z-40 relative mx-2 hover:text-gray-700"
            >
              Stratagems
            </a>
          </li>
          <li className="mr-2 py-2.5">
            <a
              href="#"
              className="relative text-lg lg:text-sm z-10 rounded-full bg-stone-600 py-1.5 px-3 font-medium text-gray-200 hover:bg-gray-100 z-40 relative mx-2 hover:text-gray-700"
            >
              Conflicts
            </a>
          </li>
          <li className="mr-2 py-2.5">
            <a
              href="#"
              className="relative text-lg lg:text-sm z-10 rounded-full bg-stone-600 py-1.5 px-3 font-medium text-gray-200 hover:bg-gray-100 z-40 relative mx-2 hover:text-gray-700"
            >
              Mathematics
            </a>
          </li>
          <li className="mr-2 py-2.5">
            <a
              href="#"
              className="relative text-lg lg:text-sm z-10 rounded-full bg-stone-600 py-1.5 px-3 font-medium text-gray-200 hover:bg-gray-100 z-40 relative mx-2 hover:text-gray-700"
            >
              Psychology
            </a>
          </li>
          <li className="mr-2 py-2.5">
            <a
              href="#"
              className="relative text-lg lg:text-sm z-10 rounded-full bg-stone-600 py-1.5 px-3 font-medium text-gray-200 hover:bg-gray-100 z-40 relative mx-2 hover:text-gray-700"
            >
              Politics
            </a>
          </li>
          <li className="mr-2 py-2.5">
            <a
              href="#"
              className="relative text-lg lg:text-sm z-10 rounded-full bg-stone-600 py-1.5 px-3 font-medium text-gray-200 hover:bg-gray-100 z-40 relative mx-2 hover:text-gray-700"
            >
              History
            </a>
          </li>
          <li className="mr-2 py-2.5">
            {/* <a
              href="#"
              className="relative text-lg lg:text-sm z-10 rounded-full bg-stone-600 py-1.5 px-3 font-medium text-gray-200 hover:bg-gray-100 z-40 relative mx-2 hover:text-gray-700"
            >
                Philosophy
            </a> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Topics;
