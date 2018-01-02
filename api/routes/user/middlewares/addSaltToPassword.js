const password = require("password-hash-and-salt");

module.exports = (req, res, next) => {
  return password(req.matchedData.password + process.env.SECRET).hash((error, hashedPassword) => {
    if (error) {
      return res.status(500).send("Ошибка во время расшифровки пароля");
    } else {
      req.matchedData.password = hashedPassword;
      return next();
    }
  })
}