# Assignment-3-Level-2

A RESTful API built with Express, TypeScript, Mongoose, and MongoDB for managing books and borrowing system in a library.
# 📖 Library Management API
A RESTful Library Management System built manually using **Express.js**, **TypeScript**, and **MongoDB (Mongoose)**.

## Objective

To develop a backend system for managing a digital library. The system allows for adding, updating, deleting, and borrowing books with proper schema validation, business logic enforcement, aggregation pipeline usage, and error handling.

---

**Features**
- Schema validation and error handling

- Borrow logic with quantity check

- Static/instance method for updating availability

- Aggregation for borrow summary

- Clean code and modular structure

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **TypeScript**
- **MongoDB** with **Mongoose**
- **Dotenv** for environment management
- **Cors** for security
- **Mongoose Middleware** (`pre`, `post`)
- **Custom Error Handling**

---

## 🚧 Project Setup (Manual)
 I created the project step-by-step with the following process:

1. Initialized the project using `npm init -y`
2. Installed required dependencies:
   ```bash
   npm install express mongoose dotenv cors
   npm install -D typescript ts-node-dev @types/express @types/node
Created and configured tsconfig.json for TypeScript.

Set up custom folder structure:

src/app.ts

src/server.ts

/src/app/controllers/book.controller.ts

/src/app/controllers/borrow.controller.ts

/src/app/models/book.models.ts

/src/app/models/borrow.models.ts

/src/app/routes/book.route.ts

/src/app/routes/borrow.route.ts

/src/middlewares

/src/config

/src/utils

Connected to MongoDB using Mongoose.

Implemented all API endpoints and business logic.

Used Mongoose Schema validation, static/instance methods, and aggregation.

📁 Folder Structure

src/
└── app/
├── config/ # Database connection
├── controllers/ # Book & Borrow controllers
├── middlewares/ # Future middleware logic
├── models/ # Mongoose schemas
├── routes/ # API routes
└── utils/ # Utility functions
├── app.ts # App initialization
└── server.ts # Entry point
├── .env
├── tsconfig.json
└── package.json

## ⚙️ How to Run Locally
Clone the Repo (if from GitHub)

git clone <your_repo_link>
cd library-management-api

**Install Dependencies**
npm install

**Create a .env File**
PORT=5000
MONGODB_URI=mongodb+srv://booksUserDB:06Zdve5SrJxHQhIj@cluster0.ddlqajr.mongodb.net/libraryDB?retryWrites=true&w=majority&appName=Cluster0

npm run dev

## Api Details
Create Book
POST /api/books
```ts
{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "description": "An overview of cosmology and black holes.",
  "copies": 5
}
```
Response:
```ts
{
  "success": true,
  "message": "Book created successfully",
  "data": { ... }
}

 Borrow Book
POST /api/borrow

{
  "book": "64ab3f9e2a4b5c6d7e8f9012",
  "quantity": 2,
  "dueDate": "2025-07-18T00:00:00.000Z"
}

 Aggregation Summary Example
GET /api/borrow

{
  "success": true,
  "message": "Borrowed books summary retrieved successfully",
  "data": [
    {
      "book": {
        "title": "The Theory of Everything",
        "isbn": "9780553380163"
      },
      "totalQuantity": 5
    }
  ]
}
Error Response Format

{
  "message": "Validation failed",
  "success": false,
  "error": { ... }
}


