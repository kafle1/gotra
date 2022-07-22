const Gotra = require("../../models/model.gotra");
const { toTitleCase } = require("../../utils");

const getAllGotras = async (req, res) => {
  const gotras = await Gotra.find();

  res.status(200).json(gotras);
};

const getGotraById = async (req, res) => {
  const gotra = await Gotra.findOne({ id: req.params.id });
  res.status(200).json(gotra);
};

const getGotraByName = async (req, res) => {
  const name = toTitleCase(req.params.name);
  console.log(name);

  const gotra = await Gotra.findOne({ gotra: name });
  res.status(200).json(gotra);
};

const getGotraByCaste = async (req, res) => {
  const caste = toTitleCase(req.params.caste);

  const gotra = await Gotra.findOne({ castes: caste });

  res.status(200).json(gotra);
};

module.exports = {
  getAllGotras,
  getGotraById,
  getGotraByName,
  getGotraByCaste,
};
