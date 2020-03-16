const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./auth/auth.routes');
const properties = require('./config/properties');
const DB = require('./config/db');

DB();

const express = require('express');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/api', router);
authRoutes(router);

router.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(router);

app.listen(properties.PORT, () => console.log(`Server running on port ${properties.PORT}`));