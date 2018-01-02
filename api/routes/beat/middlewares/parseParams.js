module.exports = (request, response, next) => {
  request.parsedParams = {};
  if (request.query.limit) {
    request.parsedParams.limit = request.query.limit
  }
  if (request.query.skip) {
    request.parsedParams.skip = request.query.skip
  }
  next();
}