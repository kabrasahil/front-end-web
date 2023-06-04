import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import { SERVER_URL } from "../config";
import { Context } from "../context/Context";
import ArticleContent from "./articleContent/ArticleContent";
import Discussions from "./comment-section/discussions/Discussions";
import Moment from "react-moment";

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
        console.log("blogs not found");
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
  const allSpacesRemoved = heading.replaceAll(" ", "-");
  const sliceHeading = heading.slice(0,62);

  return (
    <div className="sm:pt-48 md:pt-48 lg:pt-24 min-h-screen">
      {/* article place the share button in it */}
      <Helmet>
        <title>IGTS NSUT | {heading}</title>
        <meta property="og:title" content={"IGTS-NSUT |" + { sliceHeading }} />
        <meta
          property="og:description"
          content="Welcome to the official website of the IGTS college society!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={
            "https://igtsnsut.org/blogs/" + blog_id + "/" + allSpacesRemoved
          }
        />
        <meta property="og:image" content={thumbnail} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
      </Helmet>
      <div className="mx-[8vw] lg:mx-[16vw] flex flex-row items-center justify-start">
        <div className="flex w-max items-center">
          <img
            src={editor ? editor.pfp_url : ""}
            alt=""
            className="mr-4 mt-8 aspect-square h-20 rounded-full bg-gray-50 lg:h-16"
          />
        </div>
        <div className="ml-5 flex flex-col gap-1 font-sans text-2xl font-bold lg:text-sm">
          <p className="mt-8 font-sans text-3xl font-bold text-gray-400 lg:text-xl">
            <a>
              <span className="relative inset-0" />
              {editor
                ? editor.name.first_name == undefined
                  ? editor.name.last_name
                  : editor.name.first_name + " " + editor.name.last_name
                : ""}
            </a>
          </p>
          <time
            dateTime={blog ? blog.createdAt : ""}
            className="font-light text-3xl lg:text-xl text-gray-400"
          >
            <Moment fromNow>{blog ? blog.createdAt : ""}</Moment>
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

      <div className="mx-20 flex justify-center items-center sm:mx-30 ">
        <div className="text-stone-300">Related:</div>
        {subtopics.map((el) => {
          const subtopicName = el.name.replaceAll(" ", "-");
          return (
            <a
              href={"/blogs/subtopic/" + el.subtopic_id + "/" + subtopicName}
              className="mx-4 relative z-10 rounded-full bg-stone-600 px-3 py-1.5 text-lg font-medium text-gray-200 hover:bg-gray-100 hover:text-gray-700 lg:text-sm"
            >
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
