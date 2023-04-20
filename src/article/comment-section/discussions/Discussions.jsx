import React, { useContext, useEffect, useState } from "react";
import CommentList from "./components/CommentList";
import CommentForm from "./components/CommentForm";
import "./index.css";
import { SERVER_URL } from "../../../config";
import { useParams } from "react-router-dom";
import { Context } from "../../../context/Context";
// import image from my-app\src\profileIcon_mgukerzbivna1.jpg
// import samyak from "./profileIcon_mgukerzbivna1.jpg";

function Discussions() {
  const blog_id = useParams().id;

  const user = useContext(Context);

  const fetchComments = async () => {
    let response = {};
    const token = localStorage.getItem("jwt");
    console.log("i am here");
    response = await fetch(`${SERVER_URL}/api/blog/${blog_id}/comments`, {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        setComments(data.comments);
      }
    }
  };

  useEffect(() => {
    fetchComments();
  }, [user]);

  let [comments, setComments] = useState([]);

  const handleCommentSubmit = async (comment) => {
    console.log("sdaasfaasd");
    const token = localStorage.getItem("jwt");
    const response = await fetch(
      `${SERVER_URL}/api/comment/${blog_id}/addcomment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          content: comment,
        }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        fetchComments();
      }
    }

    setComments([...comments, comment]);
    // add code to add comment to backend and recall fetch comments
  };

  // fetch the comments from back-end save them in a state
  return (
    <div className="app-container" id="comment-section-blog">
      <CommentForm handleSubmit={handleCommentSubmit} />

      <CommentList
        comments={comments}
        setComments={setComments}
        fetchComments={fetchComments}
      />
    </div>
  );
}

export default Discussions;
