const fetch = require("node-fetch");
const nodemailer = require("nodemailer");
const { createBooking } = require("./booking.controller");
const bookingModel = require("../models/bookingModel");
const { generatePDFReceipt } = require("../generateReceipt");
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
        test: true,
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
    const booking = await bookingModel
      .findById(id)
      .populate("bookingPackageId");
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

    console.log("Payment status:", paymentStatus);

    if (paymentStatus === "completed" && booking.paymentStatus === "pending") {
      const items = [
        {
          id: 1,
          description: booking.bookingPackageName,
          quantity: booking.totalGuest,
          rate: `AED ${booking.amountPaid / booking.totalGuest}`,
          amount: `AED ${booking.amountPaid}`,
        },
      ];

      const pdfPath = await generatePDFReceipt({
        logoPath: "logo.png",
        invoiceNo: booking._id,
        invoiceDate: booking.bookingDate,
        billedBy:
          "Gulfania FZC\nB33-129, Sharjah Research Technology and Innovation Park, Sharjah, United Arab Emirates",
        billedTo: `${booking.clientName}\nEmail: ${booking.clientEmail}\nPhone: ${booking.clientPhoneNo}`,
        items,
        totalAmount: `AED ${booking.amountPaid}`,
        contactInfo:
          "For any enquiry, reach out via email at bookings@gulfania.com, call on +971 52 972 0709",
      });

      // Set up email transport
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Email options
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: booking.clientEmail,
        subject: "Booking Payment Receipt",
        text: "Please find your payment receipt attached.",
        attachments: [
          {
            filename: "receipt.pdf",
            path: pdfPath,
          },
        ],
      };

      // Send the email
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully.");

      const verifiedBooking = await bookingModel.findByIdAndUpdate(
        id,
        { paymentStatus },
        { new: true }
      );

      console.log("Booking:", booking);
      console.log("verifiedBooking:", verifiedBooking);

      return res
        .status(200)
        .json({ message: "Payment verified", paymentStatus, verifiedBooking });
    }

    // Update payment status if not completed
    await bookingModel.findByIdAndUpdate(id, { paymentStatus }, { new: true });
    return res
      .status(200)
      .json({ message: "Payment status updated", paymentStatus });
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({ error: "Failed to verify payment" });
  }
}

module.exports = {
  initiatePayment,
  verifyPayment,
};
