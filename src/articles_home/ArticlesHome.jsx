import React from "react";
import ArticleList from "./AtricleList";
import BlogHeading from "./BlogHeading";
import Topics from "./Topics";

const ArticlesHome = () => {
  return (
    <div className="flex flex-col ml-auto mr-auto justify-center items-center pt-24 pb-48">
      <div className="w-full bg-gray-900">
        <BlogHeading />
      </div>
      <div className="flex px-4 pt-4">
        <ArticleList />
        <Topics />
      </div>
    </div>
  );
};

export default ArticlesHome;
