const OwnersService = require('../service/ownersService');

const OwnersController = {
  /**
   * Add  new owner
   */
  addOwner: async (req, res) => {
    try {
      const ownerData = req.body;
      const newOwner = await OwnersService.addOwner(ownerData);
      res.status(201).json({ message: 'Owner added successfully', data: newOwner });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  /**
   * Get an owner by NIC
   */
  getOwnerByNIC: async (req, res) => {
    try {
      const { nic } = req.params;
      const owner = await OwnersService.getOwnerByNIC(nic);
      res.status(200).json({ message: 'Owner retrieved successfully', data: owner });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  /**
   * Get all owners
   */
  getAllOwners: async (req, res) => {
    try {
      const owners = await OwnersService.getAllOwners();
      res.status(200).json({ message: 'Owners retrieved successfully', data: owners });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  /**
   * Update an owner by NIC
   */
  updateOwner: async (req, res) => {
    try {
      const { nic } = req.params;
      const updates = req.body;
      const updatedOwner = await OwnersService.updateOwner(nic, updates);
      res.status(200).json({ message: 'Owner updated successfully', data: updatedOwner });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  /**
   * Delete an owner by NIC
   */
  deleteOwner: async (req, res) => {
    try {
      const { nic } = req.params;
      await OwnersService.deleteOwner(nic);
      res.status(200).json({ message: 'Owner deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = OwnersController;
