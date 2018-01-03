const express = require("express");
const Order = require("../../models/Order");
const createValidation = require("./middlewares/createValidation");
const updateValidation = require("./middlewares/updateValidation");
const handleValidationResults = require("./middlewares/handleValidationResults");
const generatePaymentUrl = require("./middlewares/generatePaymentUrl");
const parseQuery = require("./middlewares/parseQuery");
const parseParams = require("./middlewares/parseParams");
const auth = require("../../middlewares/auth");
const helper = require("../../utils/configureHelper");
const robokassaStatus = require("./middlewares/robokassaStatus");
const router = express.Router();

router.get("/entry/close", [
  parseQuery,
], (req, res) => {
  helper.handleResultUrlRequest(req, res, (values, userData) => {
    return res.json(values)
  });
})

router.get("/entries", [
  parseParams,
  parseQuery
], ({ parsedParams, parsedQuery }, res) => Order
  .getOrders(parsedQuery, parsedParams)
  .then(orders => res.json(orders))
  .catch(err => res.status(500).send(err))
);

router.get("/entry", [
  parseQuery
], ({ parsedQuery }, res) => Order
  .getOrder(parsedQuery)
  .then(order => res.json(order))
  .catch(err => res.status(500).send(err))
);

router.post("/entry", [
  auth,
  createValidation,
  handleValidationResults,
  generatePaymentUrl
], ({ matchedData, paymentUrl }, res) => Order
  .createOrder(matchedData)
  .then(createdOrder => res.json(Object.assign({}, createdOrder, {
    url: paymentUrl
  })))
  .catch(err => res.status(500).send(err))
);

router.put("/entry", [
  auth,
  parseQuery,
  updateValidation,
  handleValidationResults,
], ({ matchedData, parsedQuery }, res) => Order
  .updateOrder(parsedQuery, matchedData)
  .then(updatedOrder => res.json(updatedOrder))
  .catch(err => res.status(500).send(err))
);

router.delete("/entry", [
  auth,
  parseQuery
], ({ parsedQuery }, res) => Order
  .removeOrder(parsedQuery)
  .then(mongo => res.json(mongo))
  .catch(err => res.status(500).send(err))
)

router.get("/entry/status", [
  parseQuery,
  robokassaStatus,
], ({ parsedQuery, robokassaStatus }, res) =>
    // Order
    //   .getOrder(parsedQuery)
    //   .then(order => res.json(Object.assign({}, order, {
    //     robokassaStatus
    //   })))
    //   .catch(err => res.status(500).send(err))
    res.json(robokassaStatus)
);

module.exports = router;

