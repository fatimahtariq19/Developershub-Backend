const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image:String
});

module.exports = mongoose.model("Service", serviceSchema);


// const mongoose = require('mongoose');

// const serviceSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: [true, 'Service title is required'],
//     trim: true,
//     maxlength: [100, 'Title cannot exceed 100 characters']
//   },
//   description: {
//     type: String,
//     required: [true, 'Description is required'],
//     maxlength: [1000, 'Description cannot exceed 1000 characters']
//   },
//   shortDescription: {
//     type: String,
//     maxlength: [200, 'Short description cannot exceed 200 characters']
//   },
//   icon: {
//     type: String,
//     default: 'code'  // icon name (e.g. lucide icon)
//   },
//   image: {
//     type: String,
//     default: ''
//   },
//   price: {
//     type: String,
//     default: 'Contact for pricing'
//   },
//   features: [{ type: String }],
//   category: {
//     type: String,
//     enum: ['web', 'mobile', 'design', 'marketing', 'consulting', 'other'],
//     default: 'web'
//   },
//   isActive: {
//     type: Boolean,
//     default: true
//   },
//   order: {
//     type: Number,
//     default: 0
//   }
// }, { timestamps: true });

// module.exports = mongoose.model('Service', serviceSchema);