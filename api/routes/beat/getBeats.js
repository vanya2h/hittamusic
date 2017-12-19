const Beat = require("../../models/Beat");

const options = {};

const getBeats = (request, response) =>
  Beat.getBeats(request, response, options, beat =>
    response.status(200).send(beat)
  );

module.exports = getBeats;