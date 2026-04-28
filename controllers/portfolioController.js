const Portfolio = require("../models/Portfolio");
const Category = require("../models/Category");

// ✅ GET ALL + FILTER + SEARCH + PAGINATION
const getPortfolio = async (req, res) => {
  try {
    const { category, search, page = 1, limit = 10 } = req.query;

    let filter = {};

    // 🔥 CATEGORY FILTER
    if (category) {
      if (/^[0-9a-fA-F]{24}$/.test(category)) {
        filter.category = category;
      } else {
        const cat = await Category.findOne({
          name: new RegExp(`^${category}$`, "i"),
        });

        if (!cat) {
          return res.json({
            total: 0,
            page: Number(page),
            data: [],
          });
        }

        filter.category = cat._id;
      }
    }

    // 🔍 SEARCH
    if (search) {
      filter.name = new RegExp(search, "i");
    }

    const skip = (page - 1) * limit;

    const data = await Portfolio.find(filter)
      .populate("category")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    const total = await Portfolio.countDocuments(filter);

    res.json({
      total,
      page: Number(page),
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ GET SINGLE
const getPortfolioById = async (req, res) => {
  try {
    const data = await Portfolio.findById(req.params.id).populate("category");

    if (!data) {
      return res.status(404).json({ message: "Portfolio not found" });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ CREATE (FIXED - CATEGORY VALIDATION ADDED)
const createPortfolio = async (req, res) => {
  try {
    const { name, url, category, image } = req.body;

    let imagePath = "";

    // 🔥 file OR URL
    if (req.file) {
      imagePath = req.file.path;
    } else if (typeof image === "string" && image.trim() !== "") {
      imagePath = image;
    }

    // ❌ if no image
    if (!imagePath) {
      return res.status(400).json({ message: "Image is required" });
    }

    // ✅ 👉 ADD THIS HERE
    if (!/^https?:\/\//.test(imagePath) && !req.file) {
      return res.status(400).json({ message: "Invalid image URL" });
    }

    // 🔥 category validation
    const catExists = await Category.findById(category);
    if (!catExists) {
      return res.status(404).json({ message: "Invalid category" });
    }

    const data = await Portfolio.create({
      name,
      url,
      category,
      image: imagePath,
    });

    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ UPDATE (FIXED - SAFE CATEGORY CHECK)
const updatePortfolio = async (req, res) => {
  try {
    const { category } = req.body;

    // 🔍 VALIDATE CATEGORY IF PROVIDED
    if (category) {
      const catExists = await Category.findById(category);
      if (!catExists) {
        return res.status(404).json({ message: "Category not found" });
      }
    }

    const updated = await Portfolio.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate("category");

    if (!updated) {
      return res.status(404).json({ message: "Portfolio not found" });
    }

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ DELETE
const deletePortfolio = async (req, res) => {
  try {
    const deleted = await Portfolio.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Portfolio not found" });
    }

    res.json({ message: "Portfolio deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPortfolio,
  getPortfolioById,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
};