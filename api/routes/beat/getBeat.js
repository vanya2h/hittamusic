const Beat = require("../../models/Beat");

const getBeat = (request, response) =>
  Beat.getBeat(response, request.params.id, beat =>
    response.status(200).send(beat);
  );

module.exports = getBeat;