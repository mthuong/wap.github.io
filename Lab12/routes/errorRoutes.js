const express = require('express');
const path = require('path');
const router = express.Router();

router.use((req, res, next) => {
  throw Error('Error');
});

module.exports = router;