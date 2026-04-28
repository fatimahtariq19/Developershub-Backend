const jwt = require("jsonwebtoken");
const User = require("../models/User");

// VERIFY TOKEN
const protect = async (req, res, next) => {
  try {
    let token;

    if (req.headers.authorization?.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } else {
      return res.status(401).json({ message: "Not authorized, no token" });
    }

  } catch (error) {
    return res.status(401).json({ message: "Token failed" });
  }
};

// CHECK ADMIN
const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({ message: "Admin only access" });
  }
};

module.exports = { protect, admin };



// const jwt = require('jsonwebtoken');
    // const User = require('../models/User');

    // // Protect routes - verify JWT token
    // const protect = async (req, res, next) => {
    // let token;

    // if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    //     token = req.headers.authorization.split(' ')[1];
    // }

    // if (!token) {
    //     return res.status(401).json({ success: false, message: 'Not authorized, no token' });
    // }

    // try {
    //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //     req.user = await User.findById(decoded.id).select('-password');
    //     next();
    // } catch (error) {
    //     return res.status(401).json({ success: false, message: 'Not authorized, token failed' });
    // }
    // };

    // // Admin only middleware
    // const adminOnly = (req, res, next) => {
    // if (req.user && req.user.role === 'admin') {
    //     next();
    // } else {
    //     res.status(403).json({ success: false, message: 'Access denied: Admin only' });
    // }
    // };

    // module.exports = { protect, adminOnly };