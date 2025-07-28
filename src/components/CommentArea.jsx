import React, { useState, useEffect } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = ({ bookAsin }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchComments = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${bookAsin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODgyMWNjNGZlMzZkMDAwMTU5NzU4MTEiLCJpYXQiOjE3NTMzNTc1MDksImV4cCI6MTc1NDU2NzEwOX0.1zMaw87HUxfDfHX5WurW5VEksQk7q8n3_9d0OLx0md4",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch comments");
      }
      const data = await response.json();
      setComments(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (bookAsin) {
      fetchComments();
    }
  }, [bookAsin]);

  const addComment = () => {
    fetchComments();
  };

  const deleteComment = () => {
    fetchComments();
  };

  if (!bookAsin) {
    return <div>Please select a book to see comments.</div>;
  }

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div>
      <CommentsList comments={comments} onDelete={deleteComment} />
      <AddComment bookAsin={bookAsin} onAdd={addComment} />
    </div>
  );
};

export default CommentArea;
