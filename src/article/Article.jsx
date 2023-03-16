import React, { useState } from "react";
import ArticleContent from "./articleContent/ArticleContent";

const Article = () => {
  const [content, setContent] = useState("");
  
  return (
    <div>
      {/* article place the share button in it */}
      <ArticleContent content={content} />
      {/* comments */}
    </div>
  );
};

export default Article;
