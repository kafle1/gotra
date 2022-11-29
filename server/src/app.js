const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const cors = require("cors");

const gotraRouter = require("./routes/gotra.router.js");

const app = express();

app.use(rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    max: 10,
    standardHeaders: true,
    legacyHeaders: true,
    message: {
        status: 429,
        message: "Too many requests, please try again later."
    }
}))
app.use(cors())
app.use(helmet());
app.use(morgan("short"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use("/api", gotraRouter);

module.exports = app;
