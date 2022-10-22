const { STRING, VIRTUAL, BOOLEAN, DATEONLY } = require('sequelize');
const sequelize = require('../database');
const Movie = require('./Movie');
const Cast = require('./Cast');
const Role = require('./Role');

const Person = sequelize.define('persons', {
  name: {
    type: STRING,
    allowNull: false,
  },
  lastName: {
    type: STRING,
    allowNull: false,
  },
  dateOfBirth: {
    type: DATEONLY,
  },
  dateOfDeath: {
    type: DATEONLY,
  },
  fullName: {
    type: VIRTUAL,
    get() {
      return `${this.name} ${this.lastName}`
    },
  },
  deleted: {
    type: BOOLEAN,
    defaultValue: false,
  },
});

Person.belongsToMany(Movie, { through: { model: Cast, unique: false } });
Movie.belongsToMany(Person, { through: { model: Cast, unique: false } });
Person.hasMany(Cast);
Cast.belongsTo(Person);
Movie.hasMany(Cast);
Cast.belongsTo(Movie);
Role.hasMany(Cast);
Cast.belongsTo(Role);

module.exports = Person;
