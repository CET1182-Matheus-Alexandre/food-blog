const express = require('express');
const morgan = require('morgan');
const expressStaticGzip = require('express-static-gzip');
const path = require('path');

const app = express();

app.use(morgan('common'));

app.use('/', expressStaticGzip(path.join(__dirname, './../dist/')));

app.get('*.js', (req, res, next) => {
  req.url = `${req.url}.gz`;
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.use(express.static('src'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serving in port ${port}`);
});
