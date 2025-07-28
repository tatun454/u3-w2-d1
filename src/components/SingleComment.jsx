import React, { useState } from "react";

const SingleComment = ({ comment, onDelete }) => {
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    setDeleting(true);
    setError(null);
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODgyMWNjNGZlMzZkMDAwMTU5NzU4MTEiLCJpYXQiOjE3NTMzNTc1MDksImV4cCI6MTc1NDU2NzEwOX0.1zMaw87HUxfDfHX5WurW5VEksQk7q8n3_9d0OLx0md4",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete comment");
      }
      onDelete();
    } catch (err) {
      setError(err.message);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        marginBottom: "10px",
        padding: "10px",
      }}
    >
      <p>{comment.comment}</p>
      <p>Rating: {comment.rate}</p>
      <button onClick={handleDelete} disabled={deleting}>
        {deleting ? "Deleting..." : "Delete"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default SingleComment;
