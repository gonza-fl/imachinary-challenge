const Movie = require('../../models/Movie');
const Person = require('../../models/Person');
const PersonMovieRole = require('../../models/Cast');
const Role = require('../../models/Role');

const seederUp = async () => {
  await Role.bulkCreate([
    {
      roleName: 'director', 
    },
    {
      roleName: 'producer', 
    },
    {
      roleName: 'casting', 
    },
  ]);
  await Person.bulkCreate([
    {
      name: 'Tobey',
      lastName: 'Maguire',
      dateOfBirth: new Date('1975/06/27'),
      dateOfDeath: null,
    },
    {
      name: 'Kirsten',
      lastName: 'Dunst',
      dateOfBirth: new Date('1982/04/30'),
      dateOfDeath: null,
    },
    {
      name: 'Alice',
      lastName: 'Guy-Blaché',
      dateOfBirth: new Date('1873/07/01'),
      dateOfDeath: new Date('1968/03/24'),
    },
    {
      name: 'Thomas',
      lastName: 'Test person',
      dateOfBirth: new Date('1962/07/03'),
      dateOfDeath: null,
    },
    {
      name: 'George',
      lastName: 'Test person',
      dateOfBirth: new Date('1961/05/06'),
      dateOfDeath: null,
    },
  ]);
  await Movie.bulkCreate([
    {
      title: 'Falling Leaves'
    },
    {
      title: 'Spiderman'
    },
    {
      title: 'Jumanji'
    },
    {
      title: 'My-Test movie 1'
    },
    {
      title: 'My-Test movie 2'
    },
  ]);
  await PersonMovieRole.bulkCreate([
    {
      roleId: 3,
      personId: 1, // peter parker spiderman
      movieId: 2,
    },
    {
      roleId: 3,
      personId: 2, // mary jane spiderman
      movieId: 2,
    },
    {
      roleId: 1,
      personId: 2, //mery jane jumanji
      movieId: 3,
    },
    {
      roleId: 1,
      personId: 3, // 1ra dir de cine
      movieId: 1,
    },
    {
      roleId: 2,
      personId: 3, // 1ra dir de cine
      movieId: 1,
    },
    {
      roleId: 3,
      personId: 4, // test one casting in movie 4
      movieId: 4,
    },
    {
      roleId: 1,
      personId: 4, // test one dir in movie 5
      movieId: 5,
    },
    {
      roleId: 3,
      personId: 4, // test one casting in movie 5
      movieId: 5,
    },
    {
      roleId: 3,
      personId: 5, // test two casting in movie 4
      movieId: 4,
    },
    {
      roleId: 1,
      personId: 5, // test two dir
      movieId: 5,
    },
    {
      roleId: 2,
      personId: 5, // test two prod
      movieId: 4,
    },
  ])
}

module.exports = seederUp;
