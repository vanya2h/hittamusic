const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const auth = require("../../middlewares/auth");
const signupValidation = require("./middlewares/signupValidation");
const updateValidation = require("./middlewares/updateValidation");
const verifyCredentials = require("./middlewares/verifyCredentials");
const handleValidationResult = require("./middlewares/handleValidationResult");
const addSaltToPassword = require("./middlewares/addSaltToPassword");
const checkLogin = require("./middlewares/checkLogin");
const signinValidation = require("./middlewares/signinValidation");
const parseQuery = require("./middlewares/parseQuery");
const parseParams = require("./middlewares/parseParams");
const router = express.Router();

router.post("/signin", [
  signinValidation, 
  handleValidationResult,
  verifyCredentials,
], ({ matchedData }, res) => User
  .signUser(matchedData.login)
  .then(data => res.json(data))
  .catch(err => res.status(500).send(err))
);

router.post("/signup", [
  signupValidation, 
  handleValidationResult, 
  checkLogin,
  addSaltToPassword
], ({ matchedData }, res) => User.createUser(matchedData)
  .then(createdUser => res.json(createdUser))
  .catch(err => res.status(500).send(err))
);

router.get("/entries", [
  parseParams
], ({ parsedParams, parsedQuery }, res) => User
  .getUsers(parsedQuery, parsedParams)
  .then(users => res.json(users))
  .catch(err => res.status(500).send(err))
);

router.get("/entry", [
  parseQuery
], ({ parsedQuery }, res) => User
  .getUser(parsedQuery)
  .then(user => res.json(user))
  .catch(err => res.status(500).send(err))
);

router.put("/entry", [
  auth,
  parseQuery, 
  updateValidation,
  handleValidationResult
], ({ matchedData, parsedQuery }, res) => User
  .updateUser(parsedQuery, matchedData)
  .then(updatedUser => res.json(updatedUser))
  .catch(err => res.status(500).send(err))
)

router.delete("/entry", [
  auth,
  parseQuery
], ({ parsedQuery }, res) => User
  .removeUser(parsedQuery)
  .then(mongo => res.json(mongo))
  .catch(err => res.status(500).send(err))
)

module.exports = router;

