const bcrypt = require('bcrypt');
const PassengerRepository = require('../repo/passengerRepo');

const PassengerService = {
  // Add  new passenger
  addPassenger: async (data) => {
    if (!data.nic || !data.first_name || !data.contact_no || !data.email || !data.password) {
      throw new Error('Missing required fields');
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;

    return await PassengerRepository.createPassenger(data);
  },

  // Get passenger by NIC
  getPassengerByNIC: async (nic) => {
    const passenger = await PassengerRepository.getPassengerByNIC(nic);
    if (!passenger) throw new Error('Passenger not found');
    return passenger;
  },

  // Get all passengers
  getAllPassengers: async () => {
    return await PassengerRepository.getAllPassengers();
  },

  // Update a passenger by NIC
  updatePassenger: async (nic, updates) => {
    // If password is provided in updates, hash it
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    }

    return await PassengerRepository.updatePassenger(nic, updates);
  },

  // Delete a passenger by NIC
  deletePassenger: async (nic) => {
    return await PassengerRepository.deletePassenger(nic);
  },

  // Verify password (for authentication purposes)
  verifyPassword: async (nic, password) => {
    const passenger = await PassengerRepository.getPassengerByNIC(nic);
    if (!passenger) throw new Error('Passenger not found');

    const isMatch = await bcrypt.compare(password, passenger.password);
    if (!isMatch) throw new Error('Invalid password');
    return passenger;
  },
};

module.exports = PassengerService;