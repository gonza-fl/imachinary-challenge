const router = require('express').Router();
const {
  getMovies,
  getMovieById,
} = require('../controller/movie.controller');

router
  .get('/', getMovies)
  .get('/:id', getMovieById)

module.exports = router;
