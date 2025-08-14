const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    itemName: { type: String, required: true },
    quantity: { type: Number, required: true },
    estimatedPricePerUnit: { type: Number }, // optional for budgeting
    reason: String,
    status: { 
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
    approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);


module.exports = mongoose.model("Request", requestSchema);
