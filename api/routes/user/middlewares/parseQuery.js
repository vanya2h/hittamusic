module.exports = (request, response, next) => {
  request.parsedQuery = {};
  if (request.query.userId) {
    request.parsedQuery._id = request.query.userId
  }
  next();
}