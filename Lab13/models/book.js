const crypto = require('crypto');

let books = [];

module.exports = class Book {
  constructor(id, title, ISBN, publishedDate, author) {
    this.id = id;
    this.title = title;
    this.ISBN = ISBN;
    this.publishedDate = publishedDate;
    this.author = author;
  }

  save() {
    this.id = crypto.randomUUID();
    books.push(this);
    return this;
  }

  edit() {
    const index = books.findIndex((p) => p.id == this.id);
    books.splice(index, 1, this);
    return this;
  }

  static getAll() {
    return books;
  }

  static deleteById(bookId) {
    const index = books.findIndex((p) => p.id == bookId);
    const deleteBook = books[index];
    books.splice(index, 1);
    return deleteBook;
  }
};
