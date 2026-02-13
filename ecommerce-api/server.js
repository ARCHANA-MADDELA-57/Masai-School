const express = require('express');
const app = express();
const orderRoutes = require('./routes/orders.routes.js');
const analyticsRoutes = require('./routes/analytics.routes.js');

app.use(express.json());

// Routes
app.use('/orders', orderRoutes);
app.use('/analytics', analyticsRoutes);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});