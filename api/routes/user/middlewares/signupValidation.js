const { check } = require('express-validator/check');

module.exports = [
  check("login")
    .exists()
    .withMessage("Не заполнено поле 'Логин'"),
  check("login")
    .isLength({ min: 4, max: 20 })
    .withMessage("Поле 'Логин' не должно занимать меньше 4 и не больше 20 символов"),
  check("login")
    .matches(/^\S*$/)
    .withMessage("Поле 'Логин' не должно содержать пробелов"),
  check("password")
    .exists()
    .withMessage("Не заполнено поле 'Пароль'"),
  check("password")
    .isLength({ min: 6, max: 24 })
    .withMessage("Пароль должен быть не меньше 6 и не больше 24 символов"),
  check("password-repeat")
    .custom((value, { req }) => value === req.body["password-repeat"])
    .withMessage("Пароли не совпадают")
];