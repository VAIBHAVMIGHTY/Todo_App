const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxlength:50
    },
    description:{
        type:String,
        required:true,
        maxlength:200
        },
    createdAt:{
        type:Date,
        default:Date.now,
        required:true
    },
    updatedAt:{
        type:Date,
        default:Date.now,
        required:true
        }
})

module.exports = mongoose.model("Todo",TodoSchema);