const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/bookstore")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const Book = require("./Book");

// Add Book
app.post("/api/books", async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.send(book);
});

// Get All Books
app.get("/api/books", async (req, res) => {
  const books = await Book.find();
  res.send(books);
});

// Update Book
app.put("/api/books/:id", async (req, res) => {
  const book = await Book.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.send(book);
});

// Delete Book
app.delete("/api/books/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.send({ message: "Book Deleted" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
