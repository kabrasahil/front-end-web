import React, { useState } from "react";
import Comment from "./Comment";
import ReplyForm from "./ReplyForm";
import image from "./logo192.png";

const CommentList = ({ comments, replies, onCommentDelete, onReplySubmit, onReplyDelete }) => {
  const [selectedCommentIndex, setSelectedCommentIndex] = useState(null);

  const handleCommentDelete = (index) => {
    onCommentDelete(index);
  };

  const handleReplySubmit = (newReply, parentIndex) => {
    onReplySubmit(newReply, parentIndex);
  };

  const handleReplyDelete = (replyIndex) => {
    onReplyDelete(replyIndex);
  };

  const samyak = (x) => {
    setSelectedCommentIndex(x);
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
            onReply={() => samyak(index)}
            commentId={`comment-${index}`}
            replyButtonId={`reply-${index}`}
            deleteButtonId={`delete-${index}`}
          />
          {replies
            .filter((reply) => reply.parentIndex === index)
            .map((reply, replyIndex) => (
              <div key={replyIndex} className="reply-container">
                <Comment
                  author="Current User"
                  // author={reply.author}
                  message={reply.message}
                  image={image}
                  onDelete={() => handleReplyDelete(replyIndex)}
                  commentId={`comment-reply-${replyIndex}`}
                  deleteButtonId={`delete-reply-${replyIndex}`}
                  isReply={true}
                />
              </div>
            ))}
          {selectedCommentIndex === index && (
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