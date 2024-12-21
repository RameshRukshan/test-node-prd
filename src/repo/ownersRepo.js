const pool = require('../config/database');

const OwnersRepository = {
  /**
   * Create  new owner
   * @param {Object} owner - The owner data
   * @returns {Promise}
   */
  create: async (owner) => {
    const query = `
      INSERT INTO owners (nic, first_name, last_name, date_of_birth, address, contact_no)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
    const values = [
      owner.nic,
      owner.first_name,
      owner.last_name,
      owner.date_of_birth,
      owner.address,
      owner.contact_no,
    ];
    const result = await pool.query(query, values);
    return result.rows[0];
  },

  /**
   * Get an owner by NIC
   * @param {string} nic - The NIC of the owner
   * @returns {Promise}
   */
  getByNIC: async (nic) => {
    const query = `
      SELECT * FROM owners
      WHERE nic = $1;
    `;
    const result = await pool.query(query, [nic]);
    return result.rows[0];
  },

  /**
   * Get all owners
   * @returns {Promise}
   */
  getAll: async () => {
    const query = `
      SELECT * FROM owners;
    `;
    const result = await pool.query(query);
    return result.rows;
  },

  /**
   * Update an owner by NIC
   * @param {string} nic - The NIC of the owner
   * @param {Object} updatedFields - The fields to update
   * @returns {Promise}
   */
  updateByNIC: async (nic, updatedFields) => {
    const setClause = Object.keys(updatedFields)
      .map((key, index) => `${key} = $${index + 2}`)
      .join(', ');

    const query = `
      UPDATE owners
      SET ${setClause}
      WHERE nic = $1
      RETURNING *;
    `;
    const values = [nic, ...Object.values(updatedFields)];
    const result = await pool.query(query, values);
    return result.rows[0];
  },

  /**
   * Delete an owner by NIC
   * @param {string} nic - The NIC of the owner
   * @returns {Promise}
   */
  deleteByNIC: async (nic) => {
    const query = `
      DELETE FROM owners
      WHERE nic = $1
      RETURNING *;
    `;
    const result = await pool.query(query, [nic]);
    return result.rows[0];
  },
};

module.exports = OwnersRepository;