const express = require("express");
const router = express.Router();
const { protect, admin } = require("../middleware/authMiddleware");

const {
  createJob,
  getAllJobs,
  updateJob,
  deleteJob, getJobById,getJobDetail ,getJobDetailByJobId
} = require("../controllers/jobController");

// router.post("/create", createJob);
router.post("/create", protect, admin, createJob);

router.get("/all", getAllJobs);
router.put("/update/:id", protect, admin, updateJob);
router.delete("/delete/:id", protect, admin, deleteJob);

router.get('/:id', getJobById);


module.exports = router; // ✅ VERY IMPORTANT