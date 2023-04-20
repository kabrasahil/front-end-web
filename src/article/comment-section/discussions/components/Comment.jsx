import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { SERVER_URL } from "../../../../config";
const Comment = ({
  author,
  message,
  image,
  score,
  isReply,
  comment_id,
  parent_id,
  isUserCommenter,
  isUserVoted,
  userVote,
  onReply,
  fetchComments,
}) => {
  const blog_id = useParams().id;
  const downVote = async () => {
    const token = localStorage.getItem("jwt");
    const response = await fetch(
      `${SERVER_URL}/api/comment/${comment_id}/downvote`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        fetchComments();
      }
    }
  };

  const upVote = async () => {
    const token = localStorage.getItem("jwt");
    const response = await fetch(
      `${SERVER_URL}/api/comment/${comment_id}/upvote`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        console.log("here");
        fetchComments();
      }
    }
  };

  const onDeleteReply = async () => {
    const token = localStorage.getItem("jwt");
    const response = await fetch(
      `${SERVER_URL}/api/comment/${parent_id}/${comment_id}/deletereply`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        fetchComments();
      }
    }
  };

  const onDelete = async () => {
    const token = localStorage.getItem("jwt");
    const response = await fetch(
      `${SERVER_URL}/api/comment/${blog_id}/${comment_id}/deletecomment`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        fetchComments();
      }
    }
  };

  return (
    <div className={`comment-container ${isReply ? "comment-reply" : ""}`}>
      <div className="comment-header">
        <div className="flex-container">
          <img className="comment-image" src={image} alt="user" />
          <h3 className="comment-author">{author}</h3>
        </div>
      </div>
      <p className="comment-message">{message}</p>

      {isUserCommenter ? (
        <button
          className="comment-delete-btn mr-4"
          onClick={isReply ? onDeleteReply : onDelete}
        >
          <i className="fa fa-trash"></i>
        </button>
      ) : (
        <></>
      )}
      {!isReply && (
        <>
          <button className="mr-2" onClick={downVote}>
            <i
              className={`fa fa-circle-down  text-gray-600 ${
                isUserVoted && !userVote ? "!text-blue-500" : ""
              }`}
            ></i>
          </button>
          <span className="comment-score">{score}&nbsp;&nbsp;</span>
          <button className="" onClick={upVote}>
            <i
              className={` fa fa-circle-up text-gray-600 ${
                isUserVoted && userVote ? "!text-red-500" : ""
              }`}
            ></i>
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
