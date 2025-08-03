import React from "react";

const books = [
  { id: 1, title: "React Explained", author: "Zac Gordon" },
  { id: 2, title: "Learning React", author: "Alex Banks" },
];

const BookDetails = () => {
  return (
    <div>
      <h3>Book List</h3>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} — <i>{book.author}</i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;