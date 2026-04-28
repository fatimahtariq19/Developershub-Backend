const router = require("express").Router();
const controller = require("../controllers/blogController");

router.get("/", controller.getBlogs);
router.post("/", controller.createBlog);

module.exports = router;


