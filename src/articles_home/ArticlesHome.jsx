import React from "react";
import ArticleList from "./articleList/AtricleList";
import RightSide from "./rightSide/RightSide";

const ArticlesHome = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="w-full bg-gray-900">Navbar content</div>

      {/* Main content */}
      <div className="flex flex-col flex-grow container mx-auto px-4">
        <div className="flex flex-col lg:flex-row w-full">
          {/* Left side component */}
          <div className="lg:w-2/3 container p-20">
            <ArticleList />
          </div>
          {/* Right side component */}
          <div className="hidden lg:block lg:w-1/3">
            <RightSide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesHome;
