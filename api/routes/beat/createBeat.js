const Beat = require("../../models/Beat");
const { validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');

const createBeat = (request, response) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) return response.status(422).json({ 
    errors: errors.mapped() 
  })

  const newBeat = matchedData(request);
  Beat.createBeat(request, response, newBeat, createdBeat =>
    response.status(200).send(createdBeat)
  );
}

module.exports = createBeat;