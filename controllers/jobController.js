const Job = require("../models/Job");
const JobDetail = require("../models/JobDetail");


// =========================
// CREATE JOB
// =========================
const createJob = async (req, res) => {
  try {
    const job = new Job({
      name: req.body.name,
      experience: req.body.experience,
      jobType: req.body.jobType,
      description: req.body.description,
    positions: req.body.positions,
      skillsAndResponsibilities: req.body.skillsAndResponsibilities
    });

    const savedJob = await job.save();

    res.status(201).json({
      success: true,
      job: {
        jobId: savedJob._id,
        name: savedJob.name,
        experience: savedJob.experience,
        jobType: savedJob.jobType,
        description: savedJob.description,
         positions: savedJob.positions,
        skillsAndResponsibilities: savedJob.skillsAndResponsibilities
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// =========================
// GET ALL JOBS
// =========================
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    const totalJobs = await Job.countDocuments();

    res.status(200).json({
      success: true,
      totalJobs,
      jobs
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// =========================
// UPDATE JOB
// =========================
const updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        experience: req.body.experience,
        jobType: req.body.jobType,
        description: req.body.description
      },
      { new: true }
    );

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found"
      });
    }

    res.status(200).json({
      success: true,
      job
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// =========================
// DELETE JOB
// =========================
const deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Job deleted"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// =========================
// GET SINGLE JOB
// =========================
const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found"
      });
    }

    res.status(200).json({
      success: true,
      job
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// =========================
// GET JOB DETAIL (by jobId)
// =========================
const getJobDetail = async (req, res) => {
  try {
    const detail = await JobDetail.findOne({ jobId: req.params.jobId })
      .populate("jobId");

    if (!detail) {
      return res.status(404).json({
        success: false,
        message: "Detail not found"
      });
    }

    res.status(200).json({
      success: true,
      job: detail.jobId,
      positions: detail.positions,
      skillsAndResponsibilities: detail.skillsAndResponsibilities
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// =========================
module.exports = {
  createJob,
  getAllJobs,
  updateJob,
  deleteJob,
  getJobById,
  getJobDetail
};
