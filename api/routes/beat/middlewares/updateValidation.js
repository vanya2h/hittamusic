const { check } = require('express-validator/check');

module.exports = [
  check('title')
    .optional()
    .isLength({ min: 3, max: 64 })
    .withMessage("Длина заголовка должна быть не больше 64 и не меньше 3 символов"),
  check('description')
    .optional()
    .isLength({ min: 3, max: 64 })
    .withMessage("Длина заголовка должна быть не больше 128 и не меньше 16 символов"),
  check('soundcloudId')
    .optional()
    .isLength({ min: 8, max: 12 })
    .withMessage("Неверный идентификатор SoundCloud"),
];