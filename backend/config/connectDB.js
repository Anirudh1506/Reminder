import mongoose from "mongoose";

export const connectDB=async()=>{
    const url=process.env.MONGO_URI;
    try{
        const con=await mongoose.connect(url);
        console.log(`connection host: ${con.connection.host}`)
    }catch(e){
        console.log(e);
    }
}