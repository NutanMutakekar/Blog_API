const express = require("express");
const connectDB = require("./db");
///connecting to the database should be before app (our application )initialization
connectDB();
const category = require("./models/category");
category();
const app = express();
const categoryRoute=require('./routes/categories');

const blogRoute=require('./routes/blogcategories');
// --  /categories is root url for opertaions performed on categories




//! read the body of the request
app.use(express.json());


//when someone will use post method express will match the '/categories as initial

app.use('/categories',categoryRoute);
app.use('/blogcat',blogRoute);


//to post the request we use http post method it has two arguments 1.url ,2.callback (callback has two arguments req and res)
//In this route handler for POST /categories, you’re creating a new category using category.create(req.body). This method is asynchronous and returns a promise that resolves to the newly created category object.

// Breakdown of category: cat

// category:: This is a key in the JSON response object. The key is category, and it’s used to label the data being sent back in the response.

// cat:: This is the variable that holds the newly created category object. It’s the result of the category.create(req.body) operation.

// app.post("/categories", async (req, res) => {
//   try {
//     const cat = await category.create(req.body);
//     res.status(201).json({
//       success: true,
//       category: cat,
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: "Something went wrong",
//       error: error,
//     });
//   }
// });

// app.get("/categories", async (req, res) => {
//   //return the array of categories available in our database
//   // const categories = await category.find();
//   try {
//     const categories = await category.find();
//     res.status(200).json({
//       success: true,
//       count: categories.length,
//       categories
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: "Something went wrong",
//       error: error,
//     });
//   }
// });

console.log("changes that should reflet to github 1")
console.log("changes that should reflet to github 2")

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`listening to port no ${PORT}`);
});


//--  /baseurl/id
// /categories/idcanbeanything
//     req.params.id is replaced by /categories/idcanbeanything(id givenby user)

//database will find the id if it is found it will return found
//otherwise it will return not found
// exports.getSingleCategory=async(req,res)=>{
//   await category.findById(req.params.id)
// }





