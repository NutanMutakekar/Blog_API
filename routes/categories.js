const express = require("express");

//The line const router = express.Router() creates a new instance of an Express router, which is used to define and manage route handlers in a modular and organized way. It allows you to create routes and middleware for your application in separate files or modules, and then mount them on the main application.
const router = express.Router();

//one way
// const  categoryControllere=require('../controller/categories')

//another way
const {
  getAllCategories,
  createcategory,
  getSingleCategory,
  deleteCategory,
  updateCategory
} = require("../controller/categories");
// -- /category
router.get("/", getAllCategories);
router.post("/", createcategory);
router.delete("/:id", deleteCategory);
router.get("/:id", getSingleCategory);
router.put("/:id",updateCategory)



module.exports = router;
