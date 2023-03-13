import React, { useState, useContext } from "react";
// import { UserContext } from "../Discussions";
import Moment from "react-moment";
import { PlusIcon, MinusIcon, CrudIcons } from "./Icons";
import CommentForm from "./CommentForm";
import Reply from "./Reply";

const Comment = ({
  comment,
  commentArrIndex,
  replyArrIndex,
  updateScore,
  addComment,
  deleteComment,
  editComment,
  // replies,
}) => {
  const { user, content, createdAt, score, replies, id } = comment;
  const currUser = "";
  const [replyForm, setReplyForm] = useState(false);
  const [updateForm, setUpdateForm] = useState({ isOpen: false, content });

  const onChange = (value) => setUpdateForm({ ...updateForm, content: value });

  const onSubmit = (e) => {
    // e.preventDefault();
    // editComment(updateForm.content, commentArrIndex, replyArrIndex);
    // setUpdateForm({ ...updateForm, isOpen: false });
  };

  return (
    <>
      // comment fine // replies array // reply button
      <div>

        // reply comment form

        {replies.map((e) => {
          <Reply />;
        })}
      </div>
    </>
  );
};

export default Comment;
