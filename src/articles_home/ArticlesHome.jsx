import React from "react";
import ArticleList from "./AtricleList";
import BlogHeading from "./BlogHeading";
import Topics from "./Topics";

const ArticlesHome = () => {
  return (
    <div className="flex flex-col  mr-auto justify-center items-center pt-24 pb-48">
      <div className="w-full bg-gray-900">
        <BlogHeading />
      </div>
      <div className="flex  flex-row justify-center w-full">
        <div className="flex flex-1 pt-4 flex-grow ">
          <ArticleList />
          {/* <Topics /> */}
        </div>
        <div className="flex pt-4 flex-initial w-1/4 mt-20 pr-20 relative lg:block md:hidden sm:hidden">
          <div className="sticky top-40 h-fit">
            <Topics />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesHome;
