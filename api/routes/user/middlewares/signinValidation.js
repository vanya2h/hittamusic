const { check } = require('express-validator/check');

module.exports = [
  check("login")
    .exists()
    .withMessage("Не заполнено поле 'Логин'"),
  check("password")
    .exists()
    .withMessage("Не заполнено поле 'Пароль'"),
];