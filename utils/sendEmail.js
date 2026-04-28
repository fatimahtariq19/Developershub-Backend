const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (to, subject, html) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Gmail App Password
    },
  });

  await transporter.sendMail({
    from: `"Contact Form DevelopersHub" <${process.env.EMAIL_USER}>`,
    to: "fatimahtariq687@gmail.com",
    subject,
    html,
  });
};

module.exports = sendEmail;