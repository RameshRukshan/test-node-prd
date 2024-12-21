const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Passenger = sequelize.define('Passenger', {
  nic: {
    type: DataTypes.STRING(14),
    allowNull: false,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(255),
  },
  address: {
    type: DataTypes.STRING(255),
  },
  contact_no: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'passenger',
  timestamps: false,
});
 
module.exports = Passenger;