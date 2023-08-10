import DOMPurify from "dompurify";
import React, { useEffect, useState } from "react";
import "./ArticleCard.css";
import Moment from "react-moment";
const ArticleCard = ({ post }) => {
  const postTitle = post.title.replaceAll(' ', '-');
  console.log("check",post);
  return (
    <article
      key={post.id}
      className="w-full lg:w-5/6 flex article-card flex-col items-start justify-between pb-8 px-12 lg:px-10 sm:py-6 lg:pt-2 lg:pb-14 rounded-xl bg-[#101010]"
    >
      <div className="flex flex-row w-full">
        <div className="">
          <div className="flex flex-row items-center">
            <img
              src={post.editor.pfp_url}
              alt=""
              className="mt-8 mr-4 h-14 w-14 lg:h-8 lg:w-8 rounded-full bg-gray-50"
            />
            <p className="mt-8 font-sans font-bold  text-2xl lg:text-sm   text-gray-400">
              <span className="relative inset-0" />
              {post.editor.name}
            </p>

            <div className="mt-8 font-sans font-bold text-2xl lg:text-sm   ml-16">
              <time dateTime={post.createdAt} className="text-gray-400">
                <Moment fromNow>{post.createdAt}</Moment>
              </time>
            </div>
          </div>
          <div className="mt-8 group relative">
            <h3 className="realtive lg:my-6 sm:my-16 font-sans text-4xl lg:text-3xl  font-extrabold leading-6 text-gray-200 ">
              <a href={"/blogs/" + post._id+ "/"+ postTitle}>
                <span className="absolute inset-0" />
                {post.title}
              </a>
            </h3>
            <p
              className="mt-5 sm:text-3xl md:text-3xl lg:text-lg font-bold text-gray-200 line-clamp-3"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.content.slice(0, 500)) + "...",
              }}
            ></p>
          </div>

          <div className="mt-10 flex flex-row gap-0 ">
            {post.subtopics.map((el) => {
              const subtopicName = el.name.replaceAll(' ', '-');
              return (
                <a
                  href={`/blogs/subtopic/${el.subtopic_id}/${subtopicName}`}
                  className="text-center flex justify-center text-lg lg:text-sm z-10 rounded-xl bg-stone-600 py-1.5 px-3 font-medium text-gray-200 hover:bg-gray-100 relative mx-2 hover:text-gray-700"
                >
                  {el.name}
                </a>
              );
            })}
          </div>
        </div>

        {post.thumbnail ? (
          <div className="sm:hidden md:hidden lg:block ml-10 h-3/4 w-2/4 aspect-square mt-auto">
            <img
              src={post.thumbnail}
              alt=""
              className=" bg-gray-50 h-full w-full object-cover rounded-2xl overflow-hidden aspect-square"
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
