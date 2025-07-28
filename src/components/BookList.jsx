import React, { useState } from "react";
import SingleBook from "./SingleBook";

const BookList = ({ books }) => {
  const [search, setSearch] = useState("");
  const [selectedBookAsin, setSelectedBookAsin] = useState(null);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (asin) => {
    setSelectedBookAsin((prev) => (prev === asin ? null : asin));
  };

  return (
    <div
      className="container-fluid my-3"
      style={{
        overflowX: "hidden",
        width: "100%",
        minWidth: "100vw",
        minHeight: "100vh",
      }}
    >
      <div className="mb-3">
        <input
          type="text"
          placeholder="Search books by title..."
          className="form-control"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="d-flex flex-wrap justify-content-center gap-3 w-100">
        {filteredBooks.map((book) => (
          <SingleBook
            key={book.asin}
            book={book}
            selected={selectedBookAsin === book.asin}
            onSelect={() => handleSelect(book.asin)}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;
