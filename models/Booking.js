const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: String,
  time: String,
  message: String,
  status: { type: String, default: "pending" }
});

module.exports = mongoose.model("Booking", bookingSchema);



// const mongoose = require('mongoose');

// const appointmentSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'Name is required'],
//     trim: true,
//     maxlength: [80, 'Name cannot exceed 80 characters']
//   },
//   email: {
//     type: String,
//     required: [true, 'Email is required'],
//     lowercase: true,
//     match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
//   },
//   phone: {
//     type: String,
//     trim: true
//   },
//   service: {
//     type: String,
//     required: [true, 'Service is required']
//   },
//   date: {
//     type: Date,
//     required: [true, 'Appointment date is required']
//   },
//   timeSlot: {
//     type: String,
//     required: [true, 'Time slot is required'],
//     enum: [
//       '09:00 AM', '10:00 AM', '11:00 AM',
//       '12:00 PM', '01:00 PM', '02:00 PM',
//       '03:00 PM', '04:00 PM', '05:00 PM'
//     ]
//   },
//   message: {
//     type: String,
//     maxlength: [1000, 'Message cannot exceed 1000 characters']
//   },
//   status: {
//     type: String,
//     enum: ['pending', 'confirmed', 'cancelled', 'completed'],
//     default: 'pending'
//   },
//   adminNotes: {
//     type: String,
//     default: ''
//   }
// }, { timestamps: true });

// module.exports = mongoose.model('Appointment', appointmentSchema);