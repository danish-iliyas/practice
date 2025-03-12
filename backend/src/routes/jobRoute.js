import express from "express";
import { Router } from "express";
import { createOrder, getAllJob, getJobById } from "../controllers/jobRegister.js";


const router = express.Router()

router.post("/reg", createOrder)
router.get("/allJOb",getAllJob)
router.get("/jobById/:id" , getJobById)


export default router