
const category = require('../models/category');


exports.createcategory = async (req, res) => {
  try {
    const cat = await category.create(req.body);
    res.status(201).json({
      success: true,
      category: cat,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};



exports.getAllCategories=async (req, res) => {
    //return the array of categories available in our database
    // const categories = await category.find();
    try {
      const categories = await category.find();
      res.status(200).json({
        success: true,
        count: categories.length,
        categories
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Something went wrong",
        error: error,
      });
    }
  }

  exports.getSingleCategory=async (req, res) => {
  try{
const result=await category.findById(req.params.id);
res.status(200).json({
    success:true,
    category:result
})

}
  catch(error){
    res.status(404).json({
        success:false,
       message:"category not found",
       error:error.message
    })
  }
}

// exports.deleteCategory=async(req,res)=>{

//     try{
//         let result;
//         result=await category.findById(req.params.id);
//         if(!result){
//           res.status(404).json({
//             subscribe:false,
//             message:"provide valid id"
//           })
//         }
//         result=await category.findByIdAndDelete(req.params.id)
//         res.status(200).json({

//             success:true,
//             message:`category with the id ${req.params.id} was deleted`
//         })
//     }
//     catch(error){
//         res.status(404).json({

//             success:false,
//             message:`category with the id ${req.params.id} not found`
//         })
//     }
   

// }

exports.deleteCategory = async(req, res) => {
    
  try {
      let result;
      
      result = await category.findById(req.params.id)

      if(!result) {
          res.status(404).json({
              success: false,
              message: "Category not found"
          })
      }
      
      result = await category.findByIdAndDelete(req.params.id)
      res.status(200).json({
          success: true,
          message:  `Category with the ${req.params.id} was deleted`,
          category: result
      })
  } catch (error) {
      res.status(400).json({
          success: false,
          message: "Something went wrong!",
          error: error
      })
  }
}


exports.updateCategory=async(req,res)=>{
try {
  let result;
  result=await category.findById(req.params.id);
  if(!result){
    res.status(404).json({
      success:failure,
      message:`category with id ${req.params.id} do not exist `
    })
  }

    result=await category.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
      runValidators:true,
      new:true
    }
  )
    res.status(200).json({
      success:true,
      category1:result
    })
  
} catch (error) {
  res.status(404).json({
    success:failure,
    message: "something went wrong",
    error:error
  })
}
}