import mongoose from "mongoose";

export const conectdb= async()=>{
try {
   await mongoose.connect("mongodb://localhost:27017/carsystem");
    console.log("database connected")

} catch (error) {
    console.log("faild in connext " , error)
}
}

