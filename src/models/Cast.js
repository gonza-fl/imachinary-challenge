const { INTEGER } = require('sequelize');
const sequelize = require('../database');

const Cast = sequelize.define('casts', {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  roleId: {
    type: INTEGER,
  },
  personId: {
    type: INTEGER,
    primaryKey: true,
  },
  movieId: {
    type: INTEGER,
    primaryKey: true,
  },
});

module.exports = Cast;
