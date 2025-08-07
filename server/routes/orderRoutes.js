const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { createOrder, getOrders } = require('../controller/orderController');

router.post('/', auth, createOrder);
router.get('/', auth, getOrders);

module.exports = router;
