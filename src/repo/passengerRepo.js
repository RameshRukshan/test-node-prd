const Passenger = require('../model/passengerModel');

const PassengerRepository = {
  // 
  createPassenger: async (data) => {
    return await Passenger.create(data);
  }, 

  // Get passenger by NIC
  getPassengerByNIC: async (nic) => {
    return await Passenger.findByPk(nic);
  },

  // Get all passengers
  getAllPassengers: async () => {
    return await Passenger.findAll();
  },

  // Update a passenger by NIC
  updatePassenger: async (nic, updates) => {
    const passenger = await Passenger.findByPk(nic);
    if (!passenger) throw new Error('Passenger not found');
    return await passenger.update(updates);
  },

  // Delete a passenger by NIC
  deletePassenger: async (nic) => {
    const passenger = await Passenger.findByPk(nic);
    if (!passenger) throw new Error('Passenger not found');
    await passenger.destroy();
    return true;
  },
};

module.exports = PassengerRepository;