const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { createSupplier, getSuppliers} = require('../controller/supplierController');

router.post('/', auth, createSupplier);
router.get('/', auth, getSuppliers);

module.exports = router;
