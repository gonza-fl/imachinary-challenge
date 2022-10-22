const { STRING } = require('sequelize');
const sequelize = require('../database');

const Role = sequelize.define('roles', {
  roleName: {
    type: STRING,
    allowNull: false,
  }
});

module.exports = Role;
