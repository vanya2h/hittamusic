const axios = require("axios");
const md5 = require("md5");
const convert = require('xml-js');

module.exports = (req, res, next) => axios({
  url: "https://auth.robokassa.ru/Merchant/WebService/Service.asmx/OpState",
  params: {
    MerchantLogin: process.env.MERCHANT_LOGIN,
    InvoiceID: 1932809606,
    Signature: md5(`${process.env.MERCHANT_LOGIN}:${1932809606}:${process.env.MERCHANT_PASSWORD_2}`)
  },
  responseType: 'text'
})
  .then(({ data }) => {
    convertedData = convert.xml2js(data, {
      compact: true,
      ignoreAttributes: true,
      ignoreDeclaration: true,
    });

    req.robokassaStatus = convertedData.OperationStateResponse.Result.Code._text;
    return next();
  })
  .catch((err) => res.status(500).send(err))