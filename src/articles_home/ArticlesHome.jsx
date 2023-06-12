import React from "react";
import { Helmet } from "react-helmet";
import ArticleList from "./AtricleList";
import BlogHeading from "./BlogHeading";
import Topics from "./Topics";
import MetaDecorators from "../MetaDecorator";

const ArticlesHome = () => {
  return (
    <div className="flex flex-col mr-auto justify-center items-center pt-24 pb-48">
      <MetaDecorators
        title="IGTS-NSUT | Blogs"
        description="Welcome to the Blogs Home page of IGTS-NSUT! Explore our collection of insightful and thought-provoking blogs that delve into the world of game theory."
        url="https://igtsnsut.org/blogs"
        image="https://res.cloudinary.com/dksdmvwch/image/upload/v1685981881/IGTS_logo_white_nflxiq.jpg"
      />
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
