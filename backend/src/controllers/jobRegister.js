import JobOrder from "../models/jobOrder"

export const createOrder = async (req,res)=>{
   const {tittle,description,skill,address} = req.body
   try {
       
        const newJob = JobOrder.create({
            tittle,
            description,
            skill,
            address
        })
        res.status(201).json({
            success:true,
            job :newJob,
            message:"job created succefull"
        })

   } catch (error) {
    
   }

}