const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      enum: ["Full-time", "Part-time", "Internship", "Remote"],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
     positions: {
    type: Number,
    default: 1
  },

  skillsAndResponsibilities: {
    type: String
  }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);