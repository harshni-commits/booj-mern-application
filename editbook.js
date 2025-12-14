import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditBook() {
  const { id } = useParams();
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: ""
  });

  useEffect(() => {
    axios.get("http://localhost:5000/api/books")
      .then(res => {
        const found = res.data.find(b => b._id === id);
        setBook(found);
      });
  }, [id]);

  const updateBook = async () => {
    await axios.put(`http://localhost:5000/api/books/${id}`, book);
    alert("Book Updated");
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <input value={book.title}
        onChange={e => setBook({ ...book, title: e.target.value })} />
      <input value={book.author}
        onChange={e => setBook({ ...book, author: e.target.value })} />
      <input value={book.price}
        onChange={e => setBook({ ...book, price: e.target.value })} />
      <button onClick={updateBook}>Update</button>
    </div>
  );
}

export default EditBook;
