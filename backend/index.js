import express from "express"
import env from "dotenv"
import { dbConnection } from "./src/config/db.js";
import jobRoutes from "./src/routes/jobRoute.js"
 
env.config();
const app = express();

// middlewares
app.use(express.json());


app.get('/',(req,res)=>{
    res.send(
        "hi"
    )
})

app.use('/api/v1' , jobRoutes);

const port = 5000;

dbConnection().then(()=>{
    app.listen(port,()=>{
        console.log("server is running" , port)
        })
})
