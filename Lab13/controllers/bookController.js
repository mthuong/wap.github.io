const Book = require('../models/book');

exports.save = (req, res, next) => {
  const { title, ISBN, publishedDate, author } = req.body;
  const book = new Book(null, title, ISBN, publishedDate, author).save();
  res.status(200).json(book);
}

exports.getAll = (req, res, next) => {
  res.status(200).json(Book.getAll());
}

exports.deleteById = (req, res, next) => {
  res.status(200).json(Book.deleteById(req.params.bookId));
}

exports.edit = (req, res, next) => {
  const { title, ISBN, publishedDate, author } = req.body;
  const editedBook = new Book(req.params.bookId, title, ISBN, publishedDate, author).edit();

  res.status(200).json(editedBook);
}