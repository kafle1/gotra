const express = require("express");
const { getAllGotras, getGotraById, getGotraByName, getGotraByCaste } = require("./controllers/gotra.controller");

const gotraRouter = express.Router();


gotraRouter.get("/gotras", getAllGotras);
gotraRouter.get("/gotra/:id", getGotraById);
gotraRouter.get("/gotra/name/:name", getGotraByName);
gotraRouter.get("/gotra/caste/:caste", getGotraByCaste);

module.exports = gotraRouter;