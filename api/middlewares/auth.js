const jwt = require("jsonwebtoken");
const User = require("../models/user");

const doDecode = (token, onDecode, onFail) =>
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (!err && decoded) return onDecode(decoded);
    return onFail(err);
  });

module.exports =  (request, response, next) => {
  const token = request.headers.authorization;
  
  if (token) {
    return doDecode(token, (decoded) => User
      .getUser({ _id: decoded.userId })
      .then((user) => {
        if (!user) {
          return response.status(404).send("Пользователь не найден");
        } else {
          request.user = user;
          return next();
        }
      }), (error) => response.status(403).send("Неверный токен")
    );
  } else {
    return response.status(401).send("Токен не предоставлен");
  }
};
