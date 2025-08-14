// src/models/Order.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  request: { type: mongoose.Schema.Types.ObjectId, ref: "PurchaseRequest", required: true },
  orderedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [{
    itemName: String,
    quantity: Number,
    pricePerUnit: Number, 
    totalPrice: Number    
  }],
  status: { type: String, enum: ["Ordered", "Delivered"], default: "Ordered" },
  createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model("Order", orderSchema);
