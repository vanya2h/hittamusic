const { check } = require('express-validator/check');

module.exports = [
  (req, res, next) => {
    console.log(req.body);
    next();
  },
  check('total')
    .exists()
    .withMessage('Не заполнено поле "Итоговая сумма"'),
  check('items')
    .exists()
    .withMessage('Не заполнено поле "Товары"'),
  check('currency')
    .exists()
    .withMessage('Не заполнено поле "Валюта"'),
  check("currency")
    .isIn(['RUB', 'USD'])
    .withMessage("Данная валюта не поддерживается"),
  check('invId')
    .exists()
    .withMessage('Не заполнено поле "Уникальный идентификатор"'),
  check('email')
    .exists()
    .withMessage('Не заполнено поле "E-mail"'),
  check('email')
    .isEmail()
    .withMessage('Не верный формат E-mail')
    .trim()
    .normalizeEmail(),
];