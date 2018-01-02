const express = require("express");
const Beat = require("../../models/Beat");
const createValidation = require("./middlewares/createValidation");
const updateValidation = require("./middlewares/updateValidation");
const handleValidationResult = require("./middlewares/handleValidationResult");
const parseQuery = require("./middlewares/parseQuery");
const parseParams = require("./middlewares/parseParams");
const auth = require("../../middlewares/auth");
const router = express.Router();

router.get("/entries", [
  parseParams
], ({ parsedParams, parsedQuery }, res) => Beat
  .getBeats(parsedQuery, parsedParams)
  .then(beats => res.json(beats))
  .catch(err => res.status(500).send(err))
);

router.get("/entry", [
  parseQuery
], ({ parsedQuery }, res) => Beat
  .getBeat(parsedQuery)
  .then(beat => res.json(beat))
  .catch(err => res.status(500).send(err))
);

router.post("/entry", [
  auth, 
  createValidation,
  handleValidationResult
], ({ matchedData} , res) => Beat
  .createBeat(matchedData)
  .then(createdBeat => res.json(createdBeat))
  .catch(err => res.status(500).send(err))
);

router.put("/entry", [
  auth, 
  parseQuery, 
  updateValidation,
  handleValidationResult,
], ({ matchedData, parsedQuery }, res) => {
  return Beat.updateBeat(parsedQuery, matchedData)
    .then(updatedBeat => res.json(updatedBeat))
    .catch(err => res.status(500).send(err));
})

router.delete("/entry", [
  auth, 
  parseQuery
], ({ parsedQuery }, res) => Beat
  .removeBeat(parsedQuery)
  .then(mongo => res.json(mongo))
  .catch(err => res.status(500).send(err))
)

module.exports = router;

