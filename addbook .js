import React, { useState } from "react";
import axios from "axios";

function AddBook() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: ""
  });

  const addBook = async () => {
    await axios.post("http://localhost:5000/api/books", book);
    alert("Book Added");
  };

  return (
    <div>
      <h2>Add Book</h2>
      <input placeholder="Title"
        onChange={e => setBook({ ...book, title: e.target.value })} />
      <input placeholder="Author"
        onChange={e => setBook({ ...book, author: e.target.value })} />
      <input placeholder="Price"
        onChange={e => setBook({ ...book, price: e.target.value })} />
      <button onClick={addBook}>Add</button>
    </div>
  );
}

export default AddBook;
