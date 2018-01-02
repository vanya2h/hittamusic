const { check } = require('express-validator/check');

module.exports = [
  check('total')
    .optional(),
  check('items')
    .optional(),
  check('currency')
    .optional(),
  check("currency")
    .isIn(['RUB', 'USD'])
    .withMessage("Данная валюта не поддерживается"),
  check('invId')
    .optional(),
  check('email')
    .optional(),
  check('email')
    .optional()
    .isEmail()
    .withMessage('Не верный формат E-mail')
    .trim()
    .normalizeEmail(),
];