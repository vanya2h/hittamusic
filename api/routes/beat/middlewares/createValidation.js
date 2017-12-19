const { 
  check 
} = require('express-validator/check');

module.exports = [
  check('image')
    .exists()
    .withMessage('Не указана ссылка на изображение'),
  check('title')
    .exists()
    .withMessage("Не указан заголовок бита"),
  check('title')
    .isLength({ min: 3, max: 64 })
    .withMessage("Длина заголовка должна быть не больше 64 и не меньше 3 символов"),
  check('description')
    .exists()
    .withMessage("Не указано описание бита"),
  check('description')
    .isLength({ min: 3, max: 64 })
    .withMessage("Длина заголовка должна быть не больше 128 и не меньше 16 символов"),
  check('soundcloudId')
    .exists()
    .withMessage("Не указан SoundCloud ID"),
  check('soundcloudId')
    .isLength({ min: 8, max: 12 })
    .withMessage("Неверный идентификатор SoundCloud"),
];