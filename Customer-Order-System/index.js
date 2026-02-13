require('dotenv').config();
const express = require('express');
const cors = require('cors');
const customerRoutes = require('./src/routes/customerRoutes');
const orderRoutes = require('./src/routes/orderRoutes');

const app = express();

app.use(cors());
app.use(express.json()); 


app.use('/api/customers', require('./src/routes/customerRoutes'));
app.use('/api/orders', require('./src/routes/orderRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});