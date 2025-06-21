import express from 'express';
import { createBook, getAllBooks, getBookById } from '../controllers/book.controller';

const router = express.Router();
router.post('/', createBook);
router.get('/', getAllBooks);
router.get('/:bookId', getBookById);

export default router;
