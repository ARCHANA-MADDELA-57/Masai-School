const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');
const rateLimiter = require('../middlewares/rateLimiter');

router.post('/add', rateLimiter, vehicleController.createVehicle);
router.patch('/assign-driver/:vehicleId', vehicleController.assignDriver);
router.get('/:vehicleId', vehicleController.getVehicle);

module.exports = router;