const blog = require("../models/Blog");
exports.getBlogCategory = async (req, res) => {
  try {
    let result;
    result = await blog.find();

    res.status(200).json({
      success: true,
      message: "found",
      category: result.length,
      result,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "no blog categories exist",
      error: error,
    });
  }
};
exports.getSingleBlogCategory = async (req, res) => {
    try {
        let result;
        result = await blog.findById(req.params.id);
        if (!result) {
          res.status(404).json({
            success: false,
            message: `blog category with id ${req.params.id} not found`,
          });
        }
  
      res.status(200).json({
        success: true,
        message: "found",
        category: result.length,
        result
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: "no blog categories exist",
        error: error
      });
    }
  };


exports.createBlogCategory = async (req, res) => {
  try {
    let result;
    result = await blog.create(req.body)

    res.status(200).json({
      success: true,
      message: "created",
      result,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "no blog categories cannot be created",
      error: error,
    });
  }
};

// updateBlogCategory,
// deleteBlogCategory,
exports.updateBlogCategory = async (req,res) => {
  try {
    let result;
    result = await blog.findById(req.params.id);
    if (!result) {
      res.status(404).json({
        success: false,
        message: `blog category with id ${req.params.id} not found`,
      });
    }
    result = await blog.findByIdAndUpdate(req.params.id, req.body,
    {
      runvalidator: true,
      new: true,
    }
);
    res.status(200).json({
      success: true,
      message: `blog category with id ${req.params.id} is updated`,
      result,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "something went wrong",
    });
  }
};

exports.deleteBlogCategory=async(req,res)=>{
    try {
        let result;
        result = await blog.findById(req.params.id);
        if (!result) {
          res.status(404).json({
            success: false,
            message: `blog category with id ${req.params.id} not found`,
          });
        }
        result = await blog.findByIdAndDelete(req.params.id);
        res.status(200).json({
          success: true,
          message: `blog category with id ${req.params.id} is deleted`,
          result,
        });
      } catch (error) {
        res.status(200).json({
          success: false,
          message: "something went wrong",
        });
      }
}