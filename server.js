const express  = require('express');
const path = require('path');
const app = express();
const stringMethod = require('./app/app.js');

app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'pug');


app.get('/', (req, res) => {
  res.render('index.pug', {stringMethod});
});

const port = process.env.PORT || 3002;

app.listen(port);