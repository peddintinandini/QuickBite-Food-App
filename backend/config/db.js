import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://peddintinandini1:Nandu2973@fooddel.z7zf9lo.mongodb.net/fooddel=fooddel').then(()=>console.log("DB connected"));  
}