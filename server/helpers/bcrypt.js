const bcrypt = require("bcryptjs");

function hash(input) {
  return bcrypt.hashSync(input);
}

function compare(input, hashInput) {
  return bcrypt.compareSync(input, hashInput);
}

module.exports = { hash, compare };
