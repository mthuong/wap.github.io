// 1. Download the start-up project shoppingcart-server from class demo or you create everything from scrtach.
// 2. Run "npm install" under shoppingcart-server to get express package installed.
// 3. Implement the features below inside shoppingcart-server REST application
//   + CRUD(create, read, update, delete) books: make sure you use the proper URLs and HTTP Methods
//   + A book has properties: id, title, ISBN, publishedDate, author 
//   + make proper changes in js files to implement the step 1 features
//   + Use Postman to test your REST APIs

const express = require('express');
const productRouter = require('./routes/productRouter');
const bookRouter = require('./routes/bookRouter');
const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/books', bookRouter);

app.listen(3000);