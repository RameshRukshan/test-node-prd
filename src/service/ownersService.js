const OwnersRepository = require('../repo/ownersRepo');

const OwnersService = {
  /**
   * Add a new owner
   * @param {Object} owner - The owner data
   * @returns {Promise}
   */
  addOwner: async (owner) => {
    // Perform any business logic or validation 
    if (!owner.nic || !owner.first_name || !owner.contact_no) {
      throw new Error('NIC, first name, and contact number are required');
    }

    // Check if the NIC already exists
    const existingOwner = await OwnersRepository.getByNIC(owner.nic);
    if (existingOwner) {
      throw new Error('Owner with this NIC already exists');
    }

    // Call the repository to create the owner
    return await OwnersRepository.create(owner);
  },

  /**
   * Get details of an owner by NIC
   * @param {string} nic - The NIC of the owner
   * @returns {Promise}
   */
  getOwnerByNIC: async (nic) => {
    // Retrieve owner from the repository
    const owner = await OwnersRepository.getByNIC(nic);
    if (!owner) {
      throw new Error('Owner not found');
    }
    return owner;
  },

  /**
   * Get a list of all owners
   * @returns {Promise}
   */
  getAllOwners: async () => {
    return await OwnersRepository.getAll();
  },

  /**
   * Update an owner by NIC
   * @param {string} nic - The NIC of the owner
   * @param {Object} updates - The fields to update
   * @returns {Promise}
   */
  updateOwner: async (nic, updates) => {
    // Validate NIC
    if (!nic) {
      throw new Error('NIC is required to update an owner');
    }

    // Check if owner exists
    const owner = await OwnersRepository.getByNIC(nic);
    if (!owner) {
      throw new Error('Owner not found');
    }

    // Call the repository to update the owner
    return await OwnersRepository.updateByNIC(nic, updates);
  },

  /**
   * Delete an owner by NIC
   * @param {string} nic - The NIC of the owner
   * @returns {Promise}
   */
  deleteOwner: async (nic) => {
    // Validate NIC
    if (!nic) {
      throw new Error('NIC is required to delete an owner');
    }

    // Check if owner exists
    const owner = await OwnersRepository.getByNIC(nic);
    if (!owner) {
      throw new Error('Owner not found');
    }

    // Call the repository to delete the owner
    return await OwnersRepository.deleteByNIC(nic);
  },
};

module.exports = OwnersService;
