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
        <meta property="og:title" content="IGTS-NSUT | Blogs" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://https://igtsnsut.org/blogs" />
        <meta
          name="image"
          property="og:image"
          content="https://res.cloudinary.com/dksdmvwch/image/upload/v1685981881/IGTS_logo_white_nflxiq.jpg"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dafqvvk91/image/upload/v1685046439/igts-white-logo_u3osk8.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="igtsnsut.org" />
        <meta property="twitter:url" content="https://igtsnsut.org/blogs" />
        <meta name="twitter:title" content="IGTS-NSUT | Blogs" />
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
