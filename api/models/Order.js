const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  invId: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  items: [{
    option: {
      type: "String",
      required: true,
    },
    id: {
      type: Schema.Types.ObjectId,
      required: true,
    }
  }],
  total: {
    type: Number,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model("Order", orderSchema);

Order.getOrders = (request, response, options, onOrders, onError) => {
  Order.find(options, null, {
    limit: +request.query.limit || 10,
    skip: +request.query.skip || 0,
    lean: true,
  }, (err, orders) => {
    if (err) {
      if (onError) return onError("Ошибка во время поиска битов")
      return response.status(500)
        .send("Ошибка во время поиска битов");
    } else {
      if (onOrders) return onOrders(orders);
      return response.status(200)
        .json(orders);
    }
  });
}

Order.getOrder = (request, response, id, onOrder, onError) => {
  Order.findById(id, null, {
    lean: true,
  }, (err, order) => {
    if (err) {
      if (onError) return onError("Неверный формат идентификатора")
      return response.status(500)
        .send("Неверный формат идентификатора");
    } else if (!order) {
      if (onError) return onError("Ордер не найден")
      return response.status(404)
        .send("Бит не найден");
    } else {
      if (onOrder) return onOrder(order);
      return response.status(200)
        .json(order);
    }
  });
};

Order.createOrder = (request, response, order, onOrder, onError) => {
  Order.create(order, (err, createdOrder) => {
    if (err) {
      if (onError) return onError("Ошибка во время создания ордера")
      return response.status(500)
        .send("Ошибка во время создания ордера");
    } else {
      if (onOrder) return onOrder(createdOrder);
      return response.status(200)
        .json(createdOrder);
    }
  });
};

Order.removeOrder = (request, response, id, onRemove, onError) => {
  Order.remove({_id: id}, (err, mongo) => {
    if (err) {
      if (onError) return onError("Ошибка во время удаления ордера")
      return response.status(500)
        .send("Ошибка во время удаления ордера");
    } else {
      if (onRemove) return onRemove(mongo);
      return response.status(200)
        .json(mongo);
    }
  });
};

module.exports = Order;
