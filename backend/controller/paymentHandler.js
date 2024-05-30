const fetch = require("node-fetch");
const { createBooking } = require("./booking.controller");
const bookingModel = require("../models/bookingModel");
require("dotenv").config();
async function initiatePayment(req, res) {
  
  try {
    const bookingId = await createBooking(req);

    const url = "https://api-v2.ziina.com/api/payment_intent";
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: process.env.ZIINA_API_KEY,
      },
      body: JSON.stringify({
        amount: req.body.amount * 100, // Assuming amount is in AED
        currency_code: "AED",
        message: `Package ${req.body.destination}`,
        success_url: `https://www.tripmenia.com/success/${bookingId}`,
        cancel_url: "https://www.tripmenia.com/failure",
        // Remove in production
      }),
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Failed to initiate payment");
    }

    const json = await response.json();
    await bookingModel.findByIdAndUpdate(
      bookingId,
      {
        paymentStatus: "pending",
        paymentId: json.id,
        paymentIntent: json.intent,
      },
      { new: true }
    );

    res.status(200).json({
      message: "Payment initiated",
      redirectUrl: json.redirect_url,
    });
  } catch (error) {
    console.error("Error initiating payment:", error);
    res.status(500).json({ error: "Failed to initiate payment" });
  }
}

async function verifyPayment(req, res) {
  try {
    const { id } = req.params;
    const booking = await bookingModel.findById(id);
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    const url = `https://api-v2.ziina.com/api/payment_intent/${booking.paymentId}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        authorization: process.env.ZIINA_API_KEY,
      },
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      console.log(response);
      throw new Error("Failed to verify payment");
    }

    const json = await response.json();
    const paymentStatus = json.status;

    const verifiedBooking = await bookingModel.findByIdAndUpdate(id, { paymentStatus }, { new: true });

    return res
      .status(200)
      .json({ message: "Payment verified", paymentStatus, verifiedBooking });
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({ error: "Failed to verify payment" });
  }
}

module.exports = {
  initiatePayment,
  verifyPayment,
};
