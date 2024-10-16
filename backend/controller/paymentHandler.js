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

      // generate Invoice Number String
      const invoiceNo = `TRIPMENIA-${Math.floor(
        100000 + Math.random() * 900000
      )}-${booking.clientName.slice(0, 3).toUpperCase()}${booking.clientEmail
        .slice(0, 3)
        .toUpperCase()}${booking.clientPhoneNo.slice(0, 3)}`;

      const formattedDate = new Date(booking.bookingDate)
        .toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
        .replace(" ", "-");

      const verifiedBooking = await bookingModel.findByIdAndUpdate(
        id,
        { invoiceNo, paymentStatus },
        { new: true }
      );

      const pdfPath = await generatePDFReceipt({
        logoPath: "logo.png",
        invoiceNo,
        invoiceDate: formattedDate,
        billedBy:
          "Tripmenia (FZE)\nBlock C VL02-179, Sharjah Research Technology and Innovation Park, Sharjah, United Arab Emirates",
        billedTo: `${verifiedBooking.clientName}\nEmail: ${verifiedBooking.clientEmail}\nPhone: ${verifiedBooking.clientPhoneNo}`,
        items,
        totalAmount: `AED ${verifiedBooking.amountPaid}`,
        contactInfo:
          "For any enquiry, reach out via email at bookings@tripmenia.com, call on +971 52 544 7735",
      });

      // Set up email transport

      const transporter = nodemailer.createTransport({
        host: "us2.smtp.mailhostbox.com", // or your smtp server: 'smtp.tripmenia.com'
        port: 587, // use 25 or 587 for non-SSL
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false,
        },
        connectionTimeout: 20000, // 20 seconds
        greetingTimeout: 20000, // 20 seconds
      });

      // Email options
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: booking.clientEmail,
        cc: process.env.EMAIL_USER,
        bcc: "agamsaxena12345@gmail.com",
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
      await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Error sending email:", error);
        } else {
          console.log("Email sent:", info.response);
          console.log("Message sent: %s", info.messageId);
        }
      });
      console.log("Email sent successfully.");

      return res.status(200).json({
        message: "Payment verified",
        paymentStatus,
        verifiedBooking,
      });
    }

    // Update payment status if not completed
    const alreadyVerified = await bookingModel.findById(id);
    return res.status(200).json({
      message: "Payment status updated",
      paymentStatus,
      verifiedBooking: alreadyVerified,
    });
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({ error: "Failed to verify payment" });
  }
}

module.exports = {
  initiatePayment,
  verifyPayment,
};
