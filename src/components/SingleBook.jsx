import React from "react";
import Card from "react-bootstrap/Card";

const SingleBook = ({ book, selected, onSelect }) => {
  return (
    <Card
      style={{
        width: "18rem",
        border: selected ? "3px solid red" : undefined,
        cursor: "pointer",
      }}
      onClick={onSelect}
    >
      <Card.Img variant="top" src={book.img} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
