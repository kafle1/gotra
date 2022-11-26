const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const gotraRouter = require("./routes/gotra.router.js");

const app = express();

app.use(helmet());
app.use(morgan("short"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use("/api", gotraRouter);

module.exports = app;
