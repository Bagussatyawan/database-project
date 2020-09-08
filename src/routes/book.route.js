const { Router } = require('express');
const router = Router();

const booksController = require('../controllers/book.controller');

// Create a new Book
router.post("/", booksController.create);
// Retrieve all Books
router.get("/", booksController.findAll);
// Retrieve a single Book with id
router.get("/:id", booksController.findOne);
// Update a Book with id
router.put("/:id", booksController.update);
// Delete a Book with id
router.delete("/:id", booksController.delete);
// Create a new Book
router.delete("/", booksController.deleteAll);

module.exports = router;


