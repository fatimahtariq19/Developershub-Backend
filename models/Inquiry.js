const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  company: String,
  message: { type: String, required: true },
  status: { type: String, default: "new" },
}, { timestamps: true });

module.exports = mongoose.model("Inquiry", inquirySchema);



// const mongoose = require('mongoose');

// const inquirySchema = new mongoose.Schema({
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
//     trim: true,
//     maxlength: [20, 'Phone cannot exceed 20 characters']
//   },
//   subject: {
//     type: String,
//     required: [true, 'Subject is required'],
//     maxlength: [150, 'Subject cannot exceed 150 characters']
//   },
//   message: {
//     type: String,
//     required: [true, 'Message is required'],
//     maxlength: [2000, 'Message cannot exceed 2000 characters']
//   },
//   service: {
//     type: String,
//     default: 'General'
//   },
//   status: {
//     type: String,
//     enum: ['new', 'read', 'replied', 'closed'],
//     default: 'new'
//   },
//   adminNotes: {
//     type: String,
//     default: ''
//   }
// }, { timestamps: true });

// module.exports = mongoose.model('Inquiry', inquirySchema);