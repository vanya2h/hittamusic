module.exports = (request, response, next) => {
  request.parsedQuery = {};
  if (request.query.orderId) {
    request.parsedQuery._id = request.query.orderId
  }
  next();
}