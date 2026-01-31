const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');

// Ensure these functions actually exist in the controller file!
router.post('/create', tripController.createTrip);
router.get('/:tripId', tripController.getTrip); // Check line 6!
router.patch('/update/:tripId', tripController.updateTrip);
router.delete('/delete/:tripId', tripController.deleteTrip);
router.patch('/end/:tripId', tripController.endTrip);

module.exports = router;