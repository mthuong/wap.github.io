const Product = require('../models/product');
exports.save = (req, res, next) => {
  const addedProduct = (new Product(null, req.body.title, req.body.description, req.body.price)).save();
  res.json(addedProduct);
}

exports.getAll = (req, res, next) => {
  res.status(200).json(Product.getAll());
}

exports.deleteById = (req, res, next) => {
  res.status(200).json(Product.deleteById(req.params.productId));
}

exports.edit = (req, res, next) => {
  const editedProd = new Product(req.params.productId, req.body.title, req.body.description, req.body.price).edit();

  res.status(200).json(editedProd);
}