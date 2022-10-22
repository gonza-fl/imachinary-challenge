const personService = require('../services/person.service');

const getPeople = async (_req, res) => {
  try {
    const people = await personService.findAllPersons();
    if (!people.length)
      return res.status(404).json({ messge: 'People not found' });
    return res.json(people);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getPersonById = async (req, res) => {
  const { id } = req.params;
  try {
    const personFound = await personService.findPersonById(id);
    if (!personFound || personFound.deleted)
      return res.status(404).json({
        message: 'Person not found',
        personId: id,
      });
    return res.json(personFound);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getPeople,
  getPersonById,
};
