import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    tittle:{
            type:String,
            required:true
        },
    description:{
            type:String,
            required:true        
    },
    skill:{
        type:String,
        required:true
    },
    address:{
         type:String,
         required:true
    }
},{timestamps:true,})

export default mongoose.model('JobSchema',jobSchema)