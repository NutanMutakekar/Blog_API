const mongoose = require("mongoose");

const connectDB = async () => 
{
  await mongoose.connect('mongodb://127.0.0.1:27017/blogAPI');
  console.log("connected to MongoDB server");
};
module.exports=connectDB;

