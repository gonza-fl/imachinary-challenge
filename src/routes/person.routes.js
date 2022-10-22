const router = require('express').Router();
const {
  getPeople,
  getPersonById,
} = require('../controller/person.controller');

router
  .get('/', getPeople)
  .get('/:id', getPersonById);

module.exports = router;
