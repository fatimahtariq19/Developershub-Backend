const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  name: String,
  file: String, // file path
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Resume", resumeSchema);