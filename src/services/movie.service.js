const Cast = require('../models/Cast');
const Movie = require('../models/Movie');
const Person = require('../models/Person');
const Role = require('../models/Role');
const Query = require('./queries');

const modelsToInclude = { Cast, Person, Role };

const findAllMovies = () => Movie.findAll(Query.moviesIncludes(modelsToInclude))
const findMovieById = async (id) => {
  const movie = await Movie.findByPk(id);
  const roles = await Role.findAll();
  const participants = await Promise.all(
    roles.map(async (role) => {
      const casts = await Cast.findAll({
        where: {
          movieId: movie.id,
          roleId: role.id
        },
        include: Person,
      })
      return {
        [`${role.roleName.charAt(0).toUpperCase()}${role.roleName.slice(1)}`]: casts
      }
    })
  );
  return {
    ...movie.dataValues,
    participants
  }
};

module.exports = {
  findAllMovies,
  findMovieById,
};
