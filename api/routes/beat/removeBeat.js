const Beat = require("../../models/Beat");

const removeBeat = (request, response) =>
  Beat.removeBeat(request, response, request.params.id, beat =>
    response.status(200).send(beat)
  );

module.exports = removeBeat;