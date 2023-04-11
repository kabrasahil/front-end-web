import { useContext, useEffect, useState } from "react";
import parser from "html-react-parser";
import parse from "html-dom-parser";
import TipTap from "./Tiptap";
import DOMPurify from "dompurify";
import { useNavigate, useParams } from "react-router-dom";
import { SERVER_URL } from "../config";
import { UserContext } from "../App";

function Editor() {
  const [desc, setDesc] = useState({ heading: "", thumbnail: "", content: "" });

  // possible scenerios

  // 1. new article editor empty useParams

  // 2. old draft editor non empty useParams

  const blog_id = useParams().blog_id;
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (
      !user ||
      !user.role ||
      user.role !== "ADMIN" ||
      user.role !== "EDITOR"
    ) {
      navigate("/404");
    }
  }, [user]);

  const fetchDraft = async () => {
    const response = fetch(`${SERVER_URL}/api/blog/${blog_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      if (data.success === true) {
        setDesc({
          heading: data.title,
          thumbnail: data.thumbnail,
          content: data.content,
        });
      }
    }
  };

  useEffect(() => {
    if (blog_id) fetchDraft();
  }, []);


  // send requests to backend
  const onSave = async () => {};

  const onSubmit = async () => {};

  return (
    <div className="!h-max">
      <div className="mt-16 flex flex-row h-full  min-h-[800px] w-full">
        <TipTap setDesc={setDesc} desc={desc} />
        <div className="flex justify-center gap-7 w-full h-full">
          <div
            className="!w-full !h-full m-10 sm:mx-0  prose-h1:font-sans rounded-xl dark:bg-stone-900 shadow-[0_0_60px_20px_rgb(0,0,0,0.22)] p-10 pt-0 prose prose-stone prose-headings:!text-white dark:prose-invert lg:prose-xl prose-img:mx-auto prose-img:rounded-xl prose-a:text-indigo-600 hover:prose-a:text-indigo-400 editor-output"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                desc.heading + desc.thumbnail + desc.content
              ),
            }}
          ></div>
        </div>
      </div>
      <div className="m-3 flex items-center justify-center">
        <button
          type="button"
          class="text-white bg-gray-600 hover:bg-gray-700 px-10 py-2 rounded-xl font-extrabold m-4 w-1/3 text-center justify-center"
        >
          Save
        </button>
        <button
          type="button"
          class="text-white bg-green-600 hover:bg-green-700 px-10 py-2 rounded-xl font-extrabold m-4 w-1/3 text-center justify-center"
        >
          Submit
        </button>{" "}
      </div>
    </div>
  );
}

export default Editor;
