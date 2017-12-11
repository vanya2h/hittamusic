const express = require("express");
const getBeats = require("./getBeats");
const getBeat = require("./getBeat");
const getSummary = require("./getSummary");
const router = express.Router();

router.get("/entries", getBeats);
router.get("/entry/:id", getEntry);
router.get("/summary", getSummary);

module.exports = router;