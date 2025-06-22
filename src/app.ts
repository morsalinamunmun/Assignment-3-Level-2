
import express, { Request, Response } from 'express';
import cors from 'cors';
import bookRoutes from './app/routes/book.route';
import borrowRoutes from './app/routes/borrow.route';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/books', bookRoutes);
app.use('/api/borrow', borrowRoutes);

app.get('/', (req, res) => {
  res.send('Library Management API running');
});

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found',
    error: {
      path: req.originalUrl,
      method: req.method,
    },
  });
});

export default app;
