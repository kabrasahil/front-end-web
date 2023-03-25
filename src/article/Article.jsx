import React, { useState } from "react";
import ArticleContent from "./articleContent/ArticleContent";
import Discussions from "./comment-section/discussions/Discussions";

const Article = () => {
  const [content, setContent] = useState("");
  
  return (
    <div>
      {/* article place the share button in it */}
      <ArticleContent content={content} />
      {/* comments */}
      <Discussions/>
    </div>
  );
};

export default Article;
