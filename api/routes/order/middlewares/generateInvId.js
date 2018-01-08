const random = require("random-id");

module.exports = (req, res, next) => {
  req.invId = random(15,"0");
  return next();
}