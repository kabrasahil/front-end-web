import React, { useState } from "react";
import CommentList from "./components/CommentList";
import CommentForm from "./components/CommentForm";
import "./index.css";
// import image from my-app\src\profileIcon_mgukerzbivna1.jpg
// import samyak from "./profileIcon_mgukerzbivna1.jpg";

function Discussions() {
  let [comments] = useState([
    {
      author: "Alice",
      message:
        "Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
      image: "/static/media/profileIcon_mgukerzbivna1.2f2752a754e89bfac4ed.jpg", // add image property
      score: 0,
    },
    {
      author: "Bob",
      message:
        "The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.",
      image: "/static/media/logo.2f2752a754e89bfac4ed.svg", // add image property
      score: 0,
    },
    {
      author: "Charlie",
      message:
        "The article is very informative. I have been working as a UX designer for 3 years and I have never thought about the design strategy. I will definitely use the tips from the article in my future projects.",
      image: "static/media/profileIcon_mgukerzbivna1.jpg", // add image property
      score: 0,
    },
  ]);

  // const [replies, setReplies] = useState([]);
  // const handleCommentSubmit = (comment) => {
  //   setComments([...comments, comment]);
  // };

  let [replies] = useState([
    { parentIndex: 1, author: "Alice", message: "Thank you for your comment!" },
  ]);

  return (
    <div className="app-container">
      <CommentList
        comments={comments}
        replies={replies}
        // onCommentSubmit={handleCommentSubmit}
        // onReplySubmit={(reply, parentIndex) => {
        //   setReplies([...replies, { parentIndex, ...reply }]);
        // }}
      />
      <CommentForm
      // onCommentSubmit={handleCommentSubmit}
      />
    </div>
  );
}

export default Discussions;
