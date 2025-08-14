const Order = require('../models/Order');

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("request")
      .lean();


    const approvedOrders = orders.filter(order => order.request !== null);
    res.json(approvedOrders);
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}

module.exports = { getOrders };