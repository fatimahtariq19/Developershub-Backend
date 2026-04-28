const express = require("express");
const router = express.Router();

const {
  createWarningMessage,
  getAllMessages,
  getMessageById,
  updateMessage,
  deleteMessage,
} = require("../controllers/warningController.js");

// CREATE
router.post("/createwarningmessage", createWarningMessage);

// READ ALL
router.get("/all", getAllMessages);

// READ ONE
router.get("/warning/:id", getMessageById);

// UPDATE
router.put("/warning/:id", updateMessage);

// DELETE
router.delete("/warning/:id", deleteMessage);

module.exports = router;