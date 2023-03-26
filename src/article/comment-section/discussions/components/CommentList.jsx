import React from "react";
import Comment from "./Comment";
import ReplyForm from "./ReplyForm";
import image from "./logo192.png";

const CommentList = ({ comments, replies, onCommentDelete, onReplySubmit, onReplyDelete }) => {
  const handleCommentDelete = (index) => {
    onCommentDelete(index);
  };

  const handleReplySubmit = (newReply, parentIndex) => {
    onReplySubmit(newReply, parentIndex);
  };

  const handleReplyDelete = (replyIndex) => {
    onReplyDelete(replyIndex);
  };

  return (
    <div className="comment-list">
      {comments.map((comment, index) => (
        <div key={index} className="comment-container">
          <Comment
            author={comment.author}
            message={comment.message}
            image={image}
            score={comment.score}
            onDelete={() => handleCommentDelete(index)}
            onReply={() => onReplySubmit(null, index)}
            commentId={`comment-${index}`}
            replyButtonId={`reply-${index}`}
            deleteButtonId={`delete-${index}`}
          />
          {replies
            .filter((reply) => reply.parentIndex === index)
            .map((reply, replyIndex) => (
              <div key={replyIndex} className="reply-container">
                <Comment
                  author={reply.author}
                  message={reply.message}
                    image={image}
                  onDelete={() => handleReplyDelete(replyIndex)}
                  commentId={`comment-reply-${replyIndex}`}
                  deleteButtonId={`delete-reply-${replyIndex}`}
                  isReply={true}
                />
              </div>
            ))}
          {replies &&
            replies.length > 0 &&
            replies[0].parentIndex === index && (
              <div className="reply-form-container">
                <ReplyForm
                  parentId={index}
                  onSubmit={(newReply) => handleReplySubmit(newReply, index)}
                  formId={`reply-form-${index}`}
                  textAreaId={`reply-textarea-${index}`}
                  submitButtonId={`reply-submit-${index}`}
                />
              </div>
            )}
        </div>
      ))}
    </div>
  );
};

export default CommentList;