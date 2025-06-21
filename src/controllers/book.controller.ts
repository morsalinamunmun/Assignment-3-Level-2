import { Request, Response } from 'express';
import Book from '../models/book.model';

export const createBook = async (req: Request, res: Response) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json({
      success: true,
      message: 'Book created successfully',
      data: book
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Validation failed',
      error
    });
  }
};

