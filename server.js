const express  = require('express');
const path = require('path');
const stringMethod = require('./app/app.js');
const app = express();


app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'pug');


app.get('/', (req, res) => {
  res.render('index.pug', {stringMethod});
});

const port = process.env.PORT || 3002;

app.listen(port);