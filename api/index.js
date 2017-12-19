require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const beat = require('./routes/beat');
//const order = require('./routes/order');

const app = express();
const prefix = '/api';
const connectionUrl = `mongodb://${config.db.user}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.name}`

const connectionSuccess = () => console.log("-> Соединение с базой данных установлено");
const connectionFail = err => { throw new Error(err); }

mongoose.Promise = Promise;

mongoose
  .connect(connectionUrl, {
    useMongoClient: true
  })
  .then(connectionSuccess)
  .catch(connectionFail);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(morgan('dev'));
app.use(cors());

app.use(`${prefix}/beat`, beat);
//app.use(`${prefix}/order`, order);

app.get('/', (request, response) => 
  response.send('Api is Working'));

const onStart = (isProduction, port) =>
  console.log(`-> API app started in ${isProduction ? "PRODUCTION" : "DEVELOPMENT"} mode on ${port}`)

app.listen(config.port, () => onStart(config.isProduction, config.port));
