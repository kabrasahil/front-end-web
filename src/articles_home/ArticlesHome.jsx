import React from "react";
import ArticleList from "./AtricleList";

const ArticlesHome = () => {
  return (
    <div className="flex flex-col ml-auto mr-auto justify-center items-center pt-48 pb-48">
      {/* Navbar */}
      <ArticleList />
    </div>
  );
};

export default ArticlesHome;
