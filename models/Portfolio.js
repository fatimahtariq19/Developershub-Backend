const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  name: String,

  image: {
    type: String,
    required: false // URL OR uploaded path
  },

  url: {
    type: String,
    required: true
  },

    category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  }

}, { timestamps: true });

module.exports = mongoose.model("Portfolio", portfolioSchema);


// const mongoose = require('mongoose');

// const portfolioSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: [true, 'Project title is required'],
//     trim: true,
//     maxlength: [100, 'Title cannot exceed 100 characters']
//   },
//   description: {
//     type: String,
//     required: [true, 'Description is required'],
//     maxlength: [2000, 'Description cannot exceed 2000 characters']
//   },
//   shortDescription: {
//     type: String,
//     maxlength: [200, 'Short description cannot exceed 200 characters']
//   },
//   image: {
//     type: String,
//     default: ''
//   },
//   techStack: [{ type: String }],
//   category: {
//     type: String,
//     enum: ['web', 'mobile', 'design', 'ecommerce', 'other'],
//     default: 'web'
//   },
//   liveUrl: { type: String, default: '' },
//   githubUrl: { type: String, default: '' },
//   clientName: { type: String, default: '' },
//   completedAt: { type: Date },
//   isFeatured: { type: Boolean, default: false },
//   isActive: { type: Boolean, default: true }
// }, { timestamps: true });

// module.exports = mongoose.model('Portfolio', portfolioSchema);