const express = require("express");
const {
  updateBooking,
  viewBookings,
  viewOneBooking,
  deleteBooking,
} = require("../controller/booking.controller");
const {
  initiatePayment,
  verifyPayment,
} = require("../controller/paymentHandler");

const bookingRoutes = express.Router();

bookingRoutes.post("/create", initiatePayment);
bookingRoutes.get("/verify/:id", verifyPayment);

bookingRoutes.put("/update/:id", updateBooking);
bookingRoutes.get("/view", viewBookings);
bookingRoutes.get("/view/:id", viewOneBooking);

bookingRoutes.delete("/delete/:id", deleteBooking);

module.exports = bookingRoutes;
