require('dotenv/config');
const express = require('express');
const Router = require('express');
const sequelize = require('../../database');
const cors = require('cors');
const morgan = require('morgan');
const seederUp = require('../../database/seeders/seeder');

const router = Router()
const app = express();

const { PORT, PREFIX_VERSION, DROP_TABLES } = process.env;
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.head('/status', (_req, res) => {
  res.status(200).end();
});

const basePathPerson = `${PREFIX_VERSION}/person`;
const basePathMovie = `${PREFIX_VERSION}/movie`;

router.use(basePathPerson, require('../../routes/person.routes'));
router.use(basePathMovie, require('../../routes/movie.routes'));

app.use('/api', router);

async function serverUp() {
    try {
      await sequelize.sync({ force: DROP_TABLES || false });
      seederUp();
      console.log('DB conected successfully');
      app.listen(PORT, () => {
        console.log(`########## Server listen on port ${PORT} ##########`)
      });
      } catch (error) {
      console.log('Server up error', error);
    }
};

module.exports = serverUp;
