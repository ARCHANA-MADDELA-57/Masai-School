const express = require('express');
const authRoutes = require('./routes/auth.routes');
const todoRoutes = require('./routes/todo.routes');

const app = express();
app.use(express.json());

// Routes
app.use('/', authRoutes);
app.use('/todos', todoRoutes);

// Centralized Error Handling
app.use((err, req, res, next) => {
    res.status(500).json({ error: "Internal Server Error" });
});

module.exports = app;