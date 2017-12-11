require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const cors = require('cors');
const morgan = require('morgan');

mongoose
  .connect(`mongodb://${config.db.user}:${config.db.password}@${config.db.host}:${config.db.port}/${
  config.db.name
  }`)
  .then(
  () => {
    console.log('Коннект');
  },
  (err) => {
    throw new Error(err);
  },
);

const app = express();

const prefix = '/api';

app.use(bodyParser());
app.use(morgan(config.env));
app.use(cors());

app.get('/', (req, res) => res.send('Hello API!'));

const onStart = (isProduction, port) =>
  console.log(`-> API app started in ${isProduction ? "PRODUCTION" : "DEVELOPMENT"} mode on ${port}`)

app.listen(config.port, () => onStart(config.isProduction, config.port));
