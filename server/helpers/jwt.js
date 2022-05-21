const jwt = require("jsonwebtoken");

function sign(payload) {
  const secretKey = process.env.JWT_SECRET;
  return jwt.sign(payload, secretKey);
}

function verify(token) {
  const secretKey = process.env.JWT_SECRET;
  return jwt.verify(token, secretKey);
}

module.exports = { sign, verify };
