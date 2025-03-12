import JobSchema from "../models/jobOrder.js"

export const createOrder = async (req,res)=>{   
   const {title,description,skill,address} = req.body
   console.log(req.body)
   if (!title || !description || !skill || !address) {
    return res.status(400).json({
        message: "All fields are required."
    });
}
//    console.log(req.body)
   try {
       
        const newJob = new JobSchema({
            title,
            description,
            skill,
            address
        })
          const job = await newJob.save()
        res.status(201).json({
            success:true,
            job :job,
            message:"job created succefull"
        })

   } catch (error) {
        console.log("Error in create order" , error)
        res.status(500).json({
            message:"error in creating job"
        })
   }

}

export const getAllJob =async(reg,res)=>{
     const jobs = await JobSchema.find()
       console.log(jobs)

       if(jobs.length==0){
        return res.status(404).json({
            message:"job Not Found"
        })
       }
       res.status(200).json({
             allJob :jobs
       })
}

export const getJobById =async(req,res)=>{
    const {id} = req.params
    console.log(id ,"id")
    const job = await JobSchema.findById(id)
    console.log(job)
     if(!job){
        return res.status(400).json({
            message:"job in not avaliable"
        })
     }
     res.status(201).json({
        job:job,
        success:true
     })
}

export const deleteJobById =async(req,res)=>{
    const {id} = req.params
    console.log(id ,"id")
    const job = await JobSchema.findByIdAndDelete(id)
    console.log(job)
     if(!job){
        return res.status(400).json({
            message:"job in not avaliable"
        })
     }
     res.status(201).json({
        job:job,
        success:true
     })
}