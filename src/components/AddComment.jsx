import React, { useState } from "react";

const AddComment = ({ bookAsin, onAdd }) => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState("1");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODgyMWNjNGZlMzZkMDAwMTU5NzU4MTEiLCJpYXQiOjE3NTMzNTc1MDksImV4cCI6MTc1NDU2NzEwOX0.1zMaw87HUxfDfHX5WurW5VEksQk7q8n3_9d0OLx0md4",
          },
          body: JSON.stringify({
            comment,
            rate,
            elementId: bookAsin,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to add comment");
      }
      setComment("");
      setRate("1");
      onAdd();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          rows={3}
          style={{ width: "100%" }}
        />
      </div>
      <div>
        <label htmlFor="rate">Rating:</label>
        <select
          id="rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          required
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button type="submit" disabled={loading} style={{ marginTop: "10px" }}>
        {loading ? "Adding..." : "Add Comment"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default AddComment;
