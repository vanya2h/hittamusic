const robokassa = require('node-robokassa');

module.exports = new robokassa.RobokassaHelper({
  merchantLogin: process.env.MERCHANT_LOGIN,
  hashingAlgorithm: 'sha256',
  password1: process.env.MERCHANT_PASSWORD_1,
  password2: process.env.MERCHANT_PASSWORD_2,
  testMode: false,
  resultUrlRequestMethod: 'POST'
});