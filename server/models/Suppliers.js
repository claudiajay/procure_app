const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  name: String,
  contactInfo: String,
  products: [
    {
      name: String,
      prince: Number,
      availableQuantity: Number
    }
  ]
}, { timestamps: true })

module.exports = mongoose.model('Supplier', supplierSchema );