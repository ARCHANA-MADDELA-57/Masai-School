const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');

router.post('/create', tripController.createTrip);
router.get('/:tripId', tripController.getTrip); 
router.patch('/update/:tripId', tripController.updateTrip);
router.delete('/delete/:tripId', tripController.deleteTrip);
router.patch('/end/:tripId', tripController.endTrip);

module.exports = router;