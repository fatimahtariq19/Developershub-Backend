const express = require("express");
const router = express.Router();
const {
  createCategory,
  getCategories,getCategoryById, getPortfolioByCategoryId
} = require("../controllers/categoryController");

router.post("/createCategory", createCategory);



router.get("/", getCategories);
router.get("/:id", getCategoryById);

// portfolios
router.get("/:id", getPortfolioByCategoryId);
module.exports = router;