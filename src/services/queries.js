const Query = {
  updatePerson: (id) => ({
    where: {
      id,
    },
  }),
  moviesIncludes: ({ Role, Person, Cast }) => ({
    include: [
      {
        model: Cast,
        include: [
          {
            model: Role,
            attributes: ['roleName'],
          },
          {
            model: Person,
          },
        ],
      },
    ],
  }),
  personIncludes: ({Cast, Movie, Role}) => ({
    include: {
      model: Cast,
      include: Movie,
      include: Role,
    },
  }),
};

module.exports = Query;
