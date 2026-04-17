const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => {
        console.log("connection unsuccessful");
        console.log(err.message)});
       
}
module.exports=dbConnect