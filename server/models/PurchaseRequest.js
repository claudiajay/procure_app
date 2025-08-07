const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    itemName: String,
    quantity: Number,
    reason: String,
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected", "Ordered"],
      default: "Pending",
    },
    approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PurchaseRequest", requestSchema);
