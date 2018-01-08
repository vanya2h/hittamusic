module.exports = order => order ? ({
  id: order._id,
  description: order.description,
  items: order.items,
  total: order.total,
  email: order.email,
  currency: order.currency,
  isClosed: order.isClosed,
  created: order.created,
  invId: order.invId,
}) : null;