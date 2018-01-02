const md5 = require('md5');
const helper = require("../../../utils/configureHelper");

module.exports = (req, res, next) => {
  const options = {
    invId: req.matchedData.invId,
    email: req.matchedData.email,
    outSumCurrency: req.matchedData.currency,
    isTest: true,
    signatureValue: md5(`
      ${process.env.MERCHANT_LOGIN}
      :${req.matchedData.total}
      :${req.matchedData.invId}
      :${process.env.MERCHANT_PASSWORD_1}
    `),
  };

  req.paymentUrl = helper.generatePaymentUrl(
    req.matchedData.total, 
    req.matchedData.description, 
    options
  );

  next();
}