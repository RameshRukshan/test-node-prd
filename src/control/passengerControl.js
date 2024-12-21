const PassengerService = require('../service/passengerService');

const PassengerController = {
  // Add  new passenger
  addPassenger: async (req, res) => {
    try {
      const passengerData = req.body;
      const newPassenger = await PassengerService.addPassenger(passengerData);
      res.status(201).json({ message: 'Passenger added successfully', data: newPassenger });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Get passenger by NIC
  getPassengerByNIC: async (req, res) => {
    try {
      const { nic } = req.params;
      const passenger = await PassengerService.getPassengerByNIC(nic);
      res.status(200).json({ message: 'Passenger retrieved successfully', data: passenger });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  // Get all passengers
  getAllPassengers: async (req, res) => {
    try {
      const passengers = await PassengerService.getAllPassengers();
      res.status(200).json({ message: 'Passengers retrieved successfully', data: passengers });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Update passenger by NIC
  updatePassenger: async (req, res) => {
    try {
      const { nic } = req.params;
      const updates = req.body;
      const updatedPassenger = await PassengerService.updatePassenger(nic, updates);
      res.status(200).json({ message: 'Passenger updated successfully', data: updatedPassenger });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Delete passenger by NIC
  deletePassenger: async (req, res) => {
    try {
      const { nic } = req.params;
      await PassengerService.deletePassenger(nic);
      res.status(200).json({ message: 'Passenger deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Verify password
  verifyPassword: async (req, res) => {
    try {
      const { nic, password } = req.body;
      const passenger = await PassengerService.verifyPassword(nic, password);
      res.status(200).json({ message: 'Password verified successfully', data: passenger });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  },
};

module.exports = PassengerController;
