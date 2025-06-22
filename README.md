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

## ⚙️ How to Run Locally
Clone the Repo from GitHub
git clone https://github.com/morsalinamunmun/Assignment-3-Level-2.git
cd Assignment-3-Level-2

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


