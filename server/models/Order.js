const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    requestId: { type: mongoose.Schema.Types.ObjectId, ref: "PurchaseRequest" },
    supplierId: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier" },
    deliveryStatus: {
      type: String,
      enum: ["Processing", "Shipped", "Delivered"],
      default: "Processing",
    },
    deliveryDate: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
