const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Owner = sequelize.define('Owner', {
  nic: {}, 
  first_name: {},
  last_name: {},
  date_of_birth: {},
  address: {},
  contact_no: {},
}, {
  tableName: 'owners',
  timestamps: false,
}); 

module.exports = Owner;
