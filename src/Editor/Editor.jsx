import { useContext, useEffect, useState } from "react";
import parser from "html-react-parser";
import parse from "html-dom-parser";
import TipTap from "./Tiptap";
import DOMPurify from "dompurify";
import { useNavigate, useParams } from "react-router-dom";
import { SERVER_URL } from "../config";
import DialogBox from "./DialogBox";
import { Context } from "../context/Context";

function Editor() {
  const [content, setContent] = useState("");
  const [heading, setHeading] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  // possible scenerios

  // 1. new article editor empty useParams

  // 2. old draft editor non empty useParams

  const blog_id = useParams().blog_id;
  const user = useContext(Context);

  const navigate = useNavigate();
  useEffect(() => {
    if (user && user.role) {
      if (user.role !== "ADMIN" && user.role !== "EDITOR") {
        navigate("/404");
      }
    }
  }, [user]);

  const [success, setSuccess] = useState();

  const fetchDraft = async () => {
    console.log("fetchDraft")
    const token = localStorage.getItem("jwt");
    const response = await fetch(`${SERVER_URL}/api/blog/${blog_id}/draft`, {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      if (data.success === true) {
        setContent(data._doc.content);
        setHeading(data._doc.title);
        setThumbnail(data._doc.thumbnail);
        setSubtopics(data._doc.subtopics);
        setSuccess(true);
      } else {
        navigate("/404");
      }
    }
  };

  useEffect(() => {
    if (blog_id) fetchDraft();

  }, []);

  const [saveDialogBox, setSaveDialogBox] = useState(false);
  const [submitDialogBox, setSubmitDialogBox] = useState(false);

  const handleSave = async () => {
    setSaveDialogBox(true);
  };

  const handleSubmit = async () => {
    setSubmitDialogBox(true);
  };

  // send requests to backend
  const onSave = async (flag) => {
    if (flag === false) {
      setSaveDialogBox(false);
    } else {
      const blogData = {
        subtopics,
        content,
        title: heading,
        thumbnail,
      };
      if (blog_id) blogData.blog_id = blog_id;
      const token = localStorage.getItem("jwt");
      const response = await fetch(`${SERVER_URL}/api/editor/save`, {
        method: "POST",
        headers: {
          Authorization: token, // include JWT in the request header
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          window.location.href = "/editor/" + data._doc._id;
        }
      }
    }
  };

  const onSubmit = async (flag) => {
    if (flag === false) {
      setSubmitDialogBox(false);
    } else {
      const blogData = {
        subtopics,
        content,
        title: heading,
        thumbnail,
      };
      if (blog_id) blogData.blog_id = blog_id;
      const token = localStorage.getItem("jwt");
      const response = await fetch(`${SERVER_URL}/api/editor/publish`, {
        method: "POST",
        headers: {
          Authorization: token, // include JWT in the request header
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          window.location.href = "/blogs/" + data._doc._id+"/" + data._doc.title;
        }
      }
    }
  };
  const [subtopics, setSubtopics] = useState([]);
  return (
    <div className="!h-max mt-32 lg:mt-10 ml-2">
      {saveDialogBox ? (
        <>
          {/* <div className="ml-20"> */}
          <DialogBox
            subtopics={subtopics}
            setSubtopics={setSubtopics}
            handleSubmit={onSave}
          />
          {/* </div> */}
        </>
      ) : (
        <></>
      )}
      {submitDialogBox ? (
        <>
          <DialogBox
            handleSubmit={onSubmit}
            subtopics={subtopics}
            setSubtopics={setSubtopics}
          />
        </>
      ) : (
        <></>
      )}

      <div className="mt-16 flex flex-row h-full  min-h-[800px] w-full !text-white">
        <TipTap
          setContent={setContent}
          content={content}
          heading={heading}
          setHeading={setHeading}
          thumbnail={thumbnail}
          setThumbnail={setThumbnail}
          success={success}
        />
        <div className="flex justify-center gap-7 w-full h-full">
          <div
            className="!w-full!h-full m-10  !text-white sm:mx-0  prose-h1:font-sans rounded-xl dark:bg-[#101010] shadow-[0_0_60px_20px_rgb(0,0,0,0.22)] p-10 pt-0 prose prose-stone prose-headings:!text-white dark:prose-invert lg:prose-xl prose-img:mx-auto prose-img:rounded-xl prose-a:text-indigo-600 hover:prose-a:text-indigo-400 editor-output"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                `<h1>${heading}</h1>` + `<img src="${thumbnail}" />` + content
              ),
            }}
          ></div>
        </div>
      </div>
      <div className="m-3 flex items-center justify-center">
        <button
          type="button"
          class="text-white bg-gray-600 hover:bg-gray-700 px-10 py-2 rounded-xl font-extrabold m-4 w-1/3 text-center justify-center"
          onClick={handleSave}
        >
          Save as Draft
        </button>
        {user?.role === "ADMIN" && user?.role !== "EDITOR" && (
          <button
            type="button"
            className="text-white bg-green-600 hover:bg-green-700 px-10 py-2 rounded-xl font-extrabold m-4 w-1/3 text-center justify-center"
            onClick={handleSubmit}
          >
            Publish Blog
          </button>
        )}
      </div>
    </div>
  );
}

export default Editor;