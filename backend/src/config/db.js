import mongoose  from "mongoose";

export const dbConnection = async(req,res)=>{
      try {
             mongoose.connect(process.env.MONGODB_URL)
             console.log("Data base connected")

      } catch (error) {
        console.log("db Error", error)
        return res.status(500).json({
            message:"server error"
        })
      }
} 