const router = require("express").Router();
const controller = require("../controllers/bookingcontroller");

router.post("/", controller.createBooking);
router.get("/", controller.getBookings);
router.put("/:id", controller.updateBooking);

module.exports = router;