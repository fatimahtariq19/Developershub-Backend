const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const connectDB = require("./config/db");

// Load env variables
dotenv.config();

// Initialize app FIRST (IMPORTANT FIX)
const app = express();

// =========================
// DATABASE CONNECTION
// =========================
connectDB();

// =========================
// MIDDLEWARE
// =========================

// Allow both frontend + admin dashboard
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =========================
// STATIC FILES
// =========================
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// =========================
// ROUTES
// =========================
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/services", require("./routes/serviceRoutes"));
app.use("/api/portfolio", require("./routes/portfolioRoutes"));
app.use("/api/blogs", require("./routes/blogRoutes"));
app.use("/api/inquiries", require("./routes/inquiryRoutes"));
app.use("/api/bookings", require("./routes/bookingroutes"));
app.use("/api/categories", require("./routes/categoryRoutes"));
app.use("/api/jobs", require("./routes/jobRoutes"));
app.use("/api/warningmessage", require("./routes/warningRoutes"))

// =========================
// ROOT ROUTE
// =========================
app.get("/", (req, res) => {
  res.json({ message: "DevelopersHub API is running 🚀" });
});

// =========================
// ERROR HANDLER
// =========================
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Server Error",
    error: err.message,
  });
});

// =========================
// START SERVER
// =========================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
