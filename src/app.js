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

app.get(['/api/health', '/health'], (req, res) => {
    res.status(200).json({ message: "Todo API is running successfully!" });
});

app.use('/api/todos', todoRoutes);
app.use('/todos', todoRoutes);

app.use('/api/auth', authRoutes);
app.use('/auth', authRoutes);


app.use((req, res) => {
    res.status(404).json({
        error: "Route not found inside Express code",
        requestedUrl: req.url,
        originalUrl: req.originalUrl
    });
});

module.exports = app;