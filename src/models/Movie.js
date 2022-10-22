const { INTEGER, STRING, BOOLEAN, TEXT, DATE } = require('sequelize');
const sequelize = require('../database');

const Movie = sequelize.define('movies', {
  title: {
    type: STRING,
    allowNull: false,
  },
  sinopsis: {
    type: TEXT
  },
  genre: {
    type: STRING
  },
  rating: {
    type: INTEGER
  },
  duration: {
    type: INTEGER
  },
  releaseDate: {
    type: DATE,
  },
  deleted: {
    type: BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Movie;
