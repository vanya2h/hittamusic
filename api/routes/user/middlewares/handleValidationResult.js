const { validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');

module.exports = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ 
      errors: errors.mapped() 
    })
  }

  req.matchedData = matchedData(req);
  return next();
}