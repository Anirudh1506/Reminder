import mongoose from "mongoose";

const rem= mongoose.Schema({
    data:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    cat:{
        type:String,
        required:true
    },
    curr:{
        type:Date,
        required:true
    }
});

export default mongoose.model("remind",rem);