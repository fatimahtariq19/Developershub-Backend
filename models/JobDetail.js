// models/JobDetail.js
const mongoose = require('mongoose');

const jobDetailSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },

  // Only extra fields یہاں رکھیں
 

}, { timestamps: true });

module.exports = mongoose.model('JobDetail', jobDetailSchema);
