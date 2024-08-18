const mongoose=require('mongoose');

const categorySchema=mongoose.Schema(
    {
        name:String,
        description:String,
        
    },
    // timestamps:true
    //  because of this line mongoose can  handle createid and updateid automaticallly when used create or update anything in database no need to manually update them everytime
    {
      timestamps:true
    }
)

//collection
//mongoose model named catrgory (which is know as collection) is created based on the category schema

const category=mongoose.model('category',categorySchema);

module.exports =category;
