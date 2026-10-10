const express = require('express');
const app = express();
const todoRoutes = require('./routes/todoRoutes');

app.use(express.json());

app.get('/api/health', (req, res) => {
    res.status(200).json({
    message: "Todo API is running successfully!"
  });
});

app.use('/api/todos', todoRoutes);

module.exports = app;