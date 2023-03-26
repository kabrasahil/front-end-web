import { useState } from "react";
import parser from "html-react-parser";
import parse from "html-dom-parser";
import TipTap from "./Tiptap";
import DOMPurify from "dompurify";

function Editor() {
  const [desc, setDesc] = useState({ heading: "", thumbnail: "", content: "" });

  return (
    <div className="mt-16 flex flex-row h-full  min-h-[800px] w-full">
      <TipTap setDesc={setDesc} />
      <div className="flex justify-center gap-7 w-full h-full">
        <div
          className="!w-full m-10 sm:mx-0 rounded-xl bg-stone-900 shadow-[0_0_60px_20px_rgb(0,0,0,0.22)] p-10 pt-0 prose prose-stone dark:prose-invert lg:prose-xl prose-img:mx-auto prose-img:rounded-xl prose-a:text-indigo-600 hover:prose-a:text-indigo-400 editor-output"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(desc.heading + desc.content),
          }}
        ></div>
      </div>
    </div>
  );
}

export default Editor;
