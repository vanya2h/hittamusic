const Order = require("../../../models/Order");

module.exports = (req, res, next) => Order
  .getOrder(req.parsedQuery)
  .then(order => {
    req.entry = order;
    return next();
  })
  .catch(err => res.status(500).send(err));
