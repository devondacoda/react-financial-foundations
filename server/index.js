const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

if (module === require.main) {
  const PORT = 8080;
  app.listen(PORT, () => console.log('server listening on port', PORT));
}

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', require('./api'));

app.use('*', (req, res) =>
  res.sendFile(path.join(__dirname, '..', 'public/index.html')));

app.use('/', (err, req, res, next) =>
  res.status(err.status || 500).send(err.message || 'Internal server error'));

module.exports = app;
