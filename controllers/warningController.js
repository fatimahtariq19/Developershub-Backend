const WarningMessage =require("../models/WarningMessage")

// =====================
// CREATE
// =====================
 const createWarningMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newMessage = await WarningMessage.create({
      name,
      email,
      message,
    });

    return res.status(201).json({
      success: true,
      data: newMessage,
      message: "Message created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// =====================
// READ ALL
// =====================
const getAllMessages = async (req, res) => {
  try {
    const messages = await WarningMessage.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: messages.length,
      data: messages,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// =====================
// READ SINGLE
// =====================
const getMessageById = async (req, res) => {
  try {
    const message = await WarningMessage.findById(req.params.id);

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: message,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// =====================
// UPDATE
// =====================
 const updateMessage = async (req, res) => {
  try {
    const updated = await WarningMessage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message updated successfully",
      data: updated,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// =====================
// DELETE
// =====================
const deleteMessage = async (req, res) => {
  try {
    const deleted = await WarningMessage.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
  createWarningMessage,
  getAllMessages,
  getMessageById,
  updateMessage,
  deleteMessage,
};
