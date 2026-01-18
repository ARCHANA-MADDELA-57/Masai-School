const express = require('express');
const router = express.Router();
const fs = require('fs');

const dbPath = './db.json';
const getDB = () => JSON.parse(fs.readFileSync(dbPath));
const saveDB = (data) => fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

// 1. Create Order (Your existing code)
router.post('/', (req, res) => {
    const { productId, quantity } = req.body;
    const db = getDB();
    const product = db.products.find(p => p.id === productId);

    if (!product) return res.status(404).json({ error: "Product not found" });
    if (product.stock === 0 || quantity > product.stock) {
        return res.status(400).json({ error: "Insufficient stock" });
    }

    const newOrder = {
        id: db.orders.length + 1,
        productId,
        quantity,
        totalAmount: product.price * quantity, 
        status: "placed",
        createdAt: new Date().toISOString().split('T')[0]
    };

    product.stock -= quantity; 
    db.orders.push(newOrder);
    saveDB(db);
    res.status(201).json(newOrder);
});



// 3. Cancel Order (Soft Delete) (Your existing code)
router.delete('/:orderId', (req, res) => {
    const db = getDB();
    const order = db.orders.find(o => o.id === parseInt(req.params.orderId));
    const today = new Date().toISOString().split('T')[0];

    if (!order) return res.status(404).json({ error: "Order not found" });
    if (order.status === 'cancelled') return res.status(400).json({ error: "Already cancelled" });
    if (order.createdAt !== today) return res.status(400).json({ error: "Cancellation allowed only on same day" });

    const product = db.products.find(p => p.id === order.productId);
    if (product) product.stock += order.quantity; // Revert stock
    
    order.status = 'cancelled';
    saveDB(db);
    res.status(200).json({ message: "Order cancelled" });
});

router.get('/', (req, res) => {
    const db = getDB();
    res.status(200).json(db.orders);
});

// Add the Change Order Status route (Mandatory)
router.patch('/change-status/:orderId', (req, res) => {
    const { status } = req.body;
    const db = getDB();
    const order = db.orders.find(o => o.id === parseInt(req.params.orderId));

    if (!order) return res.status(404).json({ error: "Order not found" });

    // Rules: Valid Flow is placed -> shipped -> delivered
    const validFlow = { "placed": "shipped", "shipped": "delivered" };
    if (validFlow[order.status] !== status) {
        return res.status(400).json({ error: "Cannot skip status" });
    }

    order.status = status;
    saveDB(db);
    res.status(200).json(order);
});


module.exports = router;