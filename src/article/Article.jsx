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
      } else navigate("/404");
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
    <div className="lg:pt-24 sm:pt-48 md:pt-48">
      {/* article place the share button in it */}

      <div className="flex flex-row items-center justify-start mx-96">
        <div className="flex items-center w-max">
          <img
            src={editor ? editor.pfp_url : ""}
            alt=""
            className="mt-8 mr-4 h-24 w-24 lg:h-16 lg:w-16 rounded-full bg-gray-50"
          />
          <p className="mt-8 font-sans font-bold  text-2xl lg:text-2xl lg:ml-2   text-gray-400">
            <a>
              <span className="relative inset-0" />
              {editor ? editor.name.first_name + editor.name.last_name : ""}
            </a>
          </p>
        </div>
        <div className="mt-8 font-sans font-bold text-2xl lg:text-sm   ml-16">
          <time dateTime={blog ? blog.createdAt : ""} className="text-gray-400">
            {blog ? blog.createdAt : ""}
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
      {/* comments */}
      <Discussions />
    </div>
  );
};

export default Article;
