const mongoose = require('mongoose');



const gotraSchema = new mongoose.Schema({
  id: String,
  gotra: String,
  gotraNepali: String,
  castes: [String],
});

const Gotra = mongoose.model("gotra", gotraSchema);

module.exports = Gotra;
