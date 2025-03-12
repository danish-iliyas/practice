import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
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