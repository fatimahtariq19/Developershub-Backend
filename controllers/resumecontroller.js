const Resume = require("../models/Resume");

// UPLOAD
const uploadResume = async (req, res) => {
  const data = await Resume.create({
    name: req.body.name,
    file: req.file.path,
  });

  res.json(data);
};

// GET ALL
const getResumes = async (req, res) => {
  res.json(await Resume.find());
};

// DELETE
const deleteResume = async (req, res) => {
  await Resume.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

module.exports = {
  uploadResume,
  getResumes,
  deleteResume,
};