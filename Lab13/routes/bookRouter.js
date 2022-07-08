const express = require('express');
const bookController = require('../controllers/bookController');
const router = express.Router();

router.get('/', bookController.getAll);

router.post('/', bookController.save);

router.put('/:bookId', bookController.edit);

router.delete('/:bookId', bookController.deleteById);

module.exports = router;