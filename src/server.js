const express = require('express');
const app = express();

const getRoutes = require('./routes');

getRoutes(app);

app.listen(4200);