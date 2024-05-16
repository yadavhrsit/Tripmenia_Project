const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  bookingPackageName: {
    type: String,
    required: true,
  },
  bookingPackageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Package",
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  clientEmail: {
    type: String,
    required: true,
  },
  clientPhoneNo: {
    type: String,
    required: true,
  },
  amountPaid: {
    type: Number,
    default: 0,
  },
  totalGuest: {
    type: Number,
    required: true,
  },
  bookingDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["Cancel", "Complete", "Pending"],
    default: "Pending",
  },
  paymentStatus: {
    type: String,
    enum: [
      "started",
      "pending",
      "completed",
      "failed",
      "refunded",
    ],
    default: "started",
  },
  paymentId: {
    type: String,
  },
  paymentIntent: {
    type: String,
  },
  bookedAt: {
    type: Date,
    default: Date.now,
  },
});

const bookingModel = mongoose.model("Booking", bookingSchema);

module.exports = bookingModel;
