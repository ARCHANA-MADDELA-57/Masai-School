const express = require('express');
const router = express.Router();
const fs = require('fs');

const dbPath = './db.json';
const getDB = () => JSON.parse(fs.readFileSync(dbPath));

// 1. All Orders with Count (Rule: Use map or forEach)
router.get('/allorders', (req, res) => {
    const { orders } = getDB();
    res.json({
        totalCount: orders.length,
        orders: orders.map(order => order)
    });
});

// 2. Cancelled Orders (Rule: Use filter)
router.get('/cancelled-orders', (req, res) => {
    const { orders } = getDB();
    const cancelled = orders.filter(o => o.status === 'cancelled');
    res.json({ count: cancelled.length, orders: cancelled });
});

// 3. Shipped Orders (Rule: Use filter)
router.get('/shipped', (req, res) => {
    const { orders } = getDB();
    const shipped = orders.filter(o => o.status === 'shipped');
    res.json({ count: shipped.length, orders: shipped });
});

// 4. Overall Revenue (Mandatory Formula & HOF)
router.get('/alltotalrevenue', (req, res) => {
    const { orders } = getDB();
    
    // Logic: Filter out cancelled, then use reduce
    const totalRevenue = orders
        .filter(o => o.status !== 'cancelled')
        .reduce((sum, o) => sum + o.totalAmount, 0);

    res.json({ totalRevenue });
});

module.exports = router;