import React, { useState, useEffect } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import fantasyBooks from "../assets/books/fantasy.json";

const AllTheBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(fantasyBooks);
  }, []);

  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {books.map((book) => (
          <Col key={book.asin}>
            <Card>
              <Card.Img variant="top" src={book.img} alt={book.title} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>Prezzo: €{book.price.toFixed(2)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
