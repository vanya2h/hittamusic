module.exports = order => order ? ({
  id: order._id,
  description: order.description,
  items: order.items,
  total: order.total,
  isClosed: order.isClosed,
  created: order.created,
}) : null;