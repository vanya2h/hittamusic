const mongoose = require('mongoose');
const mapOrder = require("../utils/mapOrder");
const { Schema } = mongoose;

const OrderSchema = new Schema({
  description: { type: String, default: null },
  items: [{
    option: { type: String, required: true },
    id: { type: Schema.Types.ObjectId, ref: "Beat", required: true }
  }],
  total: { type: Number, required: true },
  isClosed: { type: Boolean, default: false },
  currency: { type: String, default: "USD" },
  invId: { type: Number, required: true },
  email: { type: String, required: true },
  created: { type: Date, default: Date.now }
});

const Order = mongoose.models.Order 
  || mongoose.model("Order", OrderSchema);


Order.getOrder = query => Order
  .findOne(query)
  .then(order => mapOrder(order));

Order.getOrders = (query, params) => Order
  .find(query, null, params)
  .then(orders => orders.map(order => mapOrder(order)));

Order.createOrder = order => Order
  .create(order)
  .then(createdOrder => mapOrder(createdOrder));

Order.updateOrder = (query, values) => Order
  .findOneAndUpdate(query, values, { new : true })
  .then(updatedOrder => mapOrder(updatedOrder));

Order.removeOrder = (query) => Order
  .remove(query);

Order.closeOrder = (query) => Order
  .updateOrder(query, { isClosed: true })

Order.openOrder = (query) => Order
  .updateOrder(query, { isClosed: false })


module.exports = Order;
