const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload.middleware");
const controller = require("../controllers/resumecontroller");

// 📄 Upload Resume
router.post(  "/",  upload.single("file"),  controller.uploadResume );

// 📄 Get all resumes (admin)
router.get("/", controller.getResumes);

// 🗑 Delete resume
router.delete("/:id", controller.deleteResume);

module.exports = router;