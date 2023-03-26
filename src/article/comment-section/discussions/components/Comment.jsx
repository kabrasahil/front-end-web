import React, { useState } from "react";

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
  const [voted, setVoted] = useState(false);

  function decreaseCount() {
    if (!voted) {
      setCount((prevCount) => prevCount - 1);
      setVoted(true);
    }
  }

  function increaseCount() {
    if (!voted) {
      setCount((prevCount) => prevCount + 1);
      setVoted(true);
    }
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
        <i className="fa fa-trash"></i>
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
          <i className="fa fa-reply"></i>
        </button>
      )}
    </div>
  );
};

export default Comment;
