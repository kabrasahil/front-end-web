import React, { useState } from "react";
import Comment from "./Comment";
import ReplyForm from "./ReplyForm";
import image from "./logo192.png";
import { SERVER_URL } from "../../../../config";

const CommentList = ({ comments, setComments, fetchComments, onReply }) => {
  const [selectedCommentIndex, setSelectedCommentIndex] = useState(null);

  const handleReplySubmit = async (comment_id, reply) => {
    const token = localStorage.getItem("jwt");
    const response = await fetch(
      `${SERVER_URL}/api/comment/${comment_id}/addreply`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ content: reply }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        fetchComments();
      }
    }
  };

  const samyak = (x) => {
    setSelectedCommentIndex(x);
  };

  return (
    <div className="comment-list">
      {comments ? (
        comments.map((comment, index) =>
          comment ? (
            <div key={index} className="comment-container">
              <Comment
                author={
                  comment.name
                    ? comment.name.first_name + " " + comment.name.last_name
                    : ""
                }
                message={comment.message}
                image={comment.pfp_url}
                score={comment.score}
                onReply={() => samyak(index)}
                isUserCommenter={comment.is_user_commenter}
                isUserVoted={comment.is_user_voted}
                userVote={comment.user_vote}
                comment_id={comment.id}
                fetchComments={fetchComments}
              />

              {comment.replies ? (
                comment.replies.map((reply, replyIndex) =>
                  reply ? (
                    <div key={replyIndex} className="reply-container">
                      <Comment
                        author={
                          reply
                            ? reply.name.first_name + " " + reply.name.last_name
                            : ""
                        }
                        message={reply.message}
                        comment_id={reply.id}
                        parent_id={comment.id}
                        image={reply.pfp_url}
                        commentId={`comment-reply-${replyIndex}`}
                        deleteButtonId={`delete-reply-${replyIndex}`}
                        isReply={true}
                        isUserCommenter={reply.is_user_commenter}
                        fetchComments={fetchComments}
                      />
                    </div>
                  ) : (
                    <></>
                  )
                )
              ) : (
                <></>
              )}
              {selectedCommentIndex === index && (
                <div className="reply-form-container">
                  <ReplyForm
                    parentId={index}
                    onSubmit={(reply) => handleReplySubmit(comment.id, reply)}
                    formId={`reply-form-${index}`}
                    textAreaId={`reply-textarea-${index}`}
                    submitButtonId={`reply-submit-${index}`}
                  />
                </div>
              )}
            </div>
          ) : (
            <></>
          )
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default CommentList;
