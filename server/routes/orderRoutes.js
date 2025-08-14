const express = require('express');
const router  = express.Router();
const auth = require('../middleware/authMiddleware')

const { getOrders } = require('../controller/orderController');

router.get('/', auth, getOrders);

module.exports = router;