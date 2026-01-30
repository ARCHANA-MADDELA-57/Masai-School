require('dotenv').config();
const express = require('express');
const userRoutes = require('./src/routes/userRoutes');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Main User Routes
app.use('/api/users', userRoutes);

// 404 Handler for undefined routes
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong on the server!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});