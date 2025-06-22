import { Request, Response } from 'express';
import Book from '../models/book.model';
import Borrow from '../models/borrow.model';

export const borrowBook = async (req: Request, res: Response) => {
  try {
    const { book: bookId, quantity, dueDate } = req.body;

    const book = await Book.findById(bookId);
    if (!book) throw new Error('Book not found');

    if (book.copies < quantity) throw new Error('Not enough copies available');

    book.copies -= quantity;
    book.available = book.copies > 0;
    await book.save();
    const borrow = await Borrow.create({ book: bookId, quantity, dueDate });

    res.status(201).json({
      success: true,
      message: 'Book borrowed successfully',
      data: borrow
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : 'An error occurred',
      error
    });
  }
};
