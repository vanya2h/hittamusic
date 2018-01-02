const User = require("../../../models/User");
const password = require("password-hash-and-salt");
const createToken = require("../../../utils/createToken");
const mapUser = require("../../../utils/mapUser");

module.exports = (req, res, next) => 
  User.getUserRaw({ login: req.matchedData.login })
    .then((user) => {
      if (!user) {
        return res.status(500).send("Пользователя с таким логином не найден");
      } else {
        return password(req.matchedData.password + process.env.SECRET)
          .verifyAgainst(user.password, (error, verified) => {
            if (error) return res.status(500).send("Ошибка во время расшифровки пароля")
            if (!verified) return res.status(500).send("Неверный логин или пароль");
            req.user = mapUser(user);
            req.token = createToken(user);
            return next();
          })
      }
    })
    .catch(err => res.status(500).send(err))