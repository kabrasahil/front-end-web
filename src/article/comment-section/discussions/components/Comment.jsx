// import React from "react";
// import "./index.css";
import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
// import { faCircleUp } from "@fontawesome/free-solid-svg-icons";
// import { faCircleDown } from "@fontawesome/free-solid-svg-icons";

const Comment = ({
  author,
  message,
  image,
  score,
  onDelete,
  onReply,
  isReply,
}) => {
  const [count, setCount] = useState(score);

  function decreaseCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function increaseCount() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div className={`comment-container ${isReply ? "comment-reply" : ""}`}>
      <div className="comment-header">
        {/* <img className="comment-image" src={image} alt="user" /> */}
        <div className="flex-container">
          <img className="comment-image" src={image} alt="user" />
          <h3 className="comment-author">{author}</h3>
        </div>
      </div>
      <p className="comment-message">{message}</p>

      <button className="comment-delete-btn" onClick={onDelete}>
        Delete
      </button>
      {!isReply && (
        <>
          <button className="comment-downvote" onClick={decreaseCount}>
            <i className="fa fa-circle-down"></i>
          </button>
          <span className="comment-score">{count}&nbsp;&nbsp;</span>
          <button className="comment-upvote" onClick={increaseCount}>
            <i className="fa fa-circle-up"></i>
          </button>
        </>
      )}

      {!isReply && (
        <button className="comment-reply-btn" onClick={onReply}>
          Reply
        </button>
      )}
    </div>
  );
};

export default Comment;
