let db = [];
let counter = 0;

module.exports = class Product {
  constructor(id, title, description, price) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = ++counter; // start with 1
    db.push(this);
    return this;
  }

  edit() {
    const index = db.findIndex((p) => p.id == this.id);
    db.splice(index, 1, this);
    return this;
  }

  static getAll() {
    return db;
  }

  static deleteById(prodId) {
    const index = db.findIndex((p) => p.id == prodId); // Because prodId can be string or number
    const deleteProd = db[index];
    db.splice(index, 1);
    return deleteProd;
  }
};
