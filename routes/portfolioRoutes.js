const express = require("express");
const router = express.Router();

const upload = require("../middleware/uploadMiddleware");

const {
  getPortfolio,
  getPortfolioById,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
} = require("../controllers/portfolioController");

// PUBLIC
router.get("/", getPortfolio);
router.get("/:id", getPortfolioById);

// CREATE
router.post("/create-portfolio", upload.single("image"), createPortfolio);
// UPDATE
router.put("/:id", upload.single("image"), updatePortfolio);

// DELETE
router.delete("/:id", deletePortfolio);

module.exports = router;

