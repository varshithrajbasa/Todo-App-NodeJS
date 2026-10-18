const express = require('express');
const app = express();
const todoRoutes = require('./routes/todoRoutes');
const authRoutes = require('./routes/authRoutes');
const connectDB = require("./config/db");

app.use(express.json());

app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (error) {
        console.error("Database connection error in middleware:", error.message);
        res.status(500).json({ error: "Database connection failed" });
    }
});

app.get('/api/health', (req, res) => {
    res.status(200).json({
    message: "Todo API is running successfully!"
  });
});

app.use('/api/todos', todoRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;