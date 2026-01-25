const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');


router.post('/add-order', orderController.addOrder);


router.get('/get-my-orders/:customerId', orderController.getMyOrders);


router.put('/update-order/:orderId', orderController.updateOrder);


router.delete('/delete-order/:orderId', orderController.deleteOrder);

module.exports = router