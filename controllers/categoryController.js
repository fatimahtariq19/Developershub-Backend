const Category = require("../models/Category");
const Portfolio = require("../models/Portfolio");
const mongoose = require("mongoose");


// ✅ CREATE CATEGORY
exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Category name is required" });
    }

    const data = await Category.create({ name });

    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ✅ GET ALL CATEGORIES
exports.getCategories = async (req, res) => {
  try {
    const data = await Category.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ✅ GET CATEGORY BY ID
exports.getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Category ID" });
    }

    const data = await Category.findById(id);

    if (!data) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ✅ GET PORTFOLIOS BY CATEGORY ID
exports.getPortfolioByCategoryId = async (req, res) => {
  try {
    const { id } = req.params;

    // check valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Category ID" });
    }

    const portfolios = await Portfolio.find({ category: id })
      .populate("category")
      .sort({ createdAt: -1 });

    res.status(200).json(portfolios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};