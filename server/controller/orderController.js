const Order = require('../models/Order');

const createOrder = async (req, res) => {
  const { requestId, supplierId, deliveryDate } = req.body;
  try {
    const order = await Order.create({ requestId, supplierId, deliveryDate });
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({msg: err.message}); 
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('requestId')
      .populate('supplierId');
      res.json(orders);
  } catch (err) {
    res.status(500).json({ msg: err.message})
  }
}

module.exports = { 
  createOrder,
  getOrders
}