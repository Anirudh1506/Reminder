import mongoose from "mongoose";

const use=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        select:false
    }
});

export default mongoose.model("user",use);