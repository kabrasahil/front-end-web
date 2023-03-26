// import React from "react";
// import "./index.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUp } from '@fortawesome/free-solid-svg-icons'
import { faCircleDown } from '@fortawesome/free-solid-svg-icons'


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
    if(!voted){
      setCount((prevCount) => prevCount - 1);
      setVoted(true);
    }
  }

  function increaseCount() {
    if(!voted){
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
        Delete
      </button>
      {!isReply && (
        <>
        
      <button className="comment-downvote" onClick={decreaseCount}>
      <FontAwesomeIcon icon={faCircleDown} />
      </button>
      <span className="comment-score">{count}&nbsp;&nbsp;</span>
      <button className="comment-upvote" onClick={increaseCount}>
      <FontAwesomeIcon icon={faCircleUp} />
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
