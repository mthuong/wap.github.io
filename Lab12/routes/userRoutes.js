const express = require('express');
const path = require('path');
const options = {
  "caseSensitive": false,
  "strict": false
};
const router = express.Router(options);

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'users.html'));
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  res.redirect('/users');
});

router.get('/xyz123', () => {
  // Request waiting forever
});

module.exports = router;