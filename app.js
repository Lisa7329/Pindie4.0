const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { connectToDatabase } = require('./database');
const { cors } = require('./middlewares');
const { apiRouter, pagesRouter } = require('./routes');
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3005;

connectToDatabase();

app.use(
  cors,
  cookieParser(),
  bodyParser.json(),
  pagesRouter,
  apiRouter,
  express.static(path.join(__dirname, 'public'))
);

app.listen(PORT);