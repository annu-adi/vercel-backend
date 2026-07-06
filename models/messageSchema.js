import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First Name Must Contain At Least 3 Characters!"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3, "Last Name Must Contain At 3 Charactor!"]
    },
     email:{
       type:String,
        required:true,
        validate:[validator.isEmail, "Please Provide A Valid Email!"]
    },
    phone:{
       type:String,
       required:true,
       minLength:[11, "Please Number Must Contain 11 Digits!"], 
       maxLength:[11, "Please Number Must Contain 11 Digits!"]
    },
    address:{
        type:String,
        required:true,
        minLength:[4, "Please name must Contain 4 Digits!"]

    },
     message:{
        type:String,
        required:true,
        minLength:[10, "Message Must Contain At Least 10 Character!"],
    }
});
    export const Message = mongoose.model("Message", messageSchema);
