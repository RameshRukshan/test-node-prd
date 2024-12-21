const express = require('express');
const OwnersController = require('../control/ownersControl');

const router = express.Router();

// Owners routes
router.post('/', OwnersController.addOwner); // Add  new owner
router.get('/:nic', OwnersController.getOwnerByNIC); // Get owner by NIC
router.get('/', OwnersController.getAllOwners); // Get all owners
router.put('/:nic', OwnersController.updateOwner); // Update owner by NIC
router.delete('/:nic', OwnersController.deleteOwner); // Delete owner by NIC

module.exports = router;