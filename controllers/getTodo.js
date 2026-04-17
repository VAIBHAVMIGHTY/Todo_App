//import th model
const Todo = require("../models/Todo");

//define route handler

exports.getTodo = async(req,res) => {
    try {
           const response = await Todo.find({});
            res.status(200).json(
                {
                    success:true,
                    data:response,
                    message:'Entry Found Successfully'
                }
            );
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}

exports.getTodoById = async(req,res) => {
    try { 
          const id = req.params.id;
          const response = await Todo.findById({_id:id});
          if(!response){
            return res.status(404).json({ success: false, message: 'Todo not found' });
          }
            res.status(200).json(
                {
                    success:true,
                    data:response,
                    message:'Entry Found Successfully'
                }
            );
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}