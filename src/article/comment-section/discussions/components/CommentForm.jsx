import React, { useState } from "react";

const CommentForm = ({ handleSubmit }) => {
  const [message, setMessage] = useState("");

  return (
    <form
      className="comment-form flex items-center"
      id="comment-section-blog-comment-form"
    >
      <textarea
        className="comment-form-message outline-none border-none !bg-stone-800"
        placeholder="Type your comment here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button
        type="button"
        class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ml-2"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit(message);
          setMessage("");
        }}
      >
        Submit
      </button>{" "}
    </form>
  );
};

export default CommentForm;
