import express from "express";
import { Router } from "express";


const router = express.Router()
router.post("register", createOrder)

export default router