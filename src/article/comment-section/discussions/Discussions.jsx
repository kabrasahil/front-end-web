import { useEffect, useState, createContext } from "react";
import Comment from "./components/Comment";
import CommentForm from "./components/CommentForm";
import Modal from "./components/Modal";
import jsonData from "./data.json";


function Discussions() {
  //initialize localStorage
  if (!localStorage.getItem("commentSection")) {
    localStorage.setItem("commentSection", JSON.stringify(jsonData));
  }

  const [comments, setComments] = useState([
    {
      id: 1,
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: "2022-02-08T17:10:17.090Z",
      score: 12,
      user: {
        image: {
          png: "../assets/images/avatars/image-amyrobson.png",
          webp: "./assets/images/avatars/image-amyrobson.webp",
        },
        username: "amyrobson",
      },
      replies: [],
    },
    {
      id: 2,
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: "2022-05-09T17:10:17.090Z",
      score: 5,
      user: {
        image: {
          png: "../assets/images/avatars/image-maxblagun.png",
          webp: "./assets/images/avatars/image-maxblagun.webp",
        },
        username: "maxblagun",
      },
      replies: [
        {
          id: 3,
          content:
            "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          createdAt: "2022-05-10T17:10:17.090Z",
          score: 4,
          replyingTo: "maxblagun",
          user: {
            image: {
              png: "../assets/images/avatars/image-ramsesmiron.png",
              webp: "./assets/images/avatars/image-ramsesmiron.webp",
            },
            username: "ramsesmiron",
          },
        },
        {
          id: 4,
          content:
            "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          createdAt: "2022-05-13T17:10:17.090Z",
          score: 2,
          replyingTo: "ramsesmiron",
          user: {
            image: {
              png: "../assets/images/avatars/image-juliusomo.png",
              webp: "./assets/images/avatars/image-juliusomo.webp",
            },
            username: "juliusomo",
          },
        },
      ],
    },
  ]);
  

  useEffect(() => {
    localStorage.setItem("commentSection", JSON.stringify(state));
  }, [comments]);


  // instead of this make 4 seperate empty functions for add, delete upvote,downvote
  const updateScore = (id, commentArrIndex, operation) => {
    if (id === state.comments[commentArrIndex].id) {
      const newComments = state.comments;
      operation === "add"
        ? newComments[commentArrIndex].score++
        : newComments[commentArrIndex].score--;
      setState({
        ...state,
        comments: newComments,
      });
    } else {
      const newComments = state.comments;
      newComments[commentArrIndex].replies.map((reply) =>
        reply.id === id && operation === "add"
          ? reply.score++
          : reply.id === id && operation === "subtract"
          ? reply.score--
          : reply
      );
      setState({
        ...state,
        comments: newComments,
      });
    }
  };

 const addComment = async (postId, newComment) => {
  try {
    // Send a POST request to the backend API to add a new comment to the post
    const response = await axios.post(`/api/posts/${postId}/comments`, { content: newComment });

    // Return the data from the response (in this case, the newly added comment)
    return response.data;
  } catch (error) {
    // If there was an error, check if the response exists (i.e., there was an error from the server)
    if (error.response) {
      // If the response status is 404, it means the post was not found
      if (error.response.status === 404) {
        // Throw a new error with a specific message indicating that the post was not found
        throw new Error(`Failed to add comment: post ${postId} not found`);
      } else {
        // If the response status is not 404, throw a new error with the error message from the server
        throw new Error(`Failed to add comment: ${error.response.data.message}`);
      }
    } else {
      // If there was no response (i.e., a network error occurred), throw a new error with the error message
      throw new Error(`Failed to add comment: ${error.message}`);
    }
  }
};


 /**
 * Delete a comment on a post from the server
 * @param {string} postId - The ID of the post that the comment belongs to
 * @param {string} commentId - The ID of the comment to be deleted
 * @returns {Promise<object>} - A Promise that resolves to the deleted comment object
 * @throws {Error} - If there's an error while deleting the comment
 */
const deleteComment = async (postId, commentId) => {
  try {
    const response = await axios.delete(`/api/posts/${postId}/comments/${commentId}`);
    return response.data;
  } catch (error) {
    // Handle the error response from the server
    if (error.response) {
      // If the response status is 404, the comment or post is not found
      if (error.response.status === 404) {
        throw new Error(`Failed to delete comment: comment ${commentId} not found on post ${postId}`);
      } else {
        // Otherwise, throw an error with the message from the server response
        throw new Error(`Failed to delete comment: ${error.response.data.message}`);
      }
    } else {
      // If there's no response, it's likely a network or client-side error
      throw new Error(`Failed to delete comment: ${error.message}`);
    }
  }
};


const editComment = async (id, newContent) => {
  try {
    // Send a PUT request to the backend API to update the comment with the given ID
    const response = await axios.put(`/comments/${id}`, { content: newContent });

    // Get the updated comment from the response data
    const updatedComment = response.data;

    // Create a new array of comments with the updated comment
    const updatedComments = comments.map(comment => {
      if (comment.id === updatedComment.id) {
        return updatedComment;
      }
      return comment;
    });

    // Update the state with the new array of comments
    setComments(updatedComments);

    // Display a success toast notification
    toast.success('Comment updated successfully!');
  } catch (error) {
    console.error(error);

    // If the error is a 404 Not Found, display an error toast saying the comment was not found
    if (error.response && error.response.status === 404) {
      toast.error('Comment not found');
    } else {
      // Otherwise, display a generic error toast saying the update failed
      toast.error('Failed to update comment');
    }
  }
};


  return (
  <section className={`min-w-screen min-h-screen bg-lightGray py-8`}>
    <div className="mx-auto max-w-2xl">
      {comments &&
        comments.map((comment, index) => (
          <Comment
            key={comment.id}
            commentArrIndex={index}
            comment={comment}
            updateScore={updateScore}
            addComment={addComment}
            onDelete={deleteComment}
            editComment={editComment}
          />
        ))}
      <CommentForm addComment={addComment} />
    </div>
  </section>
);

}

export default Discussions;
