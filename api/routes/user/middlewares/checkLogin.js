const User = require("../../../models/User");

module.exports = ({ matchedData }, res, next) => 
  User.getUser({ login: matchedData.login })
    .then(user => user ? 
      res.status(409).send("Пользователь с таким логином уже существует") : next())
    .catch(err => res.status(500).send("Ошибка сервера"));