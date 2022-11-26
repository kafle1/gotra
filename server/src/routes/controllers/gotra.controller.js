const Gotra = require("../../models/model.gotra");
const { toTitleCase } = require("../../utils");
const mongoose = require("mongoose");

// GET all gotras
const getAllGotras = async (req, res) => {
  try {
    const gotras = await Gotra.find({});

    return res.status(200).json(gotras);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//GET gotra by id
const getGotraById = async (req, res) => {
  const id = req.params.id;

  //Validate id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }
  try {
    const gotra = await Gotra.findById(id);
    if (!gotra) {
      return res.status(404).json({ error: "Gotra not found" });
    } else {
      return res.status(200).json(gotra);
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// GET gotra by gotra name
const getGotraByName = async (req, res) => {
  const name = toTitleCase(req.params.name);

  //Validate if name is empty
  if (!name) {
    return res
      .status(400)
      .json({ error: "Invalid name, Gotra name cannot be empty" });
  }

  //Validate for number and special characters
  if (!isNaN(name) || !/^[a-zA-Z]+$/.test(name)) {
    return res
      .status(400)
      .json({ error: "Invalid name, Gotra name cannot have numbers or special characters" });
  }

  try {
    const gotra = await Gotra.findOne({ gotra: name });
    if (!gotra) {
      return res.status(404).json({ error: "Gotra not found" });
    } else {
      return res.status(200).json(gotra);
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//GET gotra by caste
const getGotraByCaste = async (req, res) => {
  console.log("caste",req.params.caste);
  const caste = toTitleCase(req.params.caste);

  //Validate if name is empty
  if (!caste ) {
    return res
      .status(400)
      .json({ error: "Invalid caste, Caste name cannot be empty" });
  }

  //Validate for number and special characters
  if (!isNaN(caste) || !/^[a-zA-Z]+$/.test(caste)) {
    return res
      .status(400)
      .json({ error: "Invalid caste, Caste cannot have numbers or special characters" });
  }

  try {
    const gotra = await Gotra.findOne({castes: {$in : [caste]}});
    if (!gotra) {
      return res.status(404).json({ error: "Gotra not found" });
    } else {
      return res.status(200).json(gotra);
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllGotras,
  getGotraById,
  getGotraByName,
  getGotraByCaste,
};
