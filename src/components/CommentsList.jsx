import React from "react";
import SingleComment from "./SingleComment";

const CommentsList = ({ comments, onDelete }) => {
  return (
    <div>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((comment) => (
          <SingleComment
            key={comment._id}
            comment={comment}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

export default CommentsList;
