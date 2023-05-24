import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SERVER_URL } from "../config";
import { Context } from "../context/Context";
import ArticleContent from "./articleContent/ArticleContent";
import Discussions from "./comment-section/discussions/Discussions";

const Article = () => {
  const [heading, setHeading] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [content, setContent] = useState("");
  const [subtopics, setSubtopics] = useState([]);
  const [blog, setBlog] = useState();
  const user = useContext(Context);
  const blog_id = useParams().id;
  const navigate = useNavigate();
  const fetchBlog = async () => {
    const token = localStorage.getItem("jwt");

    const response = await fetch(`${SERVER_URL}/api/blog/${blog_id}`, {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      if (data.success) {
        setHeading(data.blog.title);
        setThumbnail(data.blog.thumbnail);
        setContent(data.blog.content);
        setBlog(data.blog);
        setLiked(data.liked);
        setSubtopics(data.blog.subtopics);
      } else {
        console.log("blogs not found")
        navigate("/404");
      }
    }
  };
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    fetchBlog();
  }, [user]);

  const [editor, setEditor] = useState();

  const fetchEditor = async () => {
    const response = await fetch(
      `${SERVER_URL}/api/editor/${blog.editor_user_id}`,
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
        setEditor(data);
        console.log("editor ", data);
      }
    }
  };

  useEffect(() => {
    if (blog) fetchEditor();
  }, [blog]);

  return (
    <div className="sm:pt-48 md:pt-48 lg:pt-24">
      {/* article place the share button in it */}

      <div className="mx-[16vw] flex flex-row items-center justify-start">
        <div className="flex w-max items-center">
          <img
            src={editor ? editor.pfp_url : ''}
            alt=""
            className="mr-4 mt-8 aspect-square h-10 rounded-full bg-gray-50 lg:h-16 lg:w-16"
          />
        </div>
        <div className="ml-5 flex flex-col gap-1 font-sans text-2xl font-bold lg:text-sm">
          <p className="mt-8 font-sans text-xl font-bold text-gray-400 lg:text-xl">
            <a>
              <span className="relative inset-0" />
              {editor ? editor.name.first_name + ' ' + editor.name.last_name : ''}
            </a>
          </p>
          <time dateTime={blog ? blog.createdAt : ''} className="font-light text-gray-400">
            {blog ? blog.createdAt : ''}
          </time>
        </div>
      </div>

      <ArticleContent
        content={content}
        heading={heading}
        thumbnail={thumbnail}
        liked={liked}
        likes={blog ? blog.likes : 0}
        fetchBlog={fetchBlog}
      />

      <div className="ml-20 flex sm:mx-0 ">
        {subtopics.map(el => {
          return (
            <a
              href={'/blogs/subtopic/' + el.subtopic_id}
              className=" relative z-10 rounded-full bg-stone-600 px-3 py-1.5 text-lg font-medium text-gray-200 hover:bg-gray-100 hover:text-gray-700 lg:text-sm">
              {el.name}
            </a>
          );
        })}
      </div>

      {/* comments */}
      <Discussions />
    </div>
  );
};

export default Article;