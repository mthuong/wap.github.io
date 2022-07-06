const express = require('express');
const path = require('path');
const { route } = require('./userRoutes');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'product.html'))
});

router.post('/',(req, res, next) => {
  console.log(req.body);
  res.redirect('/products');
})



module.exports = router;