const Blog = require("../models/Blog");

// GET ALL
const getBlogs = async (req, res) => {
  const data = await Blog.find().sort({ createdAt: -1 });
  res.json(data);
};

// GET BY ID
const getBlogById = async (req, res) => {
  const data = await Blog.findById(req.params.id);
  res.json(data);
};

// CREATE
const createBlog = async (req, res) => {
  const data = await Blog.create(req.body);
  res.json(data);
};

// UPDATE
const updateBlog = async (req, res) => {
  const data = await Blog.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(data);
};

// DELETE
const deleteBlog = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Blog deleted" });
};

module.exports = {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
};




