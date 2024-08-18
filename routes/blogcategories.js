const express = require("express");

const {
    getBlogCategory,
  getSingleBlogCategory,
  createBlogCategory,
  updateBlogCategory,
  deleteBlogCategory,
} = require("../controller/blogcategories");

const router = express.Router();

router.get("/", getBlogCategory);
router.get("/:id", getSingleBlogCategory);
router.post("/", createBlogCategory);
router.put("/:id", updateBlogCategory);
router.delete("/:id", deleteBlogCategory);

module.exports = router;
