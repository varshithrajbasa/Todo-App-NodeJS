# Todo REST API

A beginner-friendly REST API built with **Node.js, Express.js, MongoDB, and Mongoose** to manage Todo tasks through CRUD operations.

## Features

- Create a new Todo
- Retrieve all Todos
- Retrieve a Todo by its MongoDB ID
- Update an existing Todo
- Delete a Todo
- Validate MongoDB ObjectIds
- Handle missing resources and errors
- Use environment variables for configuration

## Tech Stack

- **Node.js** — JavaScript runtime
- **Express.js** — Web framework for building REST APIs
- **MongoDB** — NoSQL database
- **Mongoose** — ODM for MongoDB
- **dotenv** — Environment variable management
- **Nodemon** — Automatic server restart during development

## Project Structure

```text
todo-backend/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── todoController.js
│   ├── models/
│   │   └── Todo.js
│   ├── routes/
│   │   └── todoRoutes.js
│   ├── app.js
│   └── server.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) or a [MongoDB Atlas](https://www.mongodb.com/atlas) account
- [Postman](https://www.postman.com/) or another API testing tool

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/varshithrajbasa/Todo-App-NodeJS.git
cd Todo-App-NodeJS
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/todo_app
```

Replace the MongoDB URI with your own connection string if you're using MongoDB Atlas.

### 4. Start the development server

```bash
npm run dev
```

To start the server normally:

```bash
npm start
```

Once the database connection succeeds, the API will be available at:

`http://localhost:3000`

## API Endpoints

Assuming the Todo router is mounted at `/api/todos`.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Check API status |
| POST | `/api/todos` | Create a Todo |
| GET | `/api/todos` | Retrieve all Todos |
| GET | `/api/todos/:id` | Retrieve a Todo by ID |
| PATCH | `/api/todos/:id` | Update a Todo |
| DELETE | `/api/todos/:id` | Delete a Todo |

### Create a Todo

**POST** `/api/todos`

Request body:

```json
{
  "title": "Learn Node.js",
  "completed": false
}
```

### Retrieve all Todos

**GET** `/api/todos`

Returns an array of Todo documents.

### Retrieve a Todo by ID

**GET** `/api/todos/:id`

Replace `:id` with the Todo's MongoDB ObjectId.

### Update a Todo

**PATCH** `/api/todos/:id`

Request body example:

```json
{
  "completed": true
}
```

### Delete a Todo

**DELETE** `/api/todos/:id`

Replace `:id` with the Todo's MongoDB ObjectId.

## Learning Objectives

This project was created to practise backend development fundamentals, including:

- Building RESTful APIs with Express.js
- Organizing code using routes, controllers, and models
- Connecting Node.js to MongoDB using Mongoose
- Implementing asynchronous database operations
- Handling HTTP status codes and API errors
- Validating request parameters

## Future Improvements

- Request-body validation
- Centralized error-handling middleware
- Pagination and filtering
- User authentication and authorization
- Automated API tests

