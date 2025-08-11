const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { createOrder, getOrders } = require('../controller/orderController');

router.post('/createOrders', auth, createOrder); 
router.get('/getOrders', auth, getOrders);

module.exports = router;
