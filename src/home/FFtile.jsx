import React from "react";
import HomeArticle from "./HomeArticles";

const FFtile = () => {
  return (
    <div>
      <div className=" mt-20 flex flex-col items-center justify-center">
        <h1 className="text-4xl leading-none tracking-tight text-slate-800 md:text-5xl lg:text-6xl  text-center font-extrabold">
          This Week Blogs
        </h1>
        <p className="mt-10 mb-10 text-lg font-normal text-slate-800 lg:text-xl sm:px-16 xl:px-48 text-center">
          If you're looking for random paragraphs, you've come to the right
          place. When a random word or a random sentence isn't quite enough
        </p>
      </div>
      <section className="ml-4 mr-4 rounded-xl bg-slate-900 shadow-xl">
        <HomeArticle />
      </section>
    </div>
  );
};

export default FFtile;
