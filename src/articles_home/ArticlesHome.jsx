import React from "react";
import { Helmet } from "react-helmet";
import ArticleList from "./AtricleList";
import BlogHeading from "./BlogHeading";
import Topics from "./Topics";

const ArticlesHome = () => {
  return (
    <div className="flex flex-col mr-auto justify-center items-center pt-24 pb-48">
      <Helmet>
        <title>IGTS NSUT | Blogs</title>
        <meta property="og:title" content="IGTS-NSUT" />
        <meta
          property="og:description"
          content="Welcome to the official website of the IGTS college society! We are a community of passionate individuals with a shared love for gaming, economics, and math."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:3000/blogs" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dafqvvk91/image/upload/v1685046439/igts-white-logo_u3osk8.png"
        />
      </Helmet>
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
