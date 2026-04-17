//import th model
const Todo = require("../models/Todo");

//define route handler

exports.updateTodo = async(req,res) => {
    try {
          const id = req.params.id;
          const {title,description}= req.body;
           const response = await Todo.findByIdAndUpdate({_id:id},{title:title,description:description,updatedAt:Date.now()})
           if(!response){
            return res.status(404).json({ success: false, message: 'Todo not found' });
          }
            res.status(200).json(
                {
                    success:true,
                    data:response,
                    message:'Entry updated Successfully'
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