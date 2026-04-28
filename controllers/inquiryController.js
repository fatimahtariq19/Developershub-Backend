const Inquiry = require("../models/Inquiry");
const sendEmail = require("../utils/sendEmail");

// ✅ CREATE INQUIRY + SEND EMAIL TO ADMIN
const createInquiry = async (req, res) => {
  try {
    // 1. Save to DB
    const data = await Inquiry.create(req.body);

    // 2. Email template
    const html = `
      <h2> New Inquiry Received from Contact Form DevelopersHub </h2>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone || "N/A"}</p>
      <p><b>Company:</b> ${data.company || "N/A"}</p>
      <p><b>Message:</b><br/> ${data.message}</p>
    `;

    // 3. Send email to admin
    await sendEmail(
      process.env.ADMIN_EMAIL,
      "Contact Form DevelopersHub",
      html
    );

    // 4. Response
    res.status(201).json({
      success: true,
      message: "Inquiry created and email sent to admin",
      data,
    });

  } catch (error) {
    console.log("Create Inquiry Error:", error.message);
    res.status(500).json({ message: error.message });
  }
};

// ✅ GET ALL INQUIRIES
const getInquiries = async (req, res) => {
  try {
    const data = await Inquiry.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createInquiry,
  getInquiries,
};























