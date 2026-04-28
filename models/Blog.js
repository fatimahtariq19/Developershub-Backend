const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Blog", blogSchema);

// const mongoose = require('mongoose');

// const blogSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: [true, 'Blog title is required'],
//     trim: true,
//     maxlength: [150, 'Title cannot exceed 150 characters']
//   },
//   slug: {
//     type: String,
//     unique: true,
//     lowercase: true
//   },
//   content: {
//     type: String,
//     required: [true, 'Blog content is required']
//   },
//   excerpt: {
//     type: String,
//     maxlength: [300, 'Excerpt cannot exceed 300 characters']
//   },
//   coverImage: {
//     type: String,
//     default: ''
//   },
//   author: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   tags: [{ type: String, lowercase: true }],
//   category: {
//     type: String,
//     enum: ['tech', 'design', 'business', 'tutorial', 'news', 'other'],
//     default: 'tech'
//   },
//   published: {
//     type: Boolean,
//     default: false
//   },
//   views: {
//     type: Number,
//     default: 0
//   },
//   readTime: {
//     type: Number,
//     default: 5
//   }
// }, { timestamps: true });

// // Auto-generate slug from title before saving
// blogSchema.pre('save', function (next) {
//   if (this.isModified('title')) {
//     this.slug = this.title
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, '-')
//       .replace(/(^-|-$)/g, '') + '-' + Date.now();
//   }
//   // Auto-calculate read time (avg 200 words/min)
//   if (this.isModified('content')) {
//     const wordCount = this.content.split(/\s+/).length;
//     this.readTime = Math.ceil(wordCount / 200);
//   }
//   next();
// });

// module.exports = mongoose.model('Blog', blogSchema);