const bookingModel = require("../models/bookingModel");

const createBooking = async (req) => {
  try {
    const {
      destination: bookingPackageName,
      packageId: bookingPackageId,
      name: clientName,
      email: clientEmail,
      phoneNumber: clientPhoneNo,
      amount: amountPaid,
      guests: totalGuest,
      date: bookingDate,
      status,
      paymentStatus,
    } = req.body;

    const booking = new bookingModel({
      bookingPackageName,
      bookingPackageId,
      clientName,
      clientEmail,
      clientPhoneNo,
      amountPaid,
      totalGuest,
      bookingDate,
      status,
      paymentStatus,
    });

    await booking.save();
    return booking._id;
  } catch (error) {
    console.error(error);
    return error;
  }
};

// Update booking controller
const updateBooking = async (req, res) => {
  try {
    const booking = await bookingModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ message: "Booking updated successfully", booking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// View all bookings controller
const viewBookings = async (req, res) => {
  try {
    let { page, size, sort, search } = req.query;
    page = parseInt(page) || 1;
    size = parseInt(size) || 10;
    const skip = (page - 1) * size;

    const query = {};
    if (search) query.name = { $regex: search, $options: "i" };

    const bookings = await bookingModel
      .find(query)
      .sort(sort)
      .skip(skip)
      .limit(size);

    res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// View one booking controller
const viewOneBooking = async (req, res) => {
  try {
    const booking = await bookingModel.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.status(200).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete booking controller
const deleteBooking = async (req, res) => {
  try {
    await bookingModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createBooking,
  updateBooking,
  viewBookings,
  viewOneBooking,
  deleteBooking,
};
