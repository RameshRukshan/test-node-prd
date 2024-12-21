const express = require('express');
const PassengerController = require('../control/passengerControl');

const router = express.Router();

// Passenger  routes
router.post('/', PassengerController.addPassenger);
router.get('/:nic', PassengerController.getPassengerByNIC);
router.get('/', PassengerController.getAllPassengers);
router.put('/:nic', PassengerController.updatePassenger);
router.delete('/:nic', PassengerController.deletePassenger);
router.post('/verify-password', PassengerController.verifyPassword); // New endpoint for password verification

module.exports = router;