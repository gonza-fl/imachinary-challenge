const movieService = require('../services/movie.service');

const getMovies = async (_req, res) => {
  try {
    const people = await movieService.findAllMovies();
    if (!people.length) return res.status(404).json({ messge: 'Movies not found' });
    return res.json(people);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getMovieById = async (req, res) => {
  const { id } = req.params;
  try {
    const movieFound = await movieService.findMovieById(id);
    if (!movieFound || movieFound.deleted)
      return res.status(404).json({
        message: 'Movie not found',
        movieId: id,
      });
    return res.json(movieFound);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getMovies,
  getMovieById,
};
