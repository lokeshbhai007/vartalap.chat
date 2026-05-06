//one


import "../src/config/dotenv.js"; 
import express from 'express'
import dns from "dns"
dns.setServers(["1.1.1.1" , "8.8.8.8"])
import morgan from "morgan";



import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import { dbConnect } from './config/db.js';


const app = express()
app.use(express.json())
app.use(morgan("dev")); 

const port = process.env.PORT || 4000;

app.get("/", (req, res) =>{
    res.send("Hiii")
})

app.use("/api/auth", authRoutes )
app.use("/api/messages", messageRoutes )

dbConnect();
app.listen(port, ()=>{
    console.log(`Server running at ${port}`);
    
})

