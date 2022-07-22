const express = require("express");
const { getAllGotras, getGotraById, getGotraByName, getGotraByCaste } = require("./controllers/gotra.controller");

const gotraRouter = express.Router();


gotraRouter.get("/gotras", getAllGotras);
gotraRouter.get("/gotra/:name", getGotraByName);
gotraRouter.get("/gotra/id/:id", getGotraById);
gotraRouter.get("/gotra/caste/:caste", getGotraByCaste);

module.exports = gotraRouter;