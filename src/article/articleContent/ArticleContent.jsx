import DOMPurify from "dompurify";
import React from "react";

const ArticleContent = ({ content }) => {
  let doc = document.createElement("div");
  doc.innerHTML = content;

  return (
    <div
      className="prose prose-stone dark:prose-invert lg:prose-xl prose-img:rounded-xl prose-a:text-indigo-600 hover:prose-a:text-indigo-400"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(doc) }}
    ></div>
  );
};

export default ArticleContent;

// install tailwind plugin: npm install @tailwindcss/typography.
// Then add the plugin to your tailwind.config.js file: require('@tailwindcss/typography')
