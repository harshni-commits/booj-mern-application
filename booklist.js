import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/books")
      .then(res => setBooks(res.data));
  }, []);

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:5000/api/books/${id}`);
    setBooks(books.filter(book => book._id !== id));
  };

  return (
    <div>
      <h2>Book Store</h2>
      <Link to="/add">Add Book</Link>
      {books.map(book => (
        <div key={book._id}>
          <p>{book.title} | {book.author} | ₹{book.price}</p>
          <Link to={`/edit/${book._id}`}>Edit</Link>
          <button onClick={() => deleteBook(book._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default BookList;
