const express = require('express');
const app = express();
const todoRoutes = require('./routes/todoRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());

app.get('/api/health', (req, res) => {
    res.status(200).json({
    message: "Todo API is running successfully!"
  });
});

app.use('/api/todos', todoRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;