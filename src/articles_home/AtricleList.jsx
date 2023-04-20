import React, { useContext, useEffect, useState } from "react";
import { SERVER_URL } from "../config";
import { Context } from "../context/Context";
import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  const [pge_no, setPge_no] = useState(0);
  const [posts, setPosts] = useState([
    // More posts...
  ]);

  const user = useContext(Context);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        `${SERVER_URL}/api/blog/getallblogs/${pge_no}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setPosts([...posts, ...data.blogs]);
        }
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  useEffect(() => {
    fetchBlogs();
  }, [pge_no]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // Calculate the distance between the bottom of the page and the current scroll position
      const distanceToBottom =
        document.documentElement.offsetHeight -
        (window.innerHeight + window.scrollY);

      // Check if the user has reached the bottom of the page
      if (distanceToBottom <= 0) {
        setPge_no(pge_no + 1);
      }
    });
  }, []);

  return (
    <div className="w-full">
      <div className="md:mx-19 sm:mx-5">
        <div className=" mt-10 grid gap-y-14 justify-items-center">
          {posts.map((el) => {
            return <ArticleCard post={el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
