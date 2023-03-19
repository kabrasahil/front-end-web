import React from "react";
import "./ArticleCard.css";

const ArticleCard = ({ post }) => {
  return (
    <article
      key={post.id}
      className="lg:w-3/4 flex article-card flex-col items-start justify-between pb-8 px-12 lg:px-10 sm:py-6 lg:py-10 rounded-xl bg-stone-900 "
    >
      <div className="flex flex-row">
        <div className="">
          <div className="flex flex-row items-center">
            <img
              src={post.author.imageUrl}
              alt=""
              className="mt-8 mr-4 h-14 w-14 lg:h-8 lg:w-8 rounded-full bg-gray-50"
            />
            <p className="mt-8 font-sans font-bold  text-2xl lg:text-sm   text-gray-400">
              <a href={post.author.href}>
                <span className="relative inset-0" />
                {post.author.name}
              </a>
            </p>

            <div className="mt-8 font-sans font-bold text-2xl lg:text-sm   ml-16">
              <time dateTime={post.datetime} className="text-gray-400">
                {post.date}
              </time>
            </div>
          </div>
          <div className="mt-8 group relative">
            <h3 className="realtive lg:my-6 sm:my-16 font-sans text-4xl lg:text-3xl  font-extrabold leading-6 text-gray-200 ">
              <a href={post.href}>
                <span className="absolute inset-0" />
                {post.title}
              </a>
            </h3>
            <p className="mt-5 sm:text-3xl md:text-3xl lg:text-lg font-bold text-gray-400 line-clamp-3">
              {post.description}
            </p>
          </div>

          <div className="mt-10 ">
            <a
              href={post.category.href}
              className="relative text-lg lg:text-sm z-10 rounded-full bg-stone-600 py-1.5 px-3 font-medium text-gray-200 hover:bg-gray-100 z-40 relative"
            >
              {post.category.title}
            </a>
          </div>
        </div>

        {post.thumbnail ? (
          <div className="sm:hidden md:hidden lg:block ml-10 h-3/4 w-3/4 aspect-square mt-auto mb-auto ">
            <img
              src={post.thumbnail}
              alt=""
              className=" bg-gray-50 h-full w-full aspect-square object-cover rounded-2xl overflow-hidden aspect-square"
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </article>
  );
};

export default ArticleCard;
