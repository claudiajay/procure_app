const Supplier = require('../models/Suppliers');

const createSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.create(req.body);
    res.status(201).json(supplier);
  } catch(err){
    res.status(500).json({ msg: err.message })
  }
 };

 const getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.json(suppliers);
  } catch(err) {
    res.status(500).json({msg: err.message})
  }
 };

 module.exports = {
  createSupplier,
  getSuppliers
 }