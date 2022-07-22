const express = require('express');
const gotraRouter = require('./routes/gotra.router.js');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use('/api', gotraRouter);

module.exports = app;