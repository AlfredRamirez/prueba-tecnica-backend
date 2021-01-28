const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));

module.exports = app;