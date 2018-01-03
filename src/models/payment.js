import config from "../config.json";

export const createPayment = payment => ({
  method: "POST",
  data: { payment },
  url: config.api + "/order/entry"
})

export const checkPaymentStatus = id => ({
  method: "GET",
  params: { orderId: id },
  url: config.api + "/order/entry/status"
})