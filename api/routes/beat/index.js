const express = require("express");
const getBeats = require("./getBeats");
const getBeat = require("./getBeat");
const createBeat = require("./createBeat");
const removeBeat = require("./removeBeat");
const createValidation = require("./middlewares/createValidation");
const router = express.Router();

router.get("/entries", getBeats);
router.get("/entry/:id", getBeat);
router.delete("/entry/:id", removeBeat);
router.post("/entry", [ ...createValidation ], createBeat);

module.exports = router;

