const Booking = require("../models/Booking");

// CREATE BOOKING (USER)
const createBooking = async (req, res) => {
  const data = await Booking.create(req.body);
  res.json(data);
};

// GET ALL BOOKINGS (ADMIN)
const getBookings = async (req, res) => {
  const data = await Booking.find();
  res.json(data);
};

// UPDATE STATUS (ADMIN)
const updateBooking = async (req, res) => {
  const data = await Booking.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(data);
};

module.exports = {
  createBooking,
  getBookings,
  updateBooking,
};