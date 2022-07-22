const toTitleCase = (text) => {
  return text
    .replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
    .replace(/\s/g, "");
};

module.exports = {
  toTitleCase,
};
