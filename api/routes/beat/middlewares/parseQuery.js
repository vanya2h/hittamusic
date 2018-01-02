module.exports = (request, response, next) => {
  request.parsedQuery = {};
  if (request.query.beatId) {
    request.parsedQuery._id = request.query.beatId
  }
  next();
}