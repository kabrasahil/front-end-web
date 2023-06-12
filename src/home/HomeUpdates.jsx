import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../config";

export default function HomeUpdates() {
  const [data, setData] = useState([]);

  const fetchHighlights = async () => {
    try {
      const response = await fetch(`${SERVER_URL}/api/home/highlights`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          // Assuming setData is defined elsewhere
          setData(data.highlights.slice(0, 5));
        }
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchHighlights();
  }, []);

  return (
    <div className="my-20">
      <h1 class="text-center mb-20 text-gray-500 mr-auto ml-auto lg:text-7xl sm:text-8xl md:text-8xl font-extrabold leading-none tracking-tight md:text-6xl lg:text-7xl">
        <span class="">Highlights</span>
      </h1>

      <div className=" grid lg:mx-80 md:mx-40 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 lg:gap-5   sm:gap-16 md:gap-16">
        {data.map(({ thumbnail, title, type, description, id }) => {
          const allSpacesRemoved = title.replaceAll(" ", "-");
          return (
            <a
              href={
                type === "blog"
                  ? "/blogs/" + id + "/" + allSpacesRemoved
                  : type === "event"
                  ? "/events/" + id + "/" + allSpacesRemoved
                  : ""
              }
              className="group relative block bg-black rounded-xl w-full aspect-square"
              style={{ boxShadow: "0 0px 40px -1px rgba(0, 0, 0, 0.6)" }}
            >
              <img
                alt="Developer"
                src={thumbnail}
                class="lg:absolute sm:relative md:relative  rounded-xl aspect-square overflow-hidden inset-0 h-full w-full  object-cover opacity-75 transition-opacity lg:opacity-50 lg:group-hover:blur-sm lg:group-hover:opacity-40"
              />

              <div class="lg:absolute lg:flex flex-col content-between p-4 sm:p-16 lg:p-8">
                <p class="lg:text-xl sm:text-2xl md:text-2xl font-extrabold uppercase tracking-widest text-pink-600">
                  {type}
                </p>

                <p class="lg:text-2xl font-bold text-white sm:text-4xl md:text-4xl">
                  {title}
                </p>

                <div class="mt-3">
                  <div class="translate-y-8 transform lg:opacity-0 transition-all lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                    <p
                      class="lg:text-base lg:h-[7rem] md:text-3xl sm:text-xl text-white overflow-hidden text-ellipsis"
                      dangerouslySetInnerHTML={{
                        __html: description.slice(0, 200) + "...",
                      }}
                    ></p>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
        <div className="w-full h-full text-center text-slate-100 flex flex-col gap-3 ">
          <button
            className="lg:p-0 w-full h-full bg-stone-800 shadow-md shadow-black hover:bg-stone-700 rounded-2xl items-center text-gray-300 lg:text-4xl sm:text-5xl md:text-5xl sm:py-24 flex justify-center"
            onClick={() => (window.location.href = "/blogs")}
          >
            Blogs
          </button>
          <button
            className="lg:p-0 w-full h-full bg-stone-800 shadow-md shadow-black hover:bg-stone-700 rounded-2xl text-gray-300 lg:text-4xl sm:text-5xl md:text-5xl sm:py-24 flex justify-center"
            onClick={() => (window.location.href = "/events")}
          >
            Events
          </button>
        </div>
      </div>
    </div>
  );
}
