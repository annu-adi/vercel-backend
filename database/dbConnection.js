import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"MERN_STCK_HOSPITAL_MANAGEMENT_SYSTEM"
    }).then(()=>{
        console.log("Connection to database!")
    }).catch((err) => {
        console.log(`Some error occured while connecting to database:${err}`);
    });
}