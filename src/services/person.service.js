const Cast = require('../models/Cast');
const Movie = require('../models/Movie');
const Person = require('../models/Person');
const Role = require('../models/Role');
const Query = require('./queries');

const modelsToInclude = { Cast, Person, Role };

const findAllPersons = () => Person.findAll(Query.personIncludes(modelsToInclude));
const findPersonById = async (id) => {
  const person = await Person.findByPk(id);
  const roles = await Role.findAll();
  const participations = await Promise.all(
    roles.map(async (role) => {
      const casts = await Cast.findAll({
        where: {
          personId: person.id,
          roleId: role.id
        },
        include: Movie,
      })
      return {
        [`moviesAs${role.roleName.charAt(0).toUpperCase()}${role.roleName.slice(1)}`]: casts
      }
    })
  );
  return {
    ...person.dataValues,
    participations
  }
};

module.exports = {
  findAllPersons,
  findPersonById,
};
