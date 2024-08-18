// const mongoose=require('mongoose')
// const blogSchema=mongoose.Schema({
// title:{
//     type:String,
//     required:[true,"please provide tittle for the blog"],
//     minLength:[5,"title cannot be less than 5 character"],
//     maxLength:[312,"title cannot be more than 312 character"],
    
// },
// body:{
//      type:String,
//      required:[true,"please provide body for the blog"],

// minLength:[512,"body cannot be less than 512 characters"]   
// },
// likes:{
//     type:Number,
//     default:0,
//     required:[true,"likes cannot be empty"],
    
// },
// status:{
//     type:String,
//     enum:["public","private"],
//     default:"private"
// },
// hastags:{
//     type:String,

// }

// })
// const Blog=mongoose.model('Blog',blogSchema)
// module.exports=Blog;

//mine
const mongoose=require('mongoose')

const blogSchema=mongoose.Schema({
title:{
    type:String,
    required:[true,"please provide title of the error"],
    minLength:[3,"title cannot be less than 5 characters"],
    maxLength:[312,"title cannot be less than 5 characters"],
    unique:true

},
body:{
    type:String,
    required:[true,"please provide title of the error"],
    minLength:[512,"title cannot be less than 5 characters"],
   
},
blogid:{
type:Number,
default:0,
minLength:[1,"blogid cannot be less than 1"]
},
hashtags:{
    type:String,

},
likes:{
    type:Number,
    default:0,
    required:[true,"likes cannot be empty"]
}

},
{
    timestamps:true
})

const blog=mongoose.model("blog",blogSchema)
module.exports=blog;