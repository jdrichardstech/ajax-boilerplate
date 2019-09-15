const express = require('express');
const app = express();
const logger = require('morgan');

const PORT = 3000;
const path = require('path');

//Define Middlewware
app.use(logger('dev'));
app.use(express.json());

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

// to deliver static code
app.use(express.static(path.join(__dirname + '/public/')));
app.use('/static', express.static('public'));

app.set('view engine', 'html');
// app.set('views', path.join(__dirname, 'views'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
