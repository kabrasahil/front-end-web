import React, { useEffect, useState } from "react";
import CommentList from "./components/CommentList";
import CommentForm from "./components/CommentForm";
import "./index.css";
import { SERVER_URL } from "../../../config";
import { useParams } from "react-router-dom";
// import image from my-app\src\profileIcon_mgukerzbivna1.jpg
// import samyak from "./profileIcon_mgukerzbivna1.jpg";

function Discussions() {
  const blog_id = useParams().id;
  const fetchComments = async () => {
    const token = localStorage.getItem("jwt");
    let response = {};
    if (token) {
      response = await fetch(`${SERVER_URL}/api/blog/${blog_id}/comments`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
    } else {
      response = await fetch(`${SERVER_URL}/api/blog/${blog_id}/comments`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        setComments(data.comments);
      }
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

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
