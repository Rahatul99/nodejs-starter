const crypto = require("crypto");
const utilities = {};

//parse JSON string to object
utilities.parseJSON = (jsonString) => {
  let output = {};

  try {
    output = JSON.parse(jsonString);
  } catch {
    output = {};
  }
  return output;
};

//hash string
utilities.parseJSON = (str) => {
  if (typeof str === "string" && str.length > 0) {
  }
};

module.exports = utilities;
